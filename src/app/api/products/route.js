import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import { importExcel } from "@/libs/importExcel";
import Joi from "joi";

export async function GET() {
  try {
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
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
        error: err,
      },
      { status: 500 }
    );
  }
}

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Product name must be filled",
    "any.required": "Product name must be filled",
  }),
  brandId: Joi.number().required().messages({
    "number.base": "Brand must be a number",
    "any.required": "Brand must be selected",
    "any.invalid": "Brand must be selected",
  }),
  itemCode: Joi.string().required().messages({
    "string.empty": "Item code must be filled",
    "any.required": "Item code must be filled",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price must be filled",
  }),
  stock: Joi.number().allow("", null),
  categoryId: Joi.number().required().messages({
    "number.base": "Category must be a number",
    "any.required": "Category must be selected",
    "any.invalid": "Category must be selected",
  }),
  benefitId: Joi.number().required().messages({
    "number.base": "Benefit must be a number",
    "any.required": "Benefit must be selected",
    "any.invalid": "Benefit must be selected",
  }),
  imageUrl: Joi.string().allow("", null),
  imageId: Joi.number().allow("", null).messages({
    "number.base": "Image ID must be a number",
  }),
});

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type");

    // ========== UNTUK POST JSON MANUAL ==========
    if (contentType.includes("application/json")) {
      // 2. Ambil body request
      const body = await req.json();
      const cleanBody = {
        ...body,
        brandId: body.brandId === "" ? undefined : body.brandId,
        categoryId: body.categoryId === "" ? undefined : body.categoryId,
        benefitId: body.benefitId === "" ? undefined : body.benefitId,
      };

      const { error, value } = schema.validate(cleanBody, {
        abortEarly: false,
      });

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
            errors: errors,
          },
          { status: 400 }
        );
      }
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
      } = value;

      const product = await prisma.product.create({
        data: {
          name,
          brandId,
          itemCode,
          categoryId,
          benefitId,
          price,
          stock,
          imageUrl: imageUrl || "/assets/noImage.png",
          imageId,
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
        return NextResponse.json(
          { error: "No file uploaded." },
          { status: 400 }
        );
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
            imageUrl: "/assets/noImage.png",
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
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
        error: err,
      },
      { status: 500 }
    );
  }
}
