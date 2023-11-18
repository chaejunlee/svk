import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const bookRouter = createTRPCRouter({
  mutate: protectedProcedure
    .input(
      z.object({
        date: z.date(),
        time: z.string(),
        people: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session.user) {
        throw new Error("You must be logged in to book a table");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        status: "ok",
        ...input,
        user: ctx.session.user.id,
      };
    }),
});
