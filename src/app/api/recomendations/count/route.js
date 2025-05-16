import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import crypto from "crypto";
// Fungsi untuk menghitung Cosine Similarity
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
    // Stop if the budget exceeds the maximum
    if (total > maxBudget) return;

    // If all categories have been processed, add the bundle to results
    if (index === candidatesByCategory.length) {
      if (total <= maxBudget) {
        results.push({ bundle, total });
      }
      return;
    }

    // Loop through products in the current category
    for (const product of candidatesByCategory[index]) {
      if (product.price && total + product.price <= maxBudget) {
        // Add product and continue backtracking to the next category
        backtrack([...bundle, product], index + 1, total + product.price);
      }
    }
  }

  // Start the backtracking process
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

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productIds =
      searchParams.get("productId")?.split(",").map(Number) || [];
    const maxBudget = parseInt(searchParams.get("budget"));
    const role = searchParams.get("role");

    if (productIds.length === 0) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }

    // Ambil data produk yang dipilih
    const selectedProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      include: {
        Category: { select: { name: true } },
        Benefit: { select: { id: true, name: true } },
      },
    });

    // Validasi dan hitung benefit dominan
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

    const productIndexMap = products.map((p) => p.id);
    const transactions = calcs.map((calc) => calc.transaction);
    const trxCodes = [...new Set(transactions)];

    const matrix = trxCodes.map((trxCode) => {
      const trxItems = calcs.filter((c) => c.transaction === trxCode);
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

    const combinedVector = productVectors[0].map((_, i) =>
      selectedIndexes.reduce((sum, idx) => sum + productVectors[idx][i], 0)
    );

    const similarityRow = productVectors.map((vector, idx) => {
      const score = cosineSimilarity(combinedVector, vector);
      return { index: idx, score };
    });

    const topSimilar = similarityRow
      .filter(({ index }) => !selectedIndexes.includes(index))
      .map(({ index, score }) => {
        const prod = products.find((p) => p.id === productIndexMap[index]);
        return {
          id: prod?.id,
          name: prod?.name,
          category: prod?.Category?.name,
          price: prod?.price,
          score: +score.toFixed(3),
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const candidatesByCategory = kategoriWajib.map((kategori) =>
      topSimilar.filter((item) => item.category === kategori)
    );

    const allBundles = generateBundles(candidatesByCategory, maxBudget);

    const sortedBundles = allBundles
      .map((b) => ({
        ...b,
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    const totalScore = topSimilar.reduce((sum, item) => sum + item.score, 0);
    const rataScore =
      topSimilar.length > 0 ? (totalScore / topSimilar.length).toFixed(3) : 0;

    if (role == 1) {
      return NextResponse.json({
        selectedProductIds: productIds,
        dominantBenefitId: benefitDominantId,
        recommendedBundle: topSimilar,
        maxBudget,
        totalScore: totalScore.toFixed(3),
        rataScore,
        bundles: sortedBundles,
      });
    } else {
      return NextResponse.json({
        selectedProductIds: productIds,
        dominantBenefitId: benefitDominantId,
        maxBudget,
        totalScore: totalScore.toFixed(3),
        rataScore,
        bundles: sortedBundles,
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch recommendations",
        detail: error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const body = await req.json();
  const { productIds, budget } = body;
  try {
    if (!Array.isArray(productIds) || productIds.length === 0 || !budget) {
      return NextResponse.json(
        { error: "Missing productIds or budget" },
        { status: 400 }
      );
    }

    const selectedProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      include: { Benefit: true },
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
        { error: "Benefit ID not found" },
        { status: 400 }
      );
    }

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

    const productIndexMap = products.map((p) => p.id);

    const transactions = [...new Set(calcs.map((c) => c.transaction))];

    const matrix = transactions.map((trxCode) => {
      const trxItems = calcs.filter((c) => c.transaction === trxCode);
      const boughtIds = trxItems.map((i) => i.productId);
      return productIndexMap.map((id) => (boughtIds.includes(id) ? 1 : 0));
    });

    const transpose = (matrix) =>
      matrix[0].map((_, i) => matrix.map((row) => row[i]));

    const productVectors = transpose(matrix);

    const selectedIndexes = productIds
      .map((id) => productIndexMap.indexOf(id))
      .filter((i) => i !== -1);

    const combinedVector = productVectors[0].map((_, i) =>
      selectedIndexes.reduce((sum, idx) => sum + productVectors[idx][i], 0)
    );

    const similarityRow = productVectors.map((vector, idx) => {
      const score = cosineSimilarity(combinedVector, vector);
      return { index: idx, score };
    });

    const topSimilar = similarityRow
      .filter(({ index }) => !selectedIndexes.includes(index))
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

    const candidatesByCategory = kategoriWajib.map((kategori) =>
      topSimilar.filter((item) => item.category === kategori)
    );

    const allBundles = generateBundles(candidatesByCategory, budget);

    if (allBundles.length === 0) {
      return NextResponse.json(
        { error: "No bundle fits the budget" },
        { status: 400 }
      );
    }

    const bestBundles = allBundles
      .map((b) => ({
        ...b,
        avgScore:
          b.bundle.reduce((sum, p) => sum + p.score, 0) / b.bundle.length,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);

    // Save the best bundle into the database
    const savedBundles = await Promise.all(
      bestBundles.map(async (bundle) => {
        const signature = generateSignature(bundle, budget);
        // Cek apakah sudah ada bundle dengan signature ini
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

    const response = bestBundles.map((bundle, idx) => ({
      bundleId: savedBundles[idx], // pastikan ini ID yang baru disimpan dari DB
      bundle: bundle.bundle.map((item) => ({
        id: item.productId,
        name: item.name,
        benefitId: item.benefitId, // pastikan item punya benefitId
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
        detail: error,
      },
      { status: 500 }
    );
  }
}
