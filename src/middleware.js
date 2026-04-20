// middleware.js  ← must be at project root OR src/middleware.js if using src/ dir

import { NextResponse } from "next/server";

export async function middleware(request) {   // ← must be named "middleware"
  console.log("proxy");

  const { method, url, headers } = request;
  const ip = headers.get("x-forwarded-for") || "-";
  const timestamp = new Date().toISOString();

  if (!url.includes("/api/log")) {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestamp, method, url, ip }),
    }).catch(() => {});
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.well-known.*|.*\\..*).*)",
  ],
};