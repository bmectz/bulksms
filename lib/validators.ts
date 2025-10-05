import { z } from "zod";

//schema for tech

export const insertTechnitianSchema = z.object({
  name: z.string().min(3, "Jina lazima liwe na angalau herufi 3"),
  phone: z.string().min(10, "Namba si sahihi"),
  type: z.string(),
  gender: z.string().optional(),
  isFeatured: z.boolean(), //sio wote wakutumia sms
});
