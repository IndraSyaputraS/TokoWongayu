import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import Joi from "joi";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Category",
      data: categories,
    },
    {
      status: 200,
    }
  );
}
const schema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Category name must be filled",
    "string.empty": "Category name must be filled",
  }),
});
export async function POST(request) {
  const body = await request.json();
  const { error, result } = schema.validate(body, { abortEarly: false });

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.details[0].message,
      },
      { status: 400 }
    );
  }
  const categories = await prisma.category.create({
    data: {
      name: value.name,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Category Created Successfully!",
      data: categories,
    },
    { status: 201 }
  );
}
