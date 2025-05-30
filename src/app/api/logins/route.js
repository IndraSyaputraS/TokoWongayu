import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import { SignJWT } from "jose";
import Joi from "joi";

// Joi validation schema
const schema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Username is required",
    "string.min": "Username must be at least 3 characters",
  }),
  password: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 3 characters",
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    try {
      await schema.validateAsync(body, { abortEarly: false });
    } catch (validationError) {
      const fieldErrors = {};
      validationError.details.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = err.message;
      });
      return NextResponse.json({ error: fieldErrors }, { status: 400 });
    }

    const { username, password } = body;

    // Simulated user database
    const hashedPassword = await hash("decatise", 10);
    const mockUsers = [
      { id: "1", username: "admin", password: hashedPassword, role: "admin" },
    ];

    const user = mockUsers.find((u) => u.username === username);
    if (!user) {
      return NextResponse.json(
        { error: { username: "User does not exist" } },
        { status: 401 }
      );
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: { password: "Incorrect password" } },
        { status: 401 }
      );
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: { general: "JWT secret is not configured" } },
        { status: 500 }
      );
    }

    // Generate JWT
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

    // Set cookie
    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: expiresIn,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: { general: "Internal server error" } },
      { status: 500 }
    );
  }
}
