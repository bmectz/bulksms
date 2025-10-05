import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
  const technicians = await prisma.technician.findMany({
    orderBy: { createdAt: "desc" },
  });
  console.log("Technitians: ", technicians);
  return NextResponse.json(technicians);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, type } = body;

  if (!name || !phone || !type) {
    return NextResponse.json(
      { error: "name, phone and type are required" },
      { status: 400 }
    );
  }

  // basic duplicate phone check
  const exists = await prisma.technician.findFirst({ where: { phone } });
  if (exists) {
    return NextResponse.json(
      { error: "phone already exists" },
      { status: 409 }
    );
  }

  const tech = await prisma.technician.create({
    data: { name, phone, type },
  });

  return NextResponse.json(tech, { status: 201 });
}
