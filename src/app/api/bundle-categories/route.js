import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import Joi from "joi";

export async function GET() {
  try {
    const bundleCategories = await prisma.bundleCategory.findMany({
      include: {
        Benefit: true,
        categories: {
          include: {
            Category: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "List Data Bundle Categories",
        data: bundleCategories,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bundle categories",
        error: err,
      },
      {
        status: 500,
      }
    );
  }
}

const schema = Joi.object({
  benefitId: Joi.number().required().messages({
    "any.required": "Benefit must be selected",
    "number.base": "Benefit must be selected",
  }),
  categoryIds: Joi.array()
    .min(2)
    .required()
    .messages({
      "array.base": "Categories must be an array",
      "any.required": "Categories must be selected",
      "any.empty": "Categories must be selected",
      "array.min": "At least two categories must be selected",
    }),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // VALIDATE DATA
    const { error, value } = schema.validate(body, { abortEarly: false });

    if (error) {
      const formattedErrors = {};
      error.details.forEach((detail) => {
        const key = detail.path[0];
        if (!formattedErrors[key]) {
          formattedErrors[key] = detail.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const { benefitId, categoryIds } = value;

    // CREATE BUNDLE CATEGORY
    const bunCat = await prisma.bundleCategory.create({
      data: {
        benefitId,
      },
    });

    // CREATE PIVOT DATA
    const pivotData = categoryIds.map((catId) => ({
      bundleCategoryId: bunCat.id,
      categoryId: catId,
    }));

    await prisma.pivotBunCat.createMany({
      data: pivotData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Bundle Created Successfully!",
        data: bunCat,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create bundle.",
        error: err.message || err,
      },
      { status: 500 }
    );
  }
}
