import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";

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
  const { id } = await params;
  const IntId = parseInt(id);
  const body = await request.json();
  const {
    name,
    brandId,
    itemCode,
    price,
    stock,
    categoryId,
    benefitId,
    imageUrl,
    imageId,
  } = body;
  try {
    const products = await prisma.product.update({
      where: { id: IntId },
      data: {
        name,
        brandId: parseInt(brandId),
        itemCode,
        categoryId: parseInt(categoryId),
        benefitId: parseInt(benefitId),
        price: parseFloat(price) || 0,
        stock: parseInt(stock) || 0,
        imageUrl,
        imageId: imageId ? parseInt(imageId) : null,
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
  const IntId = parseInt(id);
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

    // Hapus gambar jika ada
    if (product.imageId) {
      await prisma.image.delete({
        where: { id: product.imageId },
      });
    }

    // Hapus produk
    await prisma.product.delete({
      where: { id: IntId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product and Image Deleted!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete product.",
        error: error,
      },
      { status: 500 }
    );
  }
}
