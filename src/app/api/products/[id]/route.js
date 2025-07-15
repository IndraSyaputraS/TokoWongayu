import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import cloudinary from "@/libs/cloudinary";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  try {
    const products = await prisma.product.findUnique({
      where: { id: IntId },
      include: {
        Brand: true,
        Category: true,
        Benefit: true,
      },
    });

    if (!products) {
      return NextResponse.json(
        {
          success: false,
          message: "Detail Product Not Found!",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Detail Data Product",
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch product details.",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const IntId = parseInt(id);
    const body = await request.json();
    const {
      name,
      brandId,
      itemCode,
      price,
      categoryId,
      benefitId,
      imageUrl,
      imageId,
      description,
    } = body;
    const products = await prisma.product.update({
      where: { id: IntId },
      data: {
        name,
        brandId: parseInt(brandId),
        itemCode,
        categoryId: parseInt(categoryId),
        benefitId: parseInt(benefitId),
        price: parseFloat(price) || 0,
        imageUrl,
        imageId: imageId ? parseInt(imageId) : null,
        description,
      },
      include: {
        Brand: true,
        Category: true,
        Benefit: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Data Product Updated!",
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update product.",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id, 10);

  try {
    const product = await prisma.product.findUnique({
      where: { id: IntId },
    });

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product Not Found!",
          data: null,
        },
        { status: 404 }
      );
    }

    if (product.imageId) {
      const existingImage = await prisma.image.findUnique({
        where: { id: product.imageId },
      });

      if (existingImage) {
        // Hapus dari Cloudinary (public_id disimpan di kolom `image`)
        await cloudinary.uploader.destroy(existingImage.image);

        // Hapus dari database
        await prisma.image.delete({
          where: { id: product.imageId },
        });
      }
    }

    // Hapus produk
    await prisma.product.delete({
      where: { id: IntId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product and associated image deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete product.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
