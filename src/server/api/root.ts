import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { jobRouter } from "./routers/job";
import { stateRouter } from "./routers/state";

export const appRouter = createTRPCRouter({
  post: postRouter,
  job: jobRouter,
  state: stateRouter,
});

export type AppRouter = typeof appRouter;
