import { NextResponse } from "next/server";
import prisma from "@libs/prismaClient";
import sharp from "sharp"; // npm install sharp
import cloudinary from "@/libs/cloudinary";

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

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("image");

//     if (!file) {
//       return NextResponse.json(
//         { error: "No files received." },
//         { status: 400 }
//       );
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());

//     // Ambil nama tanpa ekstensi dan tambahkan timestamp
//     const originalName = path.parse(file.name).name.replace(/\s+/g, "_");
//     const timestamp = Date.now();
//     const filename = `${originalName}_${timestamp}.webp`;

//     const filePath = path.join("public/images", filename);
//     const fullOutputPath = path.join(process.cwd(), filePath);

//     // Konversi gambar ke webp menggunakan sharp
//     await sharp(buffer)
//       .webp({ quality: 80 }) // bisa diatur quality-nya
//       .toFile(fullOutputPath);

//     const imageUrl = `/images/${filename}`;

//     // Simpan ke database
//     const newImage = await prisma.image.create({
//       data: {
//         image: filename,
//         imageUrl: imageUrl,
//       },
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Image Created and Converted to WebP Successfully!",
//         data: newImage,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to upload and convert image.",
//         error: error,
//       },
//       { status: 500 }
//     );
//   }
// }

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

    const originalName = file.name.split(".")[0].replace(/\s+/g, "_");
    const timestamp = Date.now();
    const filename = `${originalName}_${timestamp}.webp`;

    // Konversi ke WebP pakai sharp
    const webpBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();

    // Upload ke Cloudinary dari buffer WebP
    const base64Webp = `data:image/webp;base64,${webpBuffer.toString(
      "base64"
    )}`;
    const uploadResult = await cloudinary.uploader.upload(base64Webp, {
      public_id: filename.replace(".webp", ""), // tanpa .webp
      folder: "your_folder_name", // ganti sesuai kebutuhan
      format: "webp",
    });

    // Simpan ke database
    const newImage = await prisma.image.create({
      data: {
        image: filename,
        imageUrl: uploadResult.secure_url,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Image converted to WebP & uploaded to Cloudinary!",
        data: newImage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed", error },
      { status: 500 }
    );
  }
}
