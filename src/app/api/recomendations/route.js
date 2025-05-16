import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  try {
    const savedBundles = await prisma.savedBundle.findMany({
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
        benefit: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    const formattedBundles = savedBundles.map((bundle) => ({
      id: bundle.id,
      benefitId: bundle.benefitId,
      benefitName: bundle.benefit?.name,
      budget: bundle.budget,
      totalPrice: bundle.totalPrice,
      totalScore: bundle.totalScore.toFixed(3),
      signature: bundle.signature,
      items: bundle.items.map((item) => ({
        productId: item.productId,
        price: item.price,
        score: item.score,
        name: item.product.name,
        category: item.product.Category?.name,
        benefit: item.product.Benefit?.name,
      })),
    }));

    return NextResponse.json(
      {
        success: true,
        message: "List of saved bundles",
        data: formattedBundles,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch saved bundles",
        error: error,
      },
      { status: 500 }
    );
  }
}
