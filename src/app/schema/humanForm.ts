import { z } from "zod";

export const humanForm = z.object({
  name: z.string().min(1, "이름은 필수입니다."),
  age: z.coerce.number().positive("나이는 양수여야 합니다."),
});
