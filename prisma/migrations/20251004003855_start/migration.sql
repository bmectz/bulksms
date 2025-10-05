-- CreateEnum
CREATE TYPE "TechnicianType" AS ENUM ('CAR_ACCESSORIES', 'CCTV');

-- CreateEnum
CREATE TYPE "RecipientStatus" AS ENUM ('PENDING', 'SENT', 'FAILED', 'DELIVERED');

-- CreateTable
CREATE TABLE "Technician" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" "TechnicianType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Technician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SMSMessage" (
    "id" UUID NOT NULL,
    "body" TEXT NOT NULL,
    "from" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SMSMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SMSRecipient" (
    "id" UUID NOT NULL,
    "messageId" UUID NOT NULL,
    "technicianId" UUID,
    "phone" TEXT NOT NULL,
    "status" "RecipientStatus" NOT NULL DEFAULT 'PENDING',
    "response" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SMSRecipient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SMSRecipient" ADD CONSTRAINT "SMSRecipient_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "SMSMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SMSRecipient" ADD CONSTRAINT "SMSRecipient_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE SET NULL ON UPDATE CASCADE;
