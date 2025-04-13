import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient"

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { 
        id: 'asc'
    }
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

export async function POST(request) {
    const body = await request.json();
    const { name } = body;
    const categories = await prisma.category.create({
      data: {
        name: name
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