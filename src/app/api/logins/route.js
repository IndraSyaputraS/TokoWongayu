import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  // Simulasi database user, hanya 1 admin dengan role 'admin'
  const hashedPassword = await hash("admin", 10);
  const mockUsers = [
    { id: "1", username: "admin", password: hashedPassword, role: "admin" },
    // User biasa tidak perlu login, jadi tidak disertakan di sini
  ];

  const user = mockUsers.find((u) => u.username === username);
  if (!user) {
    return NextResponse.json({ error: "User does not exist" }, { status: 401 });
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  // Buat JWT token menggunakan jose
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const expiresIn = parseInt(process.env.JWT_EXPIRES_IN || "3600");

  const token = await new SignJWT({
    userId: user.id,
    username: user.username,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(Math.floor(Date.now() / 1000) + expiresIn)
    .sign(secret);

  const response = NextResponse.json({ message: "Login successful" });
  response.cookies.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: expiresIn,
    path: "/",
  });

  return response;
}
