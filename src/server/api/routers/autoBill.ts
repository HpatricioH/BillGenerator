import { z } from "zod";
import { CreateAutoBillSchema } from "@/app/lib/schemas/billSchemas";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure
} from "../trpc";

export const autoBillRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `${input.text}!`
      }
    }),

  // Create an AutoBill
  createAutoBill: protectedProcedure
    .input(CreateAutoBillSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.autoBill.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
          createdAt: new Date()
        }
      })
    }),

  getAutoBills: protectedProcedure.query(({ctx}) => {
    return ctx.db.autoBill.findMany({
      where: {
        userId: ctx.session.user.id 
      }
    })
  })

})