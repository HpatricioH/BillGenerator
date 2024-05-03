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
})