import { z } from "zod";

export const human = z.object({
  name: z.string(),
  age: z.number(),
  height: z.number(),
  weight: z.number().optional(),
  isAdult: z.boolean(),
});
