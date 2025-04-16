import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const bundleCategories = await prisma.bundleCategory.findUnique({
    include: {
      Benefit: true, // Mendapatkan Benefit terkait
      categories: {
        // Mendapatkan kategori-kategori yang terkait via PivotBunCat
        include: {
          Category: true, // Mendapatkan data Category untuk setiap pivot
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
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const body = await request.json();
  const { benefitId, categoryIds } = body;

  try {
    // 1. Cek apakah bundleCategory dengan ID tersebut ada
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

    // 2. Update data bundleCategory
    const updatedBundle = await prisma.bundleCategory.update({
      where: { id: IntId },
      data: {
        benefitId: parseInt(benefitId),
      },
    });

    // 3. Hapus data pivot lama
    await prisma.pivotBunCat.deleteMany({
      where: { bundleCategoryId: IntId },
    });

    // 4. Tambahkan data pivot baru
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
    console.error("Error updating bundle:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update bundle.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);

  try {
    // Cek apakah bundleCategory ada
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

    // Hapus relasi dari tabel pivot terlebih dahulu
    await prisma.pivotBunCat.deleteMany({
      where: { bundleCategoryId: IntId },
    });

    // Hapus bundleCategory-nya
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
    console.error("Error deleting bundle:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete bundle.",
      },
      { status: 500 }
    );
  }
}
