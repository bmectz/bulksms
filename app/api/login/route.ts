import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === process.env.APP_USERNAME &&
    password === process.env.APP_PASSWORD
  ) {
    // Create a simple session cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("auth", "yes", {
      httpOnly: true,
      maxAge: 60 * 60 * 1, // 1 hours
    });
    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
