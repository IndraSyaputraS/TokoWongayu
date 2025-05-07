import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return magnitudeA && magnitudeB
    ? +(dotProduct / (magnitudeA * magnitudeB)).toFixed(2)
    : 0;
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }

    const calcs = await prisma.calculationData.findMany({
      select: {
        transaction: true,
        productId: true,
      },
    });

    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
      },
    });

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

    const size = productVectors.length;
    const similarityMatrix = Array.from({ length: size }, (_, i) =>
      Array.from({ length: size }, (_, j) => {
        if (i === j) return 1.0;
        return cosineSimilarity(productVectors[i], productVectors[j]);
      })
    );

    const selectedIndex = productIndexMap.indexOf(parseInt(productId));
    if (selectedIndex === -1) {
      return NextResponse.json(
        { error: "Product ID not found" },
        { status: 404 }
      );
    }

    const similarityRow = similarityMatrix[selectedIndex];
    const topSimilar = similarityRow
      .map((score, idx) => ({
        id: productIndexMap[idx],
        name: products.find((p) => p.id === productIndexMap[idx])?.name,
        score,
      }))
      .filter((item, idx) => idx !== selectedIndex && item.score > 0)
      .sort((a, b) => b.score - a.score);

    return NextResponse.json({
      selectedProductId: productId,
      recommendedBundle: topSimilar,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recommendations" },
      { status: 500 }
    );
  }
}
