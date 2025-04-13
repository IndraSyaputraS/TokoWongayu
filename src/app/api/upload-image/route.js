import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import path from "path";
import { writeFile } from "fs/promises";

export async function GET() {
  const images = await prisma.image.findMany();
  return NextResponse.json(
    {
      success: true,
      message: "List Data Images",
      data: images,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/\s+/g, "_");
    const filePath = path.join("public/images", filename);
    const imageUrl = `/images/${filename}`;

    await writeFile(path.join(process.cwd(), filePath), buffer);

    // Simpan ke database
    const newImage = await prisma.image.create({
      data: {
        image: filename,
        imageUrl: imageUrl,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Image Created Successfully!",
        data: newImage,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
