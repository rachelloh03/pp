import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/app/dashboard"];
const publicRoutes = ["/app/(auth)/signin"];

export default async function middleware(req: NextRequest) {
  console.log("HELLOO");
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.username) {
    return NextResponse.redirect(new URL("/app/(auth)/signin", req.nextUrl));
  }

  if (isPublicRoute && session?.username) {
    return NextResponse.redirect(new URL("/app/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
