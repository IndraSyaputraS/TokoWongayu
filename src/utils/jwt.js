import { jwtVerify } from "jose";
import { parse } from "cookie";

export function parseAuthCookie(cookieHeader) {
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  return cookies.authToken || null;
}

export async function verifyJwt(token) {
  if (typeof token !== "string") return null;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
}
