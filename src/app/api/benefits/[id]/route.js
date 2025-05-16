import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  try {
    const benefits = await prisma.benefit.findUnique({
      where: {
        id: IntId,
      },
    });

    if (!benefits) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Benefit Not Found!",
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
        message: "Detail Data Benefit",
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

export async function PUT(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  const body = await request.json();
  const { name } = body;
  try {
    const benefits = await prisma.benefit.findUnique({
      where: {
        id: IntId,
      },
    });
    if (!benefits) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Benefit Not Found!",
        },
        {
          status: 404,
        }
      );
    }
    await prisma.benefit.update({
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
        message: "Data Benefit Updated!",
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

export async function DELETE(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  try {
    const benefits = await prisma.benefit.findUnique({
      where: {
        id: IntId,
      },
    });
    if (!benefits) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Benefit Not Found!",
        },
        {
          status: 404,
        }
      );
    }
    await prisma.benefit.delete({
      where: {
        id: IntId,
      },
    });
    return NextResponse.json(
      {
        sucess: true,
        message: "Benefit Deleted!",
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
