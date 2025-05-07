import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";

export async function GET() {
  const itemRec = await prisma.itemRecomendation.findMany({
    include:{
      Product:{
        include:{
          Category:true,
          Benefit:true
        }
      }
    },
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Category",
      data: itemRec,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req) {
  try {
    const { productIds } = await req.json();

    if (!productIds || !Array.isArray(productIds)) {
      return NextResponse.json(
        { error: "Invalid productIds" },
        { status: 400 }
      );
    }

    // Optional: bersihkan data sebelumnya
    await prisma.itemRecomendation.deleteMany();

    // Simpan data baru
    const data = productIds.map((id) => ({
      productId: id,
    }));

    await prisma.itemRecomendation.createMany({ data });

    return NextResponse.json({ message: "Similarity results saved", data });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Failed to save similarity results" },
      { status: 500 }
    );
  }
}
