import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  const calcs = await prisma.calculationData.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  // Jika tidak ada data, kembalikan array kosong atau null
  if (!calcs || !calcs.transaction) {
    return NextResponse.json(
      {
        success: true,
        message: "No calculation data available",
        data: [],
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "List Calculation Data",
      data: calcs.transaction,
    },
    {
      status: 200,
    }
  );
}
