import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
  const messages = await prisma.sMSMessage.findMany({
    include: { recipients: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);
}
