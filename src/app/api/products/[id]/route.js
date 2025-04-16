import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const products = await prisma.product.findUnique({
    where: {
      id: IntId,
    },
  });

  if (!products) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Product Not Found!",
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
      message: "Detail Data Product",
      data: products,
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
  const products = await prisma.product.update({
    include: {
      Brand: true,
      Category: true,
      Benefit: true,
    },
    where: {
      id: IntId,
    },
    data: {
      name,
      brandId: parseInt(brandId),
      itemCode,
      categoryId: parseInt(categoryId),
      benefitId: parseInt(benefitId),
      price: parseFloat(price),
      stock: parseInt(stock),
      imageUrl,
      imageId: parseInt(imageId),
    },
  });
  if (!products) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Product Not Found!",
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
      message: "Data Product Updated!",
      data: products,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const IntId = parseInt(id);

  // Ambil data produk terlebih dahulu
  const product = await prisma.product.findUnique({
    where: {
      id: IntId,
    },
  });

  // Kalau produk tidak ditemukan
  if (!product) {
    return NextResponse.json(
      {
        success: false,
        message: "Product Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  // Hapus gambar jika ada imageId
  if (product.imageId) {
    await prisma.image.delete({
      where: {
        id: product.imageId,
      },
    });
  }

  // Hapus produk
  await prisma.product.delete({
    where: {
      id: IntId,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Product and Image Deleted!",
    },
    {
      status: 200,
    }
  );
}
