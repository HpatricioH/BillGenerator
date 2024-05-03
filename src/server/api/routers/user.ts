import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";


export const userRouter = createTRPCRouter({
  getById: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.user.findUnique({
      where: {
        id: input,
      }
    })
  })
});