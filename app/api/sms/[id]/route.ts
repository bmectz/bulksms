//deletes message
import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.sMSRecipient.deleteMany({ where: { messageId: id } });
  await prisma.sMSMessage.delete({ where: { id: id } });
  return NextResponse.json({ success: true });
}
