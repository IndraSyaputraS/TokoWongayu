import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const bundleId = parseInt(id);
  try {
    if (isNaN(bundleId)) {
      return NextResponse.json(
        { success: false, message: "Invalid bundle ID" },
        { status: 400 }
      );
    }

    const savedBundle = await prisma.savedBundle.findUnique({
      where: { id: bundleId },
      include: {
        items: {
          include: {
            product: {
              include: {
                Category: true,
                Benefit: true,
              },
            },
          },
        },
      },
    });

    if (!savedBundle) {
      return NextResponse.json(
        { success: false, message: "Bundle not found" },
        { status: 404 }
      );
    }

    const formatted = {
      id: savedBundle.id,
      benefitId: savedBundle.benefitId,
      name: savedBundle.name,
      budget: savedBundle.budget,
      totalPrice: savedBundle.totalPrice,
      totalScore: savedBundle.totalScore,
      signature: savedBundle.signature,
      items: savedBundle.items.map((item) => ({
        productId: item.productId,
        price: item.price,
        score: item.score,
        name: item.product.name,
        imageUrl: item.product.imageUrl,
        category: item.product.Category?.name,
        benefit: item.product.Benefit?.name,
      })),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Bundle fetched successfully",
        data: formatted,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bundle",
        error: error,
      },
      { status: 500 }
    );
  }
}
