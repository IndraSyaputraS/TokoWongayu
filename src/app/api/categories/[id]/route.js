import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const categories = await prisma.category.findUnique({
    where: {
      id: IntId,
    },
  });

  if (!categories) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Category Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(
    {
      sucess: true,
      message: "Detail Data Category",
      data: categories
    },
    {
      status: 200,
    }
  );
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const body = await request.json();
  const { name } = body;
  const categories = await prisma.category.findUnique({
    where: {
      id: IntId,
    },
  });
  if (!categories) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Category Not Found!",
      },
      {
        status: 404,
      }
    );
  }
  await prisma.category.update({
    where: {
      id: IntId,
    },
    data: {
      name: name,
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "Data Category Updated!",
      data: categories,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const categories = await prisma.category.findUnique({
    where: {
      id: IntId,
    },
  });
  if (!categories) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Category Not Found!",
      },
      {
        status: 404,
      }
    );
  }
  await prisma.category.delete({
    where: {
      id: IntId,
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "Category Deleted!",
    },
    {
      status: 200,
    }
  );
}
