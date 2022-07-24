import { writeFile } from 'fs/promises';
import { z } from 'zod';
import { createRouter } from './context';

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
export const uploadRouter = createRouter()
  .mutation("upload", {
    input: fileUploadSchema,
    async resolve({ input, ctx }) {
      // Save the files to the public folder
      await Promise.all(
        input.files.map(
          (file: z.infer<typeof fileUploadSchema>['files'][number]) => {
            writeFile(
              `public/${file.name}`,
              file.base64,
              'base64'
            );
          }
        )
      )

      return {
        status: "success",
      }
    }
  });
