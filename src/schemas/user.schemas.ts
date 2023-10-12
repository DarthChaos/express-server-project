import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z.string().min(1, "Invalid Name."),
  lastName: z.string().nullable().default(""),
  age: z.number(),
  active: z.boolean().default(true),
});
