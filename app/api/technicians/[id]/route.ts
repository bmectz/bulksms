import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const tech = await prisma.technician.update({
    where: { id: id },
    data: {
      name: data.name,
      phone: data.phone,
      type: data.type,
      verified: data.verified,
    },
  });
  return NextResponse.json(tech);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("Incomming ID: ", id);
  try {
    await prisma.technician.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, error: "Technician not found" },
      { status: 404 }
    );
  }
}
