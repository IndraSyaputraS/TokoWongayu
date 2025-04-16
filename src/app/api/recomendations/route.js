import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  const recs = await prisma.itemRecomendation.findMany({
    include: {
      Product: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(
    {
      success: true,
      message: "List Calculation Data",
      data: recs,
    },
    {
      status: 200,
    }
  );
}
