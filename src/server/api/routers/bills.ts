import {z} from "zod";

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
})