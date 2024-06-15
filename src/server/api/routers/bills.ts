import {z} from "zod";
import { CreateAutoBillSchema, CreateBillSchema, GetBillSchema } from "@/app/lib/schemas/billSchemas";

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

    // Create a bill 
    createBill: protectedProcedure
     .input(CreateBillSchema)
     .mutation(async ({ ctx, input }) => {
      return ctx.db.bill.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
          createdAt: new Date(),
        }
      })
     }),

     // Delete a bill 
     deleteBill: protectedProcedure
      .input(GetBillSchema)
      .mutation(async ({ ctx, input}) => {
        return ctx.db.bill.delete({
          where: {
            id: input.id
          }
        })
      }),

      // Create an AutoBill
      createAutoBill: protectedProcedure
        .input(CreateAutoBillSchema)
        .mutation(async ({ctx, input}) => {
          return ctx.db.bill.create({
            data: {
              ...input,
              userId: ctx.session.user.id,
              createdAt: new Date()
            }
          })
        })
})