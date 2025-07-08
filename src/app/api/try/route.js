import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return magnitudeA && magnitudeB
    ? +(dotProduct / (magnitudeA * magnitudeB)).toFixed(3)
    : 0;
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productIds = searchParams.get("productId")?.split(",").map(Number) || [];

    if (productIds.length === 0) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }

    // Cek apakah semua productIds ada di database
    const validProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true },
    });

    if (validProducts.length === 0) {
      return NextResponse.json(
        { error: "No matching products found for productId param" },
        { status: 404 }
      );
    }

    // Ambil semua produk lengkap (170 produk)
    const products = await prisma.product.findMany({
      select: { id: true, name: true },
      orderBy: { id: "asc" },
    });

    const allProductIds = products.map((p) => p.id);

    // Ambil semua transaksi untuk semua produk
    const calcs = await prisma.calculationData.findMany({
      where: {
        productId: { in: allProductIds },
      },
      select: {
        transaction: true,
        productId: true,
      },
    });

    const transactions = [...new Set(calcs.map((c) => c.transaction))];

    // Buat matriks transaksi x produk (1 jika produk dibeli pada transaksi, 0 jika tidak)
    const matrix = transactions.map((trx) => {
      const trxItems = calcs.filter((c) => c.transaction === trx);
      const trxProductIds = trxItems.map((item) => item.productId);
      return allProductIds.map((pid) => (trxProductIds.includes(pid) ? 1 : 0));
    });

    // Transpose matriks agar tiap vektor representasi produk
    const transpose = (m) => m[0].map((_, i) => m.map((row) => row[i]));
    const productVectors = transpose(matrix);

    // Hitung similarity matrix NxN untuk semua produk
    const similarityMatrix = [];

    for (let i = 0; i < productVectors.length; i++) {
      const row = [];
      for (let j = 0; j < productVectors.length; j++) {
        const sim = i === j ? 1 : cosineSimilarity(productVectors[i], productVectors[j]);
        row.push(sim);
      }
      similarityMatrix.push(row);
    }

    // Buat label produk, bisa P1, P2,... atau langsung nama produk
    const labels = products.map((_, idx) => `P${idx + 1}`);

    return NextResponse.json({
      matrix: similarityMatrix,
      labels,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to calculate similarity",
        detail: error.message || error,
      },
      { status: 500 }
    );
  }
}

// const cosineSimilarity = (vecA, vecB) => {
//   const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
//   const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
//   const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
//   return magnitudeA && magnitudeB
//     ? +(dotProduct / (magnitudeA * magnitudeB)).toFixed(3)
//     : 0;
// };


// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const productIds =
//       searchParams.get("productId")?.split(",").map(Number) || [];

//     if (productIds.length === 0) {
//       return NextResponse.json({ error: "Missing productId" }, { status: 400 });
//     }

//     const selectedProducts = await prisma.product.findMany({
//       where: { id: { in: productIds } },
//     });

//     if (selectedProducts.length === 0) {
//       return NextResponse.json(
//         { error: "No matching products found" },
//         { status: 404 }
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
//         Benefit: { select: { name: true } },
//       },
//       orderBy: { id: "asc" },
//     });

//     const productIndexMap = products.map((p) => p.id);
//     const transactions = calcs.map((c) => c.transaction);
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
//         { error: "Product ID(s) not found in dataset" },
//         { status: 404 }
//       );
//     }

//     // Hitung similarity untuk tiap produk terpilih ke semua produk
//     // Struktur: similarityPerSelectedProduct[produkTerpilihIndex][produkTargetIndex] = similarity score
//     const similarityPerSelectedProduct = selectedIndexes.map((i) => {
//       return productVectors.map((_, j) => {
//         if (i === j) return 1;
//         return cosineSimilarity(productVectors[i], productVectors[j]);
//       });
//     });

//     // Sekarang ambil max similarity dari produk yang dipilih untuk tiap produk target
//     const maxSimilarityPerProduct = [];

//     for (let j = 0; j < products.length; j++) {
//       let maxSim = 0;
//       for (let i = 0; i < similarityPerSelectedProduct.length; i++) {
//         if (similarityPerSelectedProduct[i][j] > maxSim) {
//           maxSim = similarityPerSelectedProduct[i][j];
//         }
//       }
//       maxSimilarityPerProduct.push(maxSim);
//     }

//     // Buat hasil array object produk target + similarity tertinggi
//     const similarityResults = products.map((prod, idx) => ({
//       toProductId: prod.id,
//       toProductName: prod.name,
//       category: prod.Category?.name || null,
//       benefit: prod.Benefit?.name || null,
//       price: prod.price,
//       similarityScore: +maxSimilarityPerProduct[idx].toFixed(3),
//     }));

//     // Urutkan descending berdasarkan similarity tertinggi
//     similarityResults.sort((a, b) => b.similarityScore - a.similarityScore);

//     return NextResponse.json({
//       totalComparisons: similarityResults.length,
//       results: similarityResults,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to calculate similarity",
//         detail: error.message || error,
//       },
//       { status: 500 }
//     );
//   }
// }
