import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import path from "path";
import { unlink } from "fs/promises";

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const intId = parseInt(id, 10);
    if (isNaN(intId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const existingImage = await prisma.image.findUnique({
      where: { id: intId },
    });

    if (!existingImage) {
      return NextResponse.json({ error: "Image not found." }, { status: 404 });
    }
    const filePath = path.join(
      process.cwd(),
      "public",
      existingImage.imageUrl.replace(/^\/+/, "")
    );

    try {
      await unlink(filePath);
    } catch (err) {
      if (err.code !== "ENOENT") {
        console.error("Error deleting file:", err);
      }
    }
    await prisma.image.delete({
      where: { id: intId },
    });
    return NextResponse.json({
      message: "Delete Success",
      status: 200,
      data: existingImage,
    });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({
      message: "Delete Failed",
      error: error.message,
      status: 500,
    });
  }
}
