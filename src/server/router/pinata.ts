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
          cid: true,
          createdAt: true,
          updatedAt: true,
        },
        skip: (input.page - 1) * input.perPage,
        take: input.perPage,
      })
    },
  })
  // ONLY RETURNS PAGES OF 10 FILES each
  .query("folderFiles", {
    input: z
      .object({
        folderId: z.string(),
        page: z.number(),
      }),
    async resolve({ input, ctx: { session, prisma } }) {
      if (!session || !session.user || !session.user.id) {
        throw new Error("Not logged in");
      }
      const {user: { id: userId} } = session;
      const folder = await prisma.folder.findUniqueOrThrow({
        where: {
          userId_id: {
            userId,
            id: input.folderId,
          }
        },
        select: {
          id: true,
          cid: true,
        }
      });
      const foundContent = await submarine.getSubmarinedContentByCid(folder.cid);
      const pinataFolder = foundContent.items[0];
      const pinataFolderId = pinataFolder.id;
      const content = await submarine.listFolderContent(
        pinataFolderId, `${(input.page - 1) * 10}`,
      );
      return content.childContent;
    },
  });
