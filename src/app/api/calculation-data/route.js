import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import { importExcel } from "@/libs/importExcel";
import Joi from "joi";

export async function GET() {
  try {
    const calcs = await prisma.calculationData.findMany({
      include: {
        Product: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "List Calculation Data",
        data: calcs,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch",
      error: err,
    });
  }
}

// Skema validasi Joi
const schema = Joi.object({
  transaction: Joi.string().min(2).required().messages({
    "any.required": "Transaction must be filled",
    "string.empty": "Transaction must be filled",
    "string.min": "Transaction must be at least 2 characters",
  }),
  productId: Joi.number().required().messages({
    "any.required": "Product must be selected",
    "number.base": "Product must be selected",
  }),
});

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type");

    // ========== UNTUK POST JSON MANUAL ==========
    if (contentType.includes("application/json")) {
      const body = await req.json();

      // Validasi dengan Joi
      const { error, value } = schema.validate(body, { abortEarly: false });

      if (error) {
        const errors = {};
        error.details.forEach((detail) => {
          const field = detail.path[0];
          errors[field] = detail.message;
        });

        return NextResponse.json(
          {
            success: false,
            message: "Validation failed",
            errors,
          },
          { status: 400 }
        );
      }

      const { transaction, productId } = value;

      const calcs = await prisma.calculationData.create({
        data: {
          transaction,
          productId,
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
        return NextResponse.json(
          { success: false, message: "No file uploaded." },
          { status: 400 }
        );
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
            transaction,
            productId: products.id,
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
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Failed to process request.",
      error: err,
    });
  }
}
