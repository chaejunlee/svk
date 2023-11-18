import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { items, storePost } from "@/server/db/schema";
import { eq } from "drizzle-orm";

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
});
