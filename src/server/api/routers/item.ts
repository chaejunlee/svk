import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { items, storePost } from "@/server/db/schema";
import { eq, gt, lt } from "drizzle-orm";

export const itemRouter = createTRPCRouter({
  getAllItems: protectedProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input, ctx }) => {
      const i = await ctx.db
        .select()
        .from(items)
        .leftJoin(storePost, eq(storePost.id, items.postId))
        .where(eq(items.postId, input.id));

      return {
        i,
      };
    }),
  getItem: protectedProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input, ctx }) => {
      const post = await ctx.db
        .select()
        .from(storePost)
        .leftJoin(storePost, eq(storePost.id, items.postId))
        .where(eq(items.postId, input.id));

      return {
        post,
      };
    }),

  getFilteredItems: protectedProcedure
    .input(z.object({ low: z.number().min(1), high: z.number().min(1) }))
    .query(async ({ input, ctx }) => {
      const item = await ctx.db
        .select()
        .from(items)
        .where(gt(items.price, input.low))
        .where(lt(items.price, input.high));

      return {
        item,
      };
    }),
});
