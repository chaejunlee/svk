import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { bookRouter } from "@/server/api/routers/book";
import { itemRouter } from "./routers/item";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  book: bookRouter,
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
