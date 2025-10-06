// import { PrismaClient } from "@/lib/generated/prisma";
import { PrismaClient } from "@prisma/client";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

//Neon connectionPool
// const pool = new Pool({ connectionString });

//instatiates the prisma adapter using neon connetion pool
const adapter = new PrismaNeon({ connectionString });
export const prisma = new PrismaClient({ adapter });
