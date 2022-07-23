import {
  Input,
  Container,
  createStyles,
  MantineTheme,
  Text,
  Group, Button,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { FileSearch } from "tabler-icons-react"
import { signIn, useSession } from 'next-auth/react';

const useStyles = createStyles((theme: MantineTheme) => ({
  containerGroup: {
    paddingTop: 15,
  },
  logo: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
  }
}))

export default function Header() {
  const { status } = useSession()
  const isAuthenticated = status === 'authenticated';
  const {push: navigate} = useRouter();
  const handleGoToDrive = useCallback(() => {
    isAuthenticated ? navigate('/drive') : signIn('google');
  }, [isAuthenticated, navigate, signIn]);

  const { classes } = useStyles()
  return (
    <nav>
      <Group className={classes.containerGroup} position={"apart"} px="lg">
        <Text className={classes.logo}>Pin Drive</Text>
        {status !== "authenticated" && (
          <Input placeholder={"search files."} icon={<FileSearch />} />
        )}
        <Group className={classes.rightContent} position="right">
          <Text>About</Text>
          <Text>Contact</Text>
          <Button radius="xl" onClick={handleGoToDrive}>
            Go to Pin Drive
          </Button>
        </Group>
      </Group>
    </nav>
  )
}
