// import { NextResponse } from "next/server";
// import prisma from "@libs/prismaClient";

// export async function POST(request) {
//   const body = await request.json();
//   const {
//     name,
//     brandId,
//     itemCode,
//     price,
//     stock,
//     categoryId,
//     benefitId,
//     imageUrl,
//     imageId,
//   } = body;
//   const products = await prisma.product.create({
//     data: {
//       name: name,
//       brandId: parseInt(brandId),
//       itemCode: itemCode,
//       categoryId: parseInt(categoryId),
//       benefitId: parseInt(benefitId),
//       price: parseFloat(price),
//       stock: parseInt(stock),
//       imageUrl: imageUrl,
//       imageId: parseInt(imageId),
//     },
//   });

//   return NextResponse.json(
//     {
//       success: true,
//       message: "Product Created Successfully!",
//       data: products,
//     },
//     { status: 201 }
//   );
// }
import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import { importExcel } from "@/libs/importExcel";

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      Brand: true,
      Category: true,
      Benefit: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Product",
      data: products,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req) {
  const contentType = req.headers.get("content-type");

  // ========== UNTUK POST JSON MANUAL ==========
  if (contentType.includes("application/json")) {
    const body = await req.json();
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

    const product = await prisma.product.create({
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

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully!",
        data: product,
      },
      { status: 201 }
    );
  }

  // ========== UNTUK IMPORT DARI FILE EXCEL ==========
  else if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const rows = await importExcel(file);

    const insertedData = [];

    for (const row of rows) {
      const namaItem = row["Nama Item"];
      const itemCode = row["Item Code"];
      const namaBrand = row["Brand"];
      const namaCategory = row["Category"];
      const namaBenefit = row["Benefit"];
      const price = row["Price"];

      const brand = await prisma.brand.findFirst({
        where: { name: namaBrand },
      });
    
      // Cari ID category berdasarkan nama
      const category = await prisma.category.findFirst({
        where: { name: namaCategory },
      });
    
      // Cari ID benefit berdasarkan nama
      const benefit = await prisma.benefit.findFirst({
        where: { name: namaBenefit },
      });
  
      if (namaItem) {
        insertedData.push({
          name: namaItem,
          brandId: brand?.id || null,
          itemCode: itemCode,
          price: parseFloat(price) || null,
          stock: 0,
          categoryId: category?.id || null,
          benefitId: benefit?.id || null,
          imageUrl: "/images/noimage.png",
          imageId: null,
        });
      }
    }

    if (insertedData.length === 0) {
      return NextResponse.json(
        { success: false, message: "No valid product found in the file." },
        { status: 400 }
      );
    }

    try {
      const result = await prisma.product.createMany({
        data: insertedData,
        skipDuplicates: true,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Product imported successfully.",
          inserted: result.count,
        },
        { status: 200 }
      );
    } catch (err) {
      console.error("Import failed:", err);
      return NextResponse.json(
        { success: false, message: "Failed to import product" },
        { status: 500 }
      );
    }
  }

  // ========== FORMAT TIDAK DIDUKUNG ==========
  return NextResponse.json(
    { success: false, message: "Unsupported content type." },
    { status: 415 }
  );
}
