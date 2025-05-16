import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  try {
    const bundleCategories = await prisma.bundleCategory.findMany({
      include: {
        Benefit: true,
        categories: {
          include: {
            Category: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "List Data Bundle Categories",
        data: bundleCategories,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bundle categories",
        error: err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { benefitId, categoryIds } = body;

    const bunCat = await prisma.bundleCategory.create({
      data: {
        benefitId: parseInt(benefitId),
      },
    });

    const pivotData = categoryIds.map((catId) => ({
      bundleCategoryId: bunCat.id,
      categoryId: parseInt(catId),
    }));

    await prisma.pivotBunCat.createMany({
      data: pivotData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Bundle Created Successfully!",
        data: bunCat,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create bundle.",
        error: err,
      },
      { status: 500 }
    );
  }
}
