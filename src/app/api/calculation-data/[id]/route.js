import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET(request, { params }) {
  const { id } = await params;
  const IntId = parseInt(id);
  try {
    const calcs = await prisma.calculationData.findUnique({
      where: {
        id: IntId,
      },
    });
    if (!calcs) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Calculation Data Not Found!",
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
        message: "Detail Calculation Data",
        data: calcs,
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
  const { productId, transaction } = body;
  try {
    const calcs = await prisma.calculationData.update({
      where: {
        id: IntId,
      },
      data: {
        transaction: transaction,
        productId: parseInt(productId),
      },
    });
    if (!calcs) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Calculation Data Not Found!",
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
        message: "Calculation Data Updated!",
        data: calcs,
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
    const calcs = await prisma.calculationData.delete({
      where: {
        id: IntId,
      },
    });
    if (!calcs) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Calculation Data Not Found!",
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
        message: "Calculation Data Deleted!",
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
