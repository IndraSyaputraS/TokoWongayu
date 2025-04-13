import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import { importExcel } from "@/libs/importExcel";

export async function GET() {
  const calcs = await prisma.calculationData.findMany({
    include:{
        Product: true
    }
  });
  return NextResponse.json(
    {
      success: true,
      message: "List Calculation Data",
      data: calcs,
    },
    {
      status: 200,
    }
  );
}
// export async function POST(request) {
//   const body = await request.json();
//   const { productId, transaction } = body;
//   const calcs = await prisma.calculationData.create({
//     data: {
//       transaction: transaction,
//       productId: productId,
//     },
//   });

//   return NextResponse.json(
//     {
//       success: true,
//       message: "Calculation Data Created Successfully!",
//       data: calcs,
//     },
//     {
//       status: 201,
//     }
//   );
// }
export async function POST(req) {
  const contentType = req.headers.get("content-type");

  // ========== UNTUK POST JSON MANUAL ==========
  if (contentType.includes("application/json")) {
    const body = await req.json();
    const {
      transaction,
      productId
    } = body;

    const calcs = await prisma.calculationData.create({
      data: {
        transaction,
        productId: parseInt(productId),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Calculation Data created successfully!",
        data: calcs,
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
      const transaction = row["Transaksi"];
      const namaItem = row["Nama Item"];

      const products = await prisma.product.findFirst({
        where: { name: namaItem },
      });
  
      if (products) {
        insertedData.push({
          transaction: transaction,
          productId: products?.id
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
      const result = await prisma.calculationData.createMany({
        data: insertedData,
        skipDuplicates: true,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Calculation Data imported successfully.",
          inserted: result.count,
        },
        { status: 200 }
      );
    } catch (err) {
      console.error("Import failed:", err);
      return NextResponse.json(
        { success: false, message: "Failed to import Calculation Data" },
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