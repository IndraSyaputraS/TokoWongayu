import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import Joi from "joi";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "List Data Category",
        data: categories,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch categories",
        error: err,
      },
      { status: 500 }
    );
  }
}

const schema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Category name must be filled",
    "string.empty": "Category name must be filled",
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { error, value } = schema.validate(body, { abortEarly: false });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: {
        name: value.name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category Created Successfully!",
        data: category,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create category.",
        error: err,
      },
      { status: 500 }
    );
  }
}
