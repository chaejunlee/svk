import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { posts, storePost, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const postRouter = createTRPCRouter({
  getAllPosts: protectedProcedure
    .input(z.undefined())
    .query(async ({ ctx }) => {
      const posts = await ctx.db
        .select()
        .from(storePost)
        .leftJoin(users, eq(users.id, storePost.owner));

      return {
        posts,
      };
    }),
  getPost: protectedProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input, ctx }) => {
      const post = await ctx.db
        .select()
        .from(storePost)
        .leftJoin(users, eq(users.id, storePost.owner))
        .where(eq(storePost.id, input.id));

      return {
        post,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
