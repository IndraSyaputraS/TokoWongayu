import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import Joi from "joi";

export async function GET() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(
      {
        sucess: true,
        message: "List Data Brands",
        data: brands,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json({
      sucess: false,
      message: "Failed to fetch",
      error: err,
    });
  }
}

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Brand name must be filled",
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { error, result } = schema.validate(body, { abortEarly: false });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message, // kirim error pertama
        },
        { status: 400 }
      );
    }

    const brands = await prisma.brand.create({
      data: {
        name: value.name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Brand Created Successfully!",
        data: brands,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({
      sucess: false,
      message: "Failed to fetch",
      error: err,
    });
  }
}
