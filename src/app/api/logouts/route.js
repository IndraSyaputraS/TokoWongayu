import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );

  // Hapus cookie authToken, dengan opsi path, httpOnly, secure agar sesuai dengan yang diset saat login
  response.cookies.delete("authToken", {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}
