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
        name: "asc",
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
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Product name must be filled",
    "string.min": "Product name must be at least 3 characters",
    "string.max": "Product name must be less than or equal to 50 characters",
    "any.required": "Product name must be filled",
  }),
  brandId: Joi.number().required().messages({
    "number.base": "Brand must be a number",
    "any.required": "Brand must be selected",
    "any.invalid": "Brand must be selected",
  }),
  itemCode: Joi.string().min(3).max(10).required().messages({
    "string.empty": "Item code must be filled",
    "string.min": "Item Code must be at least 3 characters",
    "string.max": "Item Code must be less than or equal to 10 characters",
    "any.required": "Item code must be filled",
  }),
  price: Joi.number().min(1000).max(1000000).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price must be at least 1000",
    "number.max": "Price must be less than or equal to 1000000",
    "any.required": "Price must be filled",
  }),
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
  description: Joi.string().allow("", null),
});

// export async function POST(req) {
//   try {
//     const contentType = req.headers.get("content-type");

//     // ========== UNTUK POST JSON MANUAL ==========
//     if (contentType.includes("application/json")) {
//       const body = await req.json();
//       const cleanBody = {
//         ...body,
//         brandId: body.brandId === "" ? undefined : body.brandId,
//         categoryId: body.categoryId === "" ? undefined : body.categoryId,
//         benefitId: body.benefitId === "" ? undefined : body.benefitId,
//       };

//       const { error, value } = schema.validate(cleanBody, {
//         abortEarly: false,
//       });

//       if (error) {
//         const errors = {};
//         error.details.forEach((detail) => {
//           const field = detail.path[0];
//           errors[field] = detail.message;
//         });

//         return NextResponse.json(
//           {
//             success: false,
//             message: "Validation failed",
//             errors: errors,
//           },
//           { status: 400 }
//         );
//       }
//       const {
//         name,
//         brandId,
//         itemCode,
//         price,
//         categoryId,
//         benefitId,
//         imageUrl,
//         imageId,
//         description,
//       } = value;

//       const product = await prisma.product.create({
//         data: {
//           name,
//           brandId,
//           itemCode,
//           categoryId,
//           benefitId,
//           price,
//           imageUrl: imageUrl || "/assets/noImage.png",
//           imageId,
//           description,
//         },
//       });

//       return NextResponse.json(
//         {
//           success: true,
//           message: "Product created successfully!",
//           data: product,
//         },
//         { status: 201 }
//       );
//     }

//     // ========== UNTUK IMPORT DARI FILE EXCEL ==========
//     else if (contentType.includes("multipart/form-data")) {
//       const formData = await req.formData();
//       const file = formData.get("file");

//       if (!file) {
//         return NextResponse.json(
//           { error: "No file uploaded." },
//           { status: 400 }
//         );
//       }

//       const rows = await importExcel(file);

//       const insertedData = [];

//       for (const row of rows) {
//         const namaItem = row["Nama Item"];
//         const itemCode = row["Item Code"];
//         const namaBrand = row["Brand"];
//         const namaCategory = row["Category"];
//         const namaBenefit = row["Benefit"];
//         const price = row["Price"];
//         const description = row["Description"];

//         const brand = await prisma.brand.findFirst({
//           where: { name: namaBrand },
//         });

//         const category = await prisma.category.findFirst({
//           where: { name: namaCategory },
//         });

//         const benefit = await prisma.benefit.findFirst({
//           where: { name: namaBenefit },
//         });

//         if (namaItem) {
//           insertedData.push({
//             name: namaItem,
//             brandId: brand?.id || null,
//             itemCode: itemCode,
//             price: parseFloat(price) || null,
//             categoryId: category?.id || null,
//             benefitId: benefit?.id || null,
//             imageUrl: "/assets/noImage.png",
//             imageId: null,
//             description: description,
//           });
//         }
//       }

//       if (insertedData.length === 0) {
//         return NextResponse.json(
//           { success: false, message: "No valid product found in the file." },
//           { status: 400 }
//         );
//       }

//       try {
//         const result = await prisma.product.createMany({
//           data: insertedData,
//           skipDuplicates: true,
//         });

//         return NextResponse.json(
//           {
//             success: true,
//             message: "Product imported successfully.",
//             inserted: result.count,
//           },
//           { status: 200 }
//         );
//       } catch (err) {
//         console.error("Import failed:", err);
//         return NextResponse.json(
//           { success: false, message: "Failed to import product" },
//           { status: 500 }
//         );
//       }
//     }

//     // ========== FORMAT TIDAK DIDUKUNG ==========
//     return NextResponse.json(
//       { success: false, message: "Unsupported content type." },
//       { status: 415 }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch products",
//         error: err,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type");

    // ========== UNTUK POST JSON MANUAL ==========
    if (contentType.includes("application/json")) {
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
        categoryId,
        benefitId,
        imageUrl,
        imageId,
        description,
      } = value;

      // 🔒 Cek apakah itemCode sudah ada
      const existing = await prisma.product.findUnique({
        where: { itemCode },
      });

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            message: `Item code '${itemCode}' already exists.`,
          },
          { status: 400 }
        );
      }

      try {
        const product = await prisma.product.create({
          data: {
            name,
            brandId,
            itemCode,
            categoryId,
            benefitId,
            price,
            imageUrl: imageUrl || "/assets/noImage.png",
            imageId,
            description,
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
      } catch (err) {
        if (err.code === "P2002" && err.meta?.target?.includes("itemCode")) {
          return NextResponse.json(
            {
              success: false,
              message: "Item code must be unique. This item code already exists.",
            },
            { status: 400 }
          );
        }

        return NextResponse.json(
          {
            success: false,
            message: "Failed to create product.",
            error: err,
          },
          { status: 500 }
        );
      }
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
        const description = row["Description"];

        const brand = await prisma.brand.findFirst({
          where: { name: namaBrand },
        });

        const category = await prisma.category.findFirst({
          where: { name: namaCategory },
        });

        const benefit = await prisma.benefit.findFirst({
          where: { name: namaBenefit },
        });

        // 🔒 Cek apakah itemCode sudah pernah dipakai
        const isItemCodeExist = await prisma.product.findUnique({
          where: { itemCode },
        });

        if (namaItem && !isItemCodeExist) {
          insertedData.push({
            name: namaItem,
            brandId: brand?.id || null,
            itemCode: itemCode,
            price: parseFloat(price) || null,
            categoryId: category?.id || null,
            benefitId: benefit?.id || null,
            imageUrl: "/assets/noImage.png",
            imageId: null,
            description: description,
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
          skipDuplicates: true, // Hindari duplikat itemCode
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

