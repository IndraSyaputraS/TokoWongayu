import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = params;
  const IntId = parseInt(id);
  try {
    const category = await prisma.category.findUnique({
      where: { id: IntId },
    });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Detail Category Not Found!",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Detail Data Category",
        data: category,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch category",
        error: err,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const IntId = parseInt(id);
  const body = await request.json();
  const { name } = body;
  try {
    const existing = await prisma.category.findUnique({
      where: { id: IntId },
    });

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Category Not Found!",
        },
        { status: 404 }
      );
    }

    const updated = await prisma.category.update({
      where: { id: IntId },
      data: { name },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Data Category Updated!",
        data: updated,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update category",
        error: err,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const IntId = parseInt(id);
  try {
    const existing = await prisma.category.findUnique({
      where: { id: IntId },
    });

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Category Not Found!",
        },
        { status: 404 }
      );
    }

    await prisma.category.delete({
      where: { id: IntId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category Deleted!",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete category",
        error: err,
      },
      { status: 500 }
    );
  }
}
