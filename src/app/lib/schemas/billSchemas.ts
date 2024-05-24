import { z } from "zod";

export const GetBillSchema = z.object({
  id: z.string()
})
