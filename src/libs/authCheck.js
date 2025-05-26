import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { parseAuthCookie, verifyJwt } from "@/utils/jwt";

export async function requireAuth() {
  const headersList = await headers();
  const cookieHeader = headersList.get("cookie") || "";
  const token = parseAuthCookie(cookieHeader);
  const payload = token ? await verifyJwt(token) : null;

  if (!payload) {
    redirect("/login"); // akan langsung stop & redirect
  }

  return payload; // bisa dikembalikan kalau mau dipakai info user
}
