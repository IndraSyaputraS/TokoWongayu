import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import Joi from "joi";

export async function GET() {
  try {
    const benefits = await prisma.benefit.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(
      {
        sucess: true,
        message: "List Data Benefits",
        data: benefits,
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
    "any.required": "Benefit name must be filled",
    "string.empty": "Benefit name must be filled",
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
    const benefits = await prisma.benefit.create({
      data: {
        name: value.name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Benefit Created Successfully!",
        data: benefits,
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
