import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import path from "path";
import { writeFile } from "fs/promises";
import sharp from "sharp"; // npm install sharp

export async function GET() {
  try {
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
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch",
        error: err,
      },
      { status: 500 }
    );
  }
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

    // Ambil nama tanpa ekstensi dan tambahkan timestamp
    const originalName = path.parse(file.name).name.replace(/\s+/g, "_");
    const timestamp = Date.now();
    const filename = `${originalName}_${timestamp}.webp`;

    const filePath = path.join("public/images", filename);
    const fullOutputPath = path.join(process.cwd(), filePath);

    // Konversi gambar ke webp menggunakan sharp
    await sharp(buffer)
      .webp({ quality: 80 }) // bisa diatur quality-nya
      .toFile(fullOutputPath);

    const imageUrl = `/images/${filename}`;

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
        message: "Image Created and Converted to WebP Successfully!",
        data: newImage,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload and convert image.",
        error: error,
      },
      { status: 500 }
    );
  }
}
