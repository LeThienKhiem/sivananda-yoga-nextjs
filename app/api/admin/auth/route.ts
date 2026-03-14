import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import path from "path";
import { config } from "dotenv";

// Load .env files explicitly (Next.js may not expose non-NEXT_PUBLIC vars to Route Handlers)
config({ path: path.resolve(process.cwd(), ".env") });
config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

const ADMIN_COOKIE = "admin_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getAuthToken(): string {
  const pass = process.env.ADMIN_PASS;
  if (!pass) return "";
  return crypto.createHmac("sha256", pass).update("admin_session").digest("hex");
}

function isAuthenticated(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const token = getAuthToken();
  if (!token) return false;
  const cookie = cookieStore.get(ADMIN_COOKIE);
  return cookie?.value === token;
}

export async function POST(req: NextRequest) {
  const pass = process.env.ADMIN_PASS;
  if (!pass) {
    return NextResponse.json(
      { ok: false, error: "ADMIN_PASS not set. Add it to .env.local and restart the dev server." },
      { status: 500 }
    );
  }

  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const input = body.password ?? "";
  if (input !== pass) {
    return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 });
  }

  const token = getAuthToken();
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: COOKIE_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const auth = isAuthenticated(cookieStore);
  return NextResponse.json({ authenticated: auth });
}
