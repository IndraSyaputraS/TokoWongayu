import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import Joi from "joi";

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

// Fungsi untuk menghitung Cosine Similarity antar dua vektor
const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return magnitudeA && magnitudeB
    ? +(dotProduct / (magnitudeA * magnitudeB)).toFixed(3)
    : 0;
};

function generateBundles(candidatesByCategory, maxBudget) {
  const results = [];

  function backtrack(bundle = [], index = 0, total = 0) {
    if (total > maxBudget) return;

    if (index === candidatesByCategory.length) {
      if (total <= maxBudget) {
        results.push({ bundle, total });
      }
      return;
    }

    for (const product of candidatesByCategory[index]) {
      if (product.price && total + product.price <= maxBudget) {
        backtrack([...bundle, product], index + 1, total + product.price);
      }
    }
  }

  backtrack();
  return results;
}

function generateSignature(bundle, budget) {
  const sortedProductIds = bundle.bundle
    .map((item) => item.productId)
    .sort((a, b) => a - b) // Urutkan untuk konsistensi
    .join("");
  return `${sortedProductIds}${budget}`;
}

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const productIds =
//       searchParams.get("productId")?.split(",").map(Number) || [];
//     const maxBudget = parseInt(searchParams.get("budget"));

//     if (productIds.length === 0) {
//       return NextResponse.json({ error: "Missing productId" }, { status: 400 });
//     }

//     // Ambil data produk yang dipilih
//     const selectedProducts = await prisma.product.findMany({
//       where: { id: { in: productIds } },
//       include: {
//         Category: { select: { name: true } },
//         Benefit: { select: { id: true, name: true } },
//       },
//     });

//     // Validasi dan hitung benefit dominan
//     const benefitCount = {};
//     for (const p of selectedProducts) {
//       const benefitId = p.benefitId;
//       if (benefitId) {
//         benefitCount[benefitId] = (benefitCount[benefitId] || 0) + 1;
//       }
//     }

//     const benefitDominantId = Object.entries(benefitCount).sort(
//       (a, b) => b[1] - a[1]
//     )[0]?.[0];

//     if (!benefitDominantId) {
//       return NextResponse.json(
//         { error: "Benefit ID not found from selected products" },
//         { status: 400 }
//       );
//     }

//     const calcs = await prisma.calculationData.findMany({
//       select: {
//         transaction: true,
//         productId: true,
//       },
//     });

//     const products = await prisma.product.findMany({
//       include: {
//         Category: { select: { name: true } },
//       },
//     });

//     const bundleCategory = await prisma.bundleCategory.findFirst({
//       where: { benefitId: parseInt(benefitDominantId) },
//       include: {
//         categories: {
//           include: {
//             Category: { select: { name: true } },
//           },
//         },
//       },
//     });

//     const kategoriWajib = bundleCategory
//       ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
//       : [];

//     const productIndexMap = products.map((p) => p.id);
//     const transactions = calcs.map((calc) => calc.transaction);
//     const trxCodes = [...new Set(transactions)];

//     const matrix = trxCodes.map((trxCode) => {
//       const trxItems = calcs.filter((c) => c.transaction === trxCode);
//       const boughtIds = trxItems.map((i) => i.productId);
//       return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
//     });

//     const transpose = (matrix) =>
//       matrix[0].map((_, i) => matrix.map((row) => row[i]));
//     const productVectors = transpose(matrix);

//     const selectedIndexes = productIds
//       .map((id) => productIndexMap.indexOf(id))
//       .filter((idx) => idx !== -1);

//     if (selectedIndexes.length === 0) {
//       return NextResponse.json(
//         { error: "Product ID(s) not found" },
//         { status: 404 }
//       );
//     }

//     const combinedVector = productVectors[0].map((_, i) =>
//       selectedIndexes.reduce((sum, idx) => sum + productVectors[idx][i], 0)
//     );

//     const similarityRow = productVectors.map((vector, idx) => {
//       const score = cosineSimilarity(combinedVector, vector);
//       return { index: idx, score };
//     });

//     const topSimilar = similarityRow
//       .filter(({ index }) => !selectedIndexes.includes(index))
//       .map(({ index, score }) => {
//         const prod = products.find((p) => p.id === productIndexMap[index]);
//         return {
//           id: prod?.id,
//           name: prod?.name,
//           category: prod?.Category?.name,
//           price: prod?.price,
//           score: +score.toFixed(3),
//         };
//       })
//       .filter((item) => item.score > 0)
//       .sort((a, b) => b.score - a.score);

//     const candidatesByCategory = kategoriWajib.map((kategori) =>
//       topSimilar.filter((item) => item.category === kategori)
//     );

//     const allBundles = generateBundles(candidatesByCategory, maxBudget);

//     const sortedBundles = allBundles
//       .map((b) => ({
//         ...b,
//         avgScore:
//           b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
//       }))
//       .sort((a, b) => b.avgScore - a.avgScore);

//     const totalScore = topSimilar.reduce((sum, item) => sum + item.score, 0);
//     const rataScore =
//       topSimilar.length > 0 ? (totalScore / topSimilar.length).toFixed(3) : 0;

//     return NextResponse.json({
//       selectedProductIds: productIds,
//       dominantBenefitId: benefitDominantId,
//       recommendedBundle: topSimilar,
//       maxBudget,
//       totalScore: totalScore.toFixed(3),
//       rataScore,
//       bundles: sortedBundles.slice(0, 5),
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to fetch recommendations",
//         detail: error,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { error, value } = schema.validate(body, { abortEarly: false });
//     if (error) {
//       const errorObject = {};
//       error.details.forEach((detail) => {
//         const field = detail.path[0];
//         if (field === "productIds") {
//           errorObject["product"] = detail.message;
//         } else {
//           errorObject[field] = detail.message;
//         }
//       });

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Validation failed",
//           errors: errorObject,
//         },
//         { status: 400 }
//       );
//     }

//     const { productIds, budget } = value;

//     const selectedProducts = await prisma.product.findMany({
//       where: { id: { in: productIds } },
//       include: { Benefit: true },
//     });

//     const benefitCount = {};
//     for (const p of selectedProducts) {
//       const benefitId = p.benefitId;
//       if (benefitId) {
//         benefitCount[benefitId] = (benefitCount[benefitId] || 0) + 1;
//       }
//     }

//     const benefitDominantId = Object.entries(benefitCount).sort(
//       (a, b) => b[1] - a[1]
//     )[0]?.[0];

//     if (!benefitDominantId) {
//       return NextResponse.json(
//         { error: "Benefit ID not found" },
//         { status: 400 }
//       );
//     }

//     const calcs = await prisma.calculationData.findMany({
//       select: { transaction: true, productId: true },
//     });

//     const products = await prisma.product.findMany({
//       include: { Category: true },
//     });

//     const bundleCategory = await prisma.bundleCategory.findFirst({
//       where: { benefitId: parseInt(benefitDominantId) },
//       include: { categories: { include: { Category: true } } },
//     });

//     const kategoriWajib = bundleCategory
//       ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
//       : [];

//     const productIndexMap = products.map((p) => p.id);

//     const transactions = [...new Set(calcs.map((c) => c.transaction))];

//     const matrix = transactions.map((trxCode) => {
//       const trxItems = calcs.filter((c) => c.transaction === trxCode);
//       const boughtIds = trxItems.map((i) => i.productId);
//       return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
//     });

//     const transpose = (matrix) =>
//       matrix[0].map((_, i) => matrix.map((row) => row[i]));

//     const productVectors = transpose(matrix);

//     const selectedIndexes = productIds
//       .map((id) => productIndexMap.indexOf(id))
//       .filter((i) => i !== -1);

//     const combinedVector = productVectors[0].map((_, i) =>
//       selectedIndexes.reduce((sum, idx) => sum + productVectors[idx][i], 0)
//     );

//     const similarityRow = productVectors.map((vector, idx) => {
//       const score = cosineSimilarity(combinedVector, vector);
//       return { index: idx, score };
//     });

//     const topSimilar = similarityRow
//       .filter(({ index }) => !selectedIndexes.includes(index))
//       .map(({ index, score }) => {
//         const prod = products.find((p) => p.id === productIndexMap[index]);
//         return {
//           productId: prod.id,
//           name: prod.name,
//           benefitId: prod.benefitId,
//           price: prod.price,
//           category: prod.Category.name,
//           score,
//         };
//       })
//       .filter((item) => item.score > 0)
//       .sort((a, b) => b.score - a.score);

//     const candidatesByCategory = kategoriWajib.map((kategori) =>
//       topSimilar.filter((item) => item.category === kategori)
//     );

//     const allBundles = generateBundles(candidatesByCategory, budget);

//     if (allBundles.length === 0) {
//       return NextResponse.json(
//         { error: "No bundle fits the budget" },
//         { status: 400 }
//       );
//     }

//     const bestBundles = allBundles
//       .map((b) => ({
//         ...b,
//         avgScore:
//           b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
//       }))
//       .sort((a, b) => b.avgScore - a.avgScore);

//     // Save the best bundle into the database
//     const savedBundles = await Promise.all(
//       bestBundles.map(async (bundle) => {
//         const signature = generateSignature(bundle, budget);
//         // Cek apakah sudah ada bundle dengan signature ini
//         const existing = await prisma.savedBundle.findFirst({
//           where: { signature },
//         });

//         if (existing) return existing;

//         const savedBundle = await prisma.savedBundle.create({
//           data: {
//             benefitId: parseInt(benefitDominantId),
//             budget,
//             totalScore: bundle.avgScore,
//             signature,
//             totalPrice: bundle.total,
//             items: {
//               create: bundle.bundle.map((item) => ({
//                 productId: item.productId,
//                 price: item.price,
//                 score: item.score,
//               })),
//             },
//           },
//         });

//         return savedBundle;
//       })
//     );

//     const response = bestBundles.map((bundle, idx) => ({
//       bundleId: savedBundles[idx], // pastikan ini ID yang baru disimpan dari DB
//       bundle: bundle.bundle.map((item) => ({
//         id: item.productId,
//         name: item.name,
//         benefitId: item.benefitId, // pastikan item punya benefitId
//         category: item.category,
//         price: item.price,
//         score: item.score,
//       })),
//       total: bundle.total,
//       avgScore: bundle.avgScore,
//     }));

//     return NextResponse.json({ savedBundles, bundles: response });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to save bundling",
//         detail: error,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const { error, value } = schema.validate(body, { abortEarly: false });
    if (error) {
      const errorObject = {};
      error.details.forEach((detail) => {
        const field = detail.path[0];
        if (field === "productIds") {
          errorObject["product"] = detail.message;
        } else {
          errorObject[field] = detail.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: errorObject,
        },
        { status: 400 }
      );
    }

    const { productIds, budget } = value;

    // Ambil produk terpilih sekaligus benefitId
    const selectedProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      include: { Benefit: true },
    });

    // Hitung benefit dominant berdasarkan produk terpilih
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
        { error: "Benefit ID not found" },
        { status: 400 }
      );
    }

    // Ambil semua data transaksi dan produk untuk hitung matrix transaksi-produk
    const calcs = await prisma.calculationData.findMany({
      select: { transaction: true, productId: true },
    });

    const products = await prisma.product.findMany({
      include: { Category: true },
    });

    const bundleCategory = await prisma.bundleCategory.findFirst({
      where: { benefitId: parseInt(benefitDominantId) },
      include: { categories: { include: { Category: true } } },
    });

    const kategoriWajib = bundleCategory
      ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
      : [];

    // Buat mapping id produk ke indeks
    const productIndexMap = products.map((p) => p.id);

    // Ambil transaksi unik
    const transactions = [...new Set(calcs.map((c) => c.transaction))];

    // Buat matrix transaksi x produk (1 jika produk dibeli dalam transaksi, 0 jika tidak)
    const matrix = transactions.map((trxCode) => {
      const trxItems = calcs.filter((c) => c.transaction === trxCode);
      const boughtIds = trxItems.map((i) => i.productId);
      return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
    });

    // Fungsi transpose matrix untuk dapatkan vektor produk (kolom)
    const transpose = (matrix) =>
      matrix[0].map((_, i) => matrix.map((row) => row[i]));

    const productVectors = transpose(matrix); // Array vektor produk

    // Hitung matriks cosine similarity NxN antar semua produk
    const N = productVectors.length;
    const similarityMatrix = Array.from({ length: N }, () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
      for (let j = i; j < N; j++) {
        const sim = cosineSimilarity(productVectors[i], productVectors[j]);
        similarityMatrix[i][j] = sim;
        similarityMatrix[j][i] = sim; // simetris
      }
    }

    // Indeks produk terpilih di productIndexMap
    const selectedIndexes = productIds
      .map((id) => productIndexMap.indexOf(id))
      .filter((i) => i !== -1);

    // Hitung similarity rata-rata produk lain ke produk terpilih
    const similarityScores = similarityMatrix
      .map((row, idx) => {
        if (selectedIndexes.includes(idx)) return null;
        const avgSim =
          selectedIndexes.reduce((sum, selIdx) => sum + row[selIdx], 0) /
          selectedIndexes.length;
        return { index: idx, score: avgSim };
      })
      .filter(Boolean);

    // Cari produk terdekat berdasarkan similarity
    const topSimilar = similarityScores
      .map(({ index, score }) => {
        const prod = products.find((p) => p.id === productIndexMap[index]);
        return {
          productId: prod.id,
          name: prod.name,
          benefitId: prod.benefitId,
          price: prod.price,
          category: prod.Category.name,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    // Kelompokkan kandidat produk berdasarkan kategori wajib
    const candidatesByCategory = kategoriWajib.map((kategori) =>
      topSimilar.filter((item) => item.category === kategori)
    );

    // Generate kombinasi bundle sesuai budget
    const allBundles = generateBundles(candidatesByCategory, budget);

    if (allBundles.length === 0) {
      return NextResponse.json(
        { error: "No bundle fits the budget" },
        { status: 400 }
      );
    }

    // Urutkan bundle terbaik berdasarkan rata-rata score similarity
    const bestBundles = allBundles
      .map((b) => ({
        ...b,
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    // Fungsi generate signature untuk bundle (bisa disesuaikan)
    function generateSignature(bundle, budget) {
      const productIds = bundle.bundle
        .map((p) => p.productId)
        .sort()
        .join("-");
      return `b${budget}-${productIds}`;
    }

    // Simpan bundle terbaik ke database jika belum ada
    const savedBundles = await Promise.all(
      bestBundles.map(async (bundle) => {
        const signature = generateSignature(bundle, budget);
        const existing = await prisma.savedBundle.findFirst({
          where: { signature },
        });

        if (existing) return existing;

        const savedBundle = await prisma.savedBundle.create({
          data: {
            benefitId: parseInt(benefitDominantId),
            budget,
            totalScore: bundle.avgScore,
            signature,
            totalPrice: bundle.total,
            items: {
              create: bundle.bundle.map((item) => ({
                productId: item.productId,
                price: item.price,
                score: item.score,
              })),
            },
          },
        });

        return savedBundle;
      })
    );

    // Format response
    const response = bestBundles.map((bundle, idx) => ({
      bundleId: savedBundles[idx].id, // ID dari DB
      bundle: bundle.bundle.map((item) => ({
        id: item.productId,
        name: item.name,
        benefitId: item.benefitId,
        category: item.category,
        price: item.price,
        score: item.score,
      })),
      total: bundle.total,
      avgScore: bundle.avgScore,
    }));

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

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const productIds =
//       searchParams.get("productId")?.split(",").map(Number) || [];
//     const maxBudget = parseInt(searchParams.get("budget"));

//     if (productIds.length === 0) {
//       return NextResponse.json({ error: "Missing productId" }, { status: 400 });
//     }

//     // Ambil data produk yang dipilih
//     const selectedProducts = await prisma.product.findMany({
//       where: { id: { in: productIds } },
//       include: {
//         Category: { select: { name: true } },
//         Benefit: { select: { id: true, name: true } },
//       },
//     });

//     // Hitung benefit dominan
//     const benefitCount = {};
//     for (const p of selectedProducts) {
//       const benefitId = p.benefitId;
//       if (benefitId) {
//         benefitCount[benefitId] = (benefitCount[benefitId] || 0) + 1;
//       }
//     }

//     const benefitDominantId = Object.entries(benefitCount).sort(
//       (a, b) => b[1] - a[1]
//     )[0]?.[0];

//     if (!benefitDominantId) {
//       return NextResponse.json(
//         { error: "Benefit ID not found from selected products" },
//         { status: 400 }
//       );
//     }

//     const calcs = await prisma.calculationData.findMany({
//       select: {
//         transaction: true,
//         productId: true,
//       },
//     });

//     const products = await prisma.product.findMany({
//       include: {
//         Category: { select: { name: true } },
//       },
//     });

//     const bundleCategory = await prisma.bundleCategory.findFirst({
//       where: { benefitId: parseInt(benefitDominantId) },
//       include: {
//         categories: {
//           include: {
//             Category: { select: { name: true } },
//           },
//         },
//       },
//     });

//     const kategoriWajib = bundleCategory
//       ? bundleCategory.categories.map((pivot) => pivot.Category.name.trim())
//       : [];

//     const productIndexMap = products.map((p) => p.id);
//     const transactions = calcs.map((calc) => calc.transaction);
//     const trxCodes = [...new Set(transactions)];

//     const matrix = trxCodes.map((trxCode) => {
//       const trxItems = calcs.filter((c) => c.transaction === trxCode);
//       const boughtIds = trxItems.map((i) => i.productId);
//       return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
//     });
//     const transpose = (matrix) =>
//       matrix[0].map((_, i) => matrix.map((row) => row[i]));

//     const productVectors = transpose(matrix);

//     const selectedIndexes = productIds
//       .map((id) => productIndexMap.indexOf(id))
//       .filter((idx) => idx !== -1);

//     if (selectedIndexes.length === 0) {
//       return NextResponse.json(
//         { error: "Product ID(s) not found" },
//         { status: 404 }
//       );
//     }

//     const combinedSimilarities = [];

//     for (let i of selectedIndexes) {
//       for (let j = 0; j < productVectors.length; j++) {
//         const sim =
//           i === j ? 1 : cosineSimilarity(productVectors[i], productVectors[j]);
//         console.log(sim);

//         const prod = products[j];
//         combinedSimilarities.push({
//           id: prod.id,
//           name: prod.name,
//           category: prod.Category?.name || null,
//           price: prod.price || 0,
//           score: +sim.toFixed(3),
//         });
//       }
//     }

//     combinedSimilarities.sort((a, b) => b.score - a.score);

//     const scoreMap = {};

//     for (const item of combinedSimilarities) {
//       if (!scoreMap[item.id]) {
//         scoreMap[item.id] = {
//           totalScore: 0,
//           count: 0,
//           data: item,
//         };
//       }
//       scoreMap[item.id].totalScore += item.score;
//       scoreMap[item.id].count += 1;
//     }

//     const averagedSimilarities = Object.values(scoreMap)
//       .map(({ totalScore, count, data }) => ({
//         id: data.id,
//         name: data.name,
//         category: data.category,
//         price: data.price,
//         score: +(totalScore / count).toFixed(3),
//       }))
//       .filter((item) => item.score > 0);

//     averagedSimilarities.sort((a, b) => b.score - a.score);

//     console.log(averagedSimilarities);

//     const similarityRow = productVectors.map((vector, idx) => {
//       if (selectedIndexes.includes(idx)) return { index: idx, score: 0 };

//       const scores = selectedIndexes.map((selIdx) =>
//         cosineSimilarity(productVectors[selIdx], vector)
//       );

//       const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

//       return { index: idx, score: +avgScore.toFixed(3) };
//     });

//     const recommendedBundle = similarityRow
//       .filter(({ index }) => !selectedIndexes.includes(index))
//       .map(({ index, score }) => {
//         const prod = products.find((p) => p.id === productIndexMap[index]);
//         return {
//           id: prod?.id,
//           name: prod?.name,
//           category: prod?.Category?.name,
//           price: prod?.price,
//           score: +score.toFixed(3),
//         };
//       })
//       .filter((item) => item.score > 0)
//       .sort((a, b) => b.score - a.score);

//     return NextResponse.json({
//       selectedProductIds: productIds,
//       dominantBenefitId: benefitDominantId,
//       averagedSimilarities,
//       recommendedBundle,
//       maxBudget,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to fetch recommendations",
//         detail: error.message || error,
//       },
//       { status: 500 }
//     );
//   }
// }

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

    // Hitung benefit dominan
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

    // Buat matriks transaksi x produk
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

    // === BEGIN NEW SIMILARITY CODE ===
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
          totalScore: 0,
          count:0,
          data: item,
        };
      }
      scoreMap[item.id].totalScore += item.score;
    }

    const averagedSimilarities = Object.values(scoreMap)
      .map(({ totalScore, data }) => ({
        id: data.id,
        name: data.name,
        category: data.category,
        price: data.price,
        score: +(totalScore / selectedIndexes.length).toFixed(3),
      }))
      .filter(
        (item) =>
          !selectedIndexes.includes(
            products.findIndex((p) => p.id === item.id)
          ) && item.score > 0
      );

    averagedSimilarities.sort((a, b) => b.score - a.score);
    // === END NEW SIMILARITY CODE ===

    const candidatesByCategory = kategoriWajib.map((kategori) =>
      averagedSimilarities.filter((item) => item.category === kategori)
    );

    const allBundles = generateBundles(candidatesByCategory, maxBudget);

    const sortedBundles = allBundles
      .map((b) => ({
        ...b,
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    return NextResponse.json({
      selectedProductIds: productIds,
      dominantBenefitId: benefitDominantId,
      recommended: averagedSimilarities,
      maxBudget,
      bundles: sortedBundles.slice(0, 5),
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
