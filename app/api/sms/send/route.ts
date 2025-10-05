import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import AfricasTalking from "africastalking";

type Body = {
  type: "CAR_ACCESSORIES" | "CCTV";
  message: string;
  from?: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Body;
  const { type, message, from } = body;

  if (!type || !message) {
    return NextResponse.json(
      { error: "type and message are required" },
      { status: 400 }
    );
  }

  // find technicians of that type
  const technicians = await prisma.technician.findMany({ where: { type } });
  if (!technicians || technicians.length === 0) {
    return NextResponse.json(
      { error: "no technicians for selected type" },
      { status: 400 }
    );
  }
  console.log("Technitians: ", technicians);

  // create SMSMessage and recipients (initially all PENDING)
  const sms = await prisma.sMSMessage.create({
    data: {
      body: message,
      from,
      recipients: {
        create: technicians.map((t) => ({
          technicianId: t.id,
          phone: t.phone,
        })),
      },
    },
    include: { recipients: true },
  });

  // If Africa's Talking credentials exist, try to send, otherwise simulate
  const AT_USERNAME = process.env.AT_USERNAME;
  const AT_API_KEY = process.env.AT_API_KEY;

  if (AT_USERNAME && AT_API_KEY) {
    console.log("ATS: ", AT_USERNAME, AT_API_KEY);
    //seend sms
    try {
      console.log("sms1");
      // const AT = africastalking;
      const AT = AfricasTalking({
        apiKey: process.env.AT_API_KEY,
        username: process.env.AT_USERNAME,
      });
      const smsApi = AT.SMS;
      console.log("sms2");
      // provider accepts either an array or comma separated list
      const to = technicians.map((t) => t.phone);
      const from = "BM SECURITY";
      const res = await smsApi.send({
        to,
        message,
        from: "BM SECURITY",
      });
      console.log("Response from AT: ", res);
      console.log("sms3");
      // mark all recipients as SENT and store provider response in each recipient
      await prisma.sMSRecipient.updateMany({
        where: { messageId: sms.id },
        data: { status: "SENT", response: res as any },
      });
      console.log("sms4");

      return NextResponse.json({
        success: true,
        providerResponse: "res",
        messageId: sms.id,
      });
    } catch (err: any) {
      console.log("sms5");
      const errMsg = String(err.message || err);
      console.log("ERR SMS: ", errMsg);
      // mark recipients as FAILED with error
      await prisma.sMSRecipient.updateMany({
        where: { messageId: sms.id },
        data: { status: "FAILED", response: { error: errMsg } },
      });
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } else {
    // no provider credentials — simulate success (useful in dev)
    await prisma.sMSRecipient.updateMany({
      where: { messageId: sms.id },
      data: {
        status: "SENT",
        response: { simulated: true, note: "AT credentials not set" },
      },
    });
    return NextResponse.json({
      success: true,
      simulated: true,
      messageId: sms.id,
    });
  }
}
// function africastalking(arg0: { username: string; apiKey: string }) {
//   throw new Error("Function not implemented.");
// }
