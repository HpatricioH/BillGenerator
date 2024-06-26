import { createTRPCRouter } from "@/server/api/trpc";
import { billRouter } from "./routers/bills";
import { userRouter } from "./routers/user";
import { autoBillRouter } from "./routers/autoBill";

export const appRouter = createTRPCRouter({
  bill: billRouter,
  autoBill: autoBillRouter,
  user: userRouter
});

export type AppRouter = typeof appRouter;