import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import Joi from "joi";

//validasi
const schema = Joi.object({
  productIds: Joi.array()
    .items(Joi.number().integer())
    .min(1)
    .required()
    .messages({
      "array.base": "Product list must be an array",
      "array.min": "You must select at least one product",
      "any.required": "Product selection is required",
    }),
  budget: Joi.number().positive().required().messages({
    "number.base": "Budget must be a number",
    "number.positive": "Silahkan isi budget",
    "any.required": "Budget is required",
  }),
});

//Perhitungan Cosine Similarity
const cosineSimilarity = (vecA, vecB) => {
  //Menghitung dot product
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  //Menghitung panjang vektor A dan B
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  //Mengecek kedua vektor dan hasil cosine similarity
  return magnitudeA && magnitudeB
    ? +(dotProduct / (magnitudeA * magnitudeB)).toFixed(3)
    : 0;
};

//Membuat Bundling
function generateBundles(
  candidatesByCategory,
  maxBudget,
  minAvgScore,
  benefitId
) {
  const result = [];
  const usedProductIds = new Set();
  const maxBundles = 10;

  //Filter dan urutkan produk per kategori
  const trimmedCandidates = candidatesByCategory.map((categoryProducts) =>
    categoryProducts
      .filter(
        (product) => product.score >= 0.001 && product.benefitId === benefitId
      )
      .sort((a, b) => b.score - a.score)
  );

  //Fungsi pencarian dengan backtracking
  function backtrack(index, currentBundle, totalPrice) {
    if (result.length >= maxBundles) return;
    if (totalPrice > maxBudget) return;

    if (index === trimmedCandidates.length) {
      if (currentBundle.length >= 3) {
        const avgScore =
          currentBundle.reduce((sum, p) => sum + p.score, 0) /
          currentBundle.length;

        const hasUsed = currentBundle.some((p) => usedProductIds.has(p.id));
        if (!hasUsed && avgScore >= 0.001) {
          result.push({ bundle: [...currentBundle], totalPrice, avgScore });
          currentBundle.forEach((p) => usedProductIds.add(p.id));
        }
      }
      return;
    }

    const categoryOptions = trimmedCandidates[index];

    for (const product of categoryOptions) {
      if (result.length >= maxBundles) return;
      if (usedProductIds.has(product.id)) continue;
      if (totalPrice + product.price > maxBudget) continue;

      currentBundle.push(product);
      backtrack(index + 1, currentBundle, totalPrice + product.price);
      currentBundle.pop();
    }

    backtrack(index + 1, currentBundle, totalPrice);
  }

  backtrack(0, [], 0);

  return result.sort((a, b) => b.avgScore - a.avgScore);
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productIds =
      searchParams.get("productId")?.split(",").map(Number) || [];
    const maxBudget = parseInt(searchParams.get("budget"));

    if (productIds.length === 0) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }

    const selectedProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      include: {
        Category: { select: { name: true } },
        Benefit: { select: { id: true, name: true } },
      },
    });

    const benefitCount = {};
    for (const p of selectedProducts) {
      const benefitId = p.benefitId;
      if (benefitId) {
        benefitCount[benefitId] = (benefitCount[benefitId] || 0) + 1;
      }
    }

    const benefitDominantId = Object.entries(benefitCount).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];

    if (!benefitDominantId) {
      return NextResponse.json(
        { error: "Benefit ID not found from selected products" },
        { status: 400 }
      );
    }

    const calcs = await prisma.calculationData.findMany({
      select: {
        transaction: true,
        productId: true,
      },
    });

    const products = await prisma.product.findMany({
      include: {
        Category: { select: { name: true } },
        Benefit: { select: { name: true } },
      },
    });

    const bundleCategory = await prisma.bundleCategory.findFirst({
      where: { benefitId: parseInt(benefitDominantId) },
      include: {
        categories: {
          include: {
            Category: { select: { name: true } },
          },
        },
      },
    });

    const kategoriWajib = bundleCategory
      ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
      : [];

    const fakeTransactionCode = "SELECT";
    const userSelectedTransaction = productIds.map((id) => ({
      transaction: fakeTransactionCode,
      productId: id,
    }));
    const updatedCalcs = [...calcs, ...userSelectedTransaction];

    const productIndexMap = products.map((p) => p.id);
    const transactions = updatedCalcs.map((calc) => calc.transaction);
    const trxCodes = [...new Set(transactions)];

    const matrix = trxCodes.map((trxCode) => {
      const trxItems = updatedCalcs.filter((c) => c.transaction === trxCode);
      const boughtIds = trxItems.map((i) => i.productId);
      return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
    });

    const transpose = (matrix) =>
      matrix[0].map((_, i) => matrix.map((row) => row[i]));
    const productVectors = transpose(matrix);

    const selectedIndexes = productIds
      .map((id) => productIndexMap.indexOf(id))
      .filter((idx) => idx !== -1);

    if (selectedIndexes.length === 0) {
      return NextResponse.json(
        { error: "Product ID(s) not found" },
        { status: 404 }
      );
    }

    const combinedSimilarities = [];
    for (let i of selectedIndexes) {
      for (let j = 0; j < productVectors.length; j++) {
        const sim =
          i === j ? 1 : cosineSimilarity(productVectors[i], productVectors[j]);
        const prod = products[j];
        combinedSimilarities.push({
          id: prod.id,
          name: prod.name,
          category: prod.Category?.name || null,
          price: prod.price || 0,
          score: +sim.toFixed(3),
        });
      }
    }

    const scoreMap = {};
    for (const item of combinedSimilarities) {
      if (!scoreMap[item.id]) {
        scoreMap[item.id] = {
          maxScore: item.score,
          data: item,
        };
      } else {
        scoreMap[item.id].maxScore = Math.max(
          scoreMap[item.id].maxScore,
          item.score
        );
      }
    }

    // const averagedSimilarities = Object.values(scoreMap)
    //   .map(({ maxScore, data }) => ({
    //     id: data.id,
    //     name: data.name,
    //     category: data.category,
    //     price: data.price,
    //     score: +maxScore.toFixed(3),
    //   }))
    //   .filter(
    //     (item) =>
    //       !selectedIndexes.includes(
    //         products.findIndex((p) => p.id === item.id)
    //       ) && item.score > 0
    //   );
    // averagedSimilarities.sort((a, b) => b.score - a.score);
    const averagedSimilarities = Object.values(scoreMap)
      .map(({ maxScore, data }) => {
        const productData = products.find((p) => p.id === data.id);
        return {
          id: data.id,
          name: data.name,
          category: data.category,
          price: data.price,
          score: +maxScore.toFixed(3),
          benefitId: productData?.benefitId,
          benefitName: productData?.Benefit?.name || null,
        };
      })
      .filter(
        (item) =>
          !selectedIndexes.includes(
            products.findIndex((p) => p.id === item.id)
          ) && item.score > 0
      );
    averagedSimilarities.sort((a, b) => b.score - a.score);

    const totalScore = averagedSimilarities.reduce(
      (sum, p) => sum + p.score,
      0
    );
    const avgAllScore = averagedSimilarities.length
      ? totalScore / averagedSimilarities.length
      : 0;

    const kategoriTersedia = kategoriWajib.filter((kategori) =>
      averagedSimilarities.some((item) => item.category === kategori)
    );

    const candidatesByCategory = kategoriTersedia.map((kategori) =>
      averagedSimilarities.filter((item) => item.category === kategori)
    );

    // const allBundles = generateBundles(
    //   candidatesByCategory,
    //   maxBudget,
    //   avgAllScore
    // );
    const allBundles = generateBundles(
      candidatesByCategory,
      maxBudget,
      avgAllScore,
      parseInt(benefitDominantId)
    );

    const sortedBundles = allBundles
      .map((b) => ({
        bundle: b.bundle,
        totalPrice: b.totalPrice,
        totalScore: b.bundle.reduce((sum, p) => sum + p.score, 0),
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    const filteredBundles = sortedBundles.filter(
      (b) => b.avgScore > avgAllScore
    );
    return NextResponse.json({
      avgAllScore: avgAllScore,
      selectedProductIds: productIds,
      dominantBenefitId: benefitDominantId,
      recommended: averagedSimilarities,
      maxBudget,
      bundles: filteredBundles,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch recommendations",
        detail: error.message || error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    //Ambil dan parse body request
    const body = await req.json();

    //Validasi input menggunakan schema
    const { error, value } = schema.validate(body, { abortEarly: false });
    if (error) {
      //Format ulang error ke dalam objek yang lebih rapi
      const errorObject = {};
      error.details.forEach((detail) => {
        const field = detail.path[0];
        if (field === "productIds") {
          errorObject["product"] = detail.message;
        } else {
          errorObject[field] = detail.message;
        }
      });
      //Jika validasi gagal, kirim response 400
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: errorObject,
        },
        { status: 400 }
      );
    }

    //Ambil nilai input valid
    const { productIds, budget } = value;

    //Ambil produk yang dipilih dan relasi Benefit-nya
    const selectedProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      include: { Benefit: true },
    });

    //Hitung benefit dominan dari produk terpilih
    const benefitCount = {};
    for (const p of selectedProducts) {
      const benefitId = p.benefitId;
      if (benefitId) {
        benefitCount[benefitId] = (benefitCount[benefitId] || 0) + 1;
      }
    }
    const benefitDominantId = Object.entries(benefitCount).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];

    //Jika tidak ditemukan benefit dominan, kirim error
    if (!benefitDominantId) {
      return NextResponse.json(
        { error: "Benefit ID not found" },
        { status: 400 }
      );
    }

    //Ambil data transaksi historis
    const calcs = await prisma.calculationData.findMany({
      select: { transaction: true, productId: true },
    });

    //Ambil semua data produk dan kategorinya
    const products = await prisma.product.findMany({
      include: { Category: true },
    });

    //Ambil kategori wajib dari bundleCategory berdasarkan benefit dominan
    const bundleCategory = await prisma.bundleCategory.findFirst({
      where: { benefitId: parseInt(benefitDominantId) },
      include: { categories: { include: { Category: true } } },
    });

    const kategoriWajib = bundleCategory
      ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
      : [];

    //Simulasikan transaksi user dengan kode palsu "SELECT"
    const fakeTransactionCode = "SELECT";
    const userSelectedTransaction = productIds.map((id) => ({
      transaction: fakeTransactionCode,
      productId: id,
    }));
    const updatedCalcs = [...calcs, ...userSelectedTransaction];

    //Buat mapping ID produk dan daftar kode transaksi unik
    const productIndexMap = products.map((p) => p.id);
    const transactions = [...new Set(calcs.map((c) => c.transaction))];
    const trxCodes = [...new Set(transactions)];

    //Buat matriks transaksi x produk berisi 0/1 (beli/tidak)
    const matrix = trxCodes.map((trxCode) => {
      const trxItems = updatedCalcs.filter((c) => c.transaction === trxCode);
      const boughtIds = trxItems.map((i) => i.productId);
      return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
    });

    //Transpose matrix → dapatkan vektor produk (kolom)
    const transpose = (matrix) =>
      matrix[0].map((_, i) => matrix.map((row) => row[i]));
    const productVectors = transpose(matrix);

    //Ambil indeks produk terpilih berdasarkan urutan ID
    const selectedIndexes = productIds
      .map((id) => productIndexMap.indexOf(id))
      .filter((i) => i !== -1);

    if (selectedIndexes.length === 0) {
      return NextResponse.json(
        { error: "Product ID(s) not found" },
        { status: 404 }
      );
    }

    //Hitung similarity antar produk terpilih dan seluruh produk
    const combinedSimilarities = [];
    for (let i of selectedIndexes) {
      for (let j = 0; j < productVectors.length; j++) {
        const sim =
          i === j ? 1 : cosineSimilarity(productVectors[i], productVectors[j]);
        const prod = products[j];
        combinedSimilarities.push({
          id: prod.id,
          name: prod.name,
          category: prod.Category?.name || null,
          price: prod.price || 0,
          score: +sim.toFixed(3),
        });
      }
    }
    //Ambil skor tertinggi dari setiap produk
    const scoreMap = {};
    for (const item of combinedSimilarities) {
      if (!scoreMap[item.id]) {
        scoreMap[item.id] = {
          maxScore: item.score,
          data: item,
        };
      } else {
        scoreMap[item.id].maxScore = Math.max(
          scoreMap[item.id].maxScore,
          item.score
        );
      }
    }

    //Buat daftar produk mirip dan tidak termasuk produk terpilih
    const averagedSimilarities = Object.values(scoreMap)
      .map(({ maxScore, data }) => {
        const productData = products.find((p) => p.id === data.id);
        return {
          id: data.id,
          name: data.name,
          category: data.category,
          price: data.price,
          score: +maxScore.toFixed(3),
          benefitId: productData?.benefitId,
          benefitName: productData?.Benefit?.name || null,
        };
      })
      .filter(
        (item) =>
          !selectedIndexes.includes(
            products.findIndex((p) => p.id === item.id)
          ) && item.score > 0
      );
    //Urutkan berdasarkan skor similarity tertinggi
    averagedSimilarities.sort((a, b) => b.score - a.score);

    //Hitung rata-rata skor keseluruhan produk mirip
    const totalScore = averagedSimilarities.reduce(
      (sum, p) => sum + p.score,
      0
    );
    const avgAllScore = averagedSimilarities.length
      ? totalScore / averagedSimilarities.length
      : 0;

    //Ambil kategori wajib yang tersedia di hasil similarity
    const kategoriTersedia = kategoriWajib.filter((kategori) =>
      averagedSimilarities.some((item) => item.category === kategori)
    );

    //Kelompokkan produk mirip berdasarkan kategori wajib
    const candidatesByCategory = kategoriTersedia.map((kategori) =>
      averagedSimilarities.filter((item) => item.category === kategori)
    );

    //Bangun bundling berdasarkan data kandidat
    const allBundles = generateBundles(
      candidatesByCategory,
      budget,
      avgAllScore,
      parseInt(benefitDominantId)
    );

    //Hitung ulang total skor dan urutkan bundling berdasarkan skor rata-rata tertinggi
    const sortedBundles = allBundles
      .map((b) => ({
        bundle: b.bundle,
        totalPrice: b.totalPrice,
        totalScore: b.bundle.reduce((sum, p) => sum + p.score, 0),
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    //Fungsi bantu: buat kode unik isi bundle
    function generateSignature(bundle, budget) {
      const sortedProductIds = bundle.bundle
        .map((item) => item.id)
        .sort((a, b) => a - b)
        .join("");
      return `${sortedProductIds}${budget}`;
    }

    //Simpan hasil bundling jika belum pernah disimpan
    const savedBundles = await Promise.all(
      sortedBundles.map(async (bundle) => {
        const signature = generateSignature(bundle, budget);
        const existing = await prisma.savedBundle.findFirst({
          where: { signature },
        });

        if (existing) return existing;
        const benefit = await prisma.benefit.findUnique({
          where: { id: parseInt(benefitDominantId) },
        });

        const benefitName = benefit?.name || "Unknown";
        const savedBundle = await prisma.savedBundle.create({
          data: {
            benefitId: parseInt(benefitDominantId),
            name: `Bundling ${benefitName}`,
            budget,
            totalScore: bundle.avgScore,
            signature,
            totalPrice: bundle.totalPrice,
            items: {
              create: bundle.bundle.map((item) => ({
                productId: item.id,
                price: item.price,
                score: item.score,
              })),
            },
          },
        });

        return savedBundle;
      })
    );

    //Format hasil akhir untuk dikirim ke frontend
    const response = sortedBundles.map((bundle, idx) => ({
      bundleId: savedBundles[idx].id,
      bundle: bundle.bundle.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        score: item.score,
      })),
      total: bundle.totalPrice,
      avgScore: bundle.avgScore,
    }));
    //Kirim hasil bundling ke klien
    return NextResponse.json({ savedBundles, bundles: response });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save bundling",
        detail: error.message || error,
      },
      { status: 500 }
    );
  }
}
