import {
  SimpleGrid,
  Stack,
  ThemeIcon,
  useMantineTheme,
  Text,
  MantineTheme,
  Center, Button,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useListState } from '@mantine/hooks';
import { useState } from 'react';
import { File } from 'tabler-icons-react';
import { z } from 'zod';
import {
  fileUploadSchema
} from '../../server/router/upload';
import { trpc } from '../../utils/trpc';
import Layout from '../components/layout';
import { DropzoneChild } from './DropzoneChild';

type FileUploadEntry = z.infer<typeof fileUploadSchema>;

const toEntryWithBase64 = (file: File) => new Promise<
  FileUploadEntry['files'][number]
>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const result = reader.result;
    if (result) {
      resolve({
        name: file.name,
        size: file.size,
        base64: result as string
      });
    } else {
      reject('Failed to convert file to base64');
    }
  };
  reader.onerror = error => reject(error);
});

export default function UploadPage() {
  const [
    filesToUpload,
    {
      append: appendFilesToUpload,
      remove: removeFileToUpload,
      setState: setFilesToUpload,
    }] = useListState<File>([]);

  const { mutate, isLoading } = trpc.useMutation(
    'upload.upload',
    {
      onSuccess: (data) => {
        setFilesToUpload([]);
      },
      onError: (error) => {
        console.error(error);
      }
    },
  )

  return (
      <>
        <Dropzone
          my={200}
          onDrop={(files) => appendFilesToUpload(...files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
          loading={isLoading}
          styles={(theme) => ({
            root: {
              boxShadow: theme.shadows.lg,
            }
          })}
        >
          {(status) => (
            <>
              <DropzoneChild status={status} />
              <SimpleGrid px="xl" cols={7} spacing="xl">
                {filesToUpload.map((file) => (
                  <Stack key={file.name} align="center" spacing={0}>
                    <ThemeIcon
                      gradient={{ from: 'teal', to: 'blue' }}
                      variant="gradient"
                      size={60}
                      radius="xl"
                    >
                      <File size={40} />
                    </ThemeIcon>
                    <Text
                      color="dimmed"
                      size="xs"
                      lineClamp={2}
                      style={{ maxWidth: '100%' }}
                    >{file.name}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </>
          )}
        </Dropzone>
        <Center>
          <Button
            onClick={() => {
              Promise.all(filesToUpload.map(toEntryWithBase64))
                .then((fileObjects) => {
                  mutate({
                    files: fileObjects,
                  });
                })
            }}
          >
            Upload
          </Button>
        </Center>
      </>
  )
}
