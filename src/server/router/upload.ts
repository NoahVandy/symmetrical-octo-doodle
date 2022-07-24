import axios from 'axios';
import { createReadStream } from 'fs';
import { unlink } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { Submarine } from 'pinata-submarine';
import { z } from 'zod';
import { env } from '../env';
import {
  submarine
} from '../integrations/pinata/submarine';
import { createRouter } from './context';
import FormData from 'form-data';

function readBase64File(inputBase64: string, name: string): File {
  const [, base64] = inputBase64.split(',');
  if (!base64) {
    throw new Error(`Invalid base64 data for ${name}`);
  }
  const file = new File([Buffer.from(base64, 'base64')], name);
  return file;
}

export const fileUploadSchema = z.object({
  files: z.array(z.object({
    name: z.string(),
    size: z.number(),
    base64: z.string(),
  })),
})

export type SubmarineUploadResponse = {
  id: string;
  createdAt: string;
  cid: string;
  name: string;
  originalname: string;
  size: number;
  metadata: any;
  type: string;
  pinToIPFS: boolean;
  uri: string;
  isDuplicate: boolean;
}

export type SubmarineBatchUploadResponse = {
  status: number;
  items: SubmarineUploadResponse[];
}

export const uploadRouter = createRouter()
  .mutation("upload", {
    input: fileUploadSchema,
    async resolve({ input, ctx }) {
      try {
        // Save the files to the public folder
        const prismarineResponses = await Promise.all(
          input.files.map(
            async (file: z.infer<typeof fileUploadSchema>['files'][number]) => {
              const filePath = `public/temp/${file.name}`;
              await writeFile(
                filePath,
                file.base64,
                'base64'
              )
              const response = await submarine.uploadFileOrFolder(
                filePath,
                file.name || 'No name',
                {},
                1
              );
              return response as SubmarineBatchUploadResponse;
            }
          )
        )

        // Sync responses with prisma
        const prismaResponses = await Promise.all(
          prismarineResponses.map(
            async (response) => {
              const { items: [item] } = response;
              if (item) {
                const { id: pinataId, cid, name, originalname, size, metadata, type, pinToIPFS, uri, isDuplicate } = item;
                const { session } = ctx;
                if (!session || !session.user || !session.user.id) {
                  throw new Error('User not logged in');
                }
                const { user: { id: userId } } = session;
                return ctx.prisma.file.upsert({
                  create: {
                    pinataId,
                    mimeType: '',
                    cid,
                    name: originalname,
                    size: parseInt(size.toString()),
                    metaData: metadata,
                    pinToIpfs: pinToIPFS,
                    isDuplicate,
                    user: {
                      connect: {
                        id: userId,
                      }
                    },
                  },
                  where: {
                    cid,
                  },
                  update: {
                    size: parseInt(size.toString()),
                    pinataId,
                    name: originalname,
                    pinToIpfs: pinToIPFS,
                    isDuplicate,
                  }
                });
              }
              return null;
            }
          )
        );

        // Remove the files from the public folder
        await Promise.all(
          input.files.map(
            async (file: z.infer<typeof fileUploadSchema>['files'][number]) => {
              const filePath = `public/temp/${file.name}`;
              await unlink(filePath);
            }
          )
        );

        return {
          status: "success",
          data: prismaResponses,
        }
      } catch (error) {
        // Remove the files
        await Promise.all(
          input.files.map(
            async (file: z.infer<typeof fileUploadSchema>['files'][number]) => {
              const filePath = `public/temp/${file.name}`;
              await unlink(filePath);
            }
          )
        );

        return {
          status: "error",
          data: error,
        }
      }
    }
  });
