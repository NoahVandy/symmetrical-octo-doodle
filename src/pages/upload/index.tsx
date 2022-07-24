import {
  SimpleGrid,
  Stack,
  ThemeIcon,
  useMantineTheme,
  Text, MantineTheme,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useListState } from '@mantine/hooks';
import { useState } from 'react';
import { File } from 'tabler-icons-react';
import Layout from '../components/layout';
import { DropzoneChild } from './DropzoneChild';

export default function UploadPage() {

  const [
    filesToUpload,
    {
      append: appendFilesToUpload,
      remove: removeFileToUpload,
    }] = useListState<File>([]);

  console.log(filesToUpload);

  return (
    <Layout>
      <Dropzone
        my={200}
        onDrop={(files) => appendFilesToUpload(...files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
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
    </Layout>
  )
}
