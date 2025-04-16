import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  const bundleCategories = await prisma.bundleCategory.findMany({
    include: {
      Benefit: true, // Mendapatkan Benefit terkait
      categories: {
        // Mendapatkan kategori-kategori yang terkait via PivotBunCat
        include: {
          Category: true, // Mendapatkan data Category untuk setiap pivot
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
}

export async function POST(request) {
  const body = await request.json();
  const { benefitId, categoryIds } = body;

  try {
    const bunCat = await prisma.bundleCategory.create({
      data: {
        benefitId: parseInt(benefitId),
      },
    });

    // 2. Tambahkan kategori ke pivot
    const pivotData = categoryIds.map((catId) => ({
      bundleCategoryId: bunCat.id, // ← ganti dari bundleCategiryId
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
  } catch (error) {
    console.error("Error creating bundle:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create bundle.",
      },
      { status: 500 }
    );
  }
}
