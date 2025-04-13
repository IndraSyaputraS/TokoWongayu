import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const brands = await prisma.brand.findUnique({
    where: {
      id: IntId,
    },
  });

  if (!brands) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Brand Not Found!",
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
      message: "Detail Data Brand",
      data: brands,
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
  const brands = await prisma.brand.findUnique({
    where: {
      id: IntId,
    },
  });
  if (!brands) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Brand Not Found!",
      },
      {
        status: 404,
      }
    );
  }
  await prisma.brand.update({
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
      message: "Data Brand Updated!",
      data: brands,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const brands = await prisma.brand.findUnique({
    where: {
      id: IntId,
    },
  });
  if (!brands) {
    return NextResponse.json(
      {
        sucess: true,
        message: "Brand Not Found!",
      },
      {
        status: 404,
      }
    );
  }
  await prisma.brand.delete({
    where: {
      id: IntId,
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "Brand Deleted!",
    },
    {
      status: 200,
    }
  );
}
