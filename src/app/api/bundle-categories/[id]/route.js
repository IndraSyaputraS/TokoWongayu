import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  try {
    const bundleCategories = await prisma.bundleCategory.findUnique({
      include: {
        Benefit: true,
        categories: {
          include: {
            Category: true,
          },
        },
      },
      where: {
        id: IntId,
      },
    });

    if (!bundleCategories) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Bundle Category Not Found!",
          data: null,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Bundle Category",
        data: brands,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json({
      sucess: false,
      message: "Failed to fetch",
      error: err,
    });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const body = await request.json();
  const { benefitId, categoryIds } = body;

  try {
    const existingBundle = await prisma.bundleCategory.findUnique({
      where: { id: IntId },
    });

    if (!existingBundle) {
      return NextResponse.json(
        {
          success: false,
          message: `Bundle with ID ${IntId} not found.`,
        },
        { status: 404 }
      );
    }
    const updatedBundle = await prisma.bundleCategory.update({
      where: { id: IntId },
      data: {
        benefitId: parseInt(benefitId),
      },
    });

    await prisma.pivotBunCat.deleteMany({
      where: { bundleCategoryId: IntId },
    });

    const pivotData = categoryIds
      .map((catId) => ({
        bundleCategoryId: IntId,
        categoryId: parseInt(catId),
      }))
      .filter((item) => !isNaN(item.categoryId));

    await prisma.pivotBunCat.createMany({
      data: pivotData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Bundle updated successfully.",
        data: updatedBundle,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update bundle.",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);

  try {
    const existingBundle = await prisma.bundleCategory.findUnique({
      where: { id: IntId },
    });

    if (!existingBundle) {
      return NextResponse.json(
        {
          success: false,
          message: `Bundle with ID ${IntId} not found.`,
        },
        { status: 404 }
      );
    }

    await prisma.pivotBunCat.deleteMany({
      where: { bundleCategoryId: IntId },
    });

    await prisma.bundleCategory.delete({
      where: { id: IntId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Bundle deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete bundle.",
        error: error,
      },
      { status: 500 }
    );
  }
}
