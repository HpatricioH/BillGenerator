import { createTRPCRouter } from "@/server/api/trpc";
import { billRouter } from "./routers/bills";
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  bill: billRouter,
  user: userRouter
});

export type AppRouter = typeof appRouter;