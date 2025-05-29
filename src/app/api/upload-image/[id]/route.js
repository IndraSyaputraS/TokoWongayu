import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import cloudinary from "@/libs/cloudinary";

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

    // Hapus dari Cloudinary berdasarkan public_id (disimpan di kolom `image`)
    await cloudinary.uploader.destroy(existingImage.image);

    // Hapus dari database
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
