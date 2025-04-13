import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
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
}

export async function POST(request) {
  const body = await request.json();
  const { name } = body;
  const benefits = await prisma.benefit.create({
    data: {
      name: name,
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
}
