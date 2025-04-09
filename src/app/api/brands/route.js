import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  const brands = await prisma.brand.findMany({
    orderBy: { 
      brand_id: 'asc'
  }
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
}

export async function POST(request) {
    const body = await request.json();
    const { name } = body;
    const brands = await prisma.brand.create({
      data: {
        name: name
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
  }