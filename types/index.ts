import { z } from "zod";
import { insertTechnitianSchema } from "@/lib/validators";

//these are applicable when saving data to database, but you are not going to have some of them as fprm input
// validator.ts has all those fields that we will have in form inputs, so it validates.

export type Technitians = z.infer<typeof insertTechnitianSchema> & {
  id: string;
  createdAt: Date;
};
