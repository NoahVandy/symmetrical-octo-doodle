import { createRouter } from "./context";
import { submarine } from '../integrations/pinata/submarine';
import { z } from "zod";

export const submarineRouter = createRouter()
  .query("folders", {
    input: z
      .object({
        page: z.number(),
        perPage: z.number(),
      }),
    async resolve({ input, ctx: { session, prisma } }) {
      if (!session || !session.user || !session.user.id) {
        throw new Error("Not logged in");
      }
      const {user: { id: userId} } = session;
      return prisma.user.findUniqueOrThrow({
        where: { id: userId },
      }).folders({
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
        skip: (input.page - 1) * input.perPage,
        take: input.perPage,
      })
    },
  })
  .query("files", {
    input: z
      .object({
        page: z.number(),
        perPage: z.number(),
      }),
    async resolve({ input, ctx: { session, prisma } }) {
      if (!session || !session.user || !session.user.id) {
        throw new Error("Not logged in");
      }
      const {user: { id: userId} } = session;
      return prisma.user.findUniqueOrThrow({
        where: { id: userId },
      }).files({
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          cid: true,
        },
        skip: (input.page - 1) * input.perPage,
        take: input.perPage,
      })
    }
  })

  // ONLY RETURNS PAGES OF 10 FILES each
