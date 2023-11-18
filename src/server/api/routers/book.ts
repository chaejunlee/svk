import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { books, storePost } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const bookRouter = createTRPCRouter({
  getBooks: publicProcedure.input(z.undefined()).query(async ({ ctx }) => {
    const bookings = await ctx.db
      .select()
      .from(books)
      .leftJoin(storePost, eq(books.postId, storePost.id))
      .where(eq(books.customer, ctx.session!.user.id));

    return bookings;
  }),
  manageBooks: protectedProcedure
    .input(z.undefined())
    .query(async ({ ctx }) => {
      const bookings = await ctx.db
        .select()
        .from(books)
        .leftJoin(storePost, eq(books.postId, storePost.id))
        .where(eq(storePost.owner, ctx.session!.user.id));

      return bookings;
    }),

  confirm: protectedProcedure
    .input(z.object({ id: z.number(), status: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session.user) {
        throw new Error("You must be logged in to confirm a booking");
      }
      await ctx.db
        .update(books)
        .set({ status: input.status })
        .where(eq(books.id, input.id));
    }),
  mutate: protectedProcedure
    .input(
      z.object({
        postId: z.number(),
        date: z.date(),
        time: z.string(),
        people: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session.user) {
        throw new Error("You must be logged in to book a table");
      }
      await ctx.db.insert(books).values({
        date: input.date,
        time: input.time,
        people: input.people,
        customer: ctx.session.user.id,
        postId: input.postId,
        status: "pending",
      });
      return {
        status: "ok",
        ...input,
        user: ctx.session.user.id,
      };
    }),
});
