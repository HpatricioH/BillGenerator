import {z} from "zod";
import { GetBillSchema } from "@/app/lib/schemas/billSchemas";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure
} from "../trpc";

export const billRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({text: z.string()}))
    .query(({input}) => {
      return {
        greeting: `${input.text}!`
      }
    }),

    // Get bills 
    getBills: protectedProcedure.query(({ ctx }) => {
      return ctx.db.bill.findMany({
        where: {
          userId: ctx.session.user.id
        }
      })
    }),

    // Get one bill 
    getBill: protectedProcedure
    .input(GetBillSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.bill.findUnique({
        where: {
          id: input.id
        }
      })
    }),
})