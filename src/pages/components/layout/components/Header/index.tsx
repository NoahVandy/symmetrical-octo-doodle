import { useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  Input,
  createStyles,
  MantineTheme,
  Text,
  Group, 
  Button,
} from '@mantine/core';
import { useRouter } from "next/router"
import { useCallback } from "react"

import { signIn, useSession } from "next-auth/react"
import { FileSearch } from "tabler-icons-react"
import AuthButton from "../../../../../components/atoms/AuthButton/AuthButton"

const useStyles = createStyles((theme: MantineTheme) => ({
  containerGroup: {
    paddingTop: 15,
  },
  logo: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
}))

export default function Header() {
  const { status } = useSession()
  const isAuthenticated = status === "authenticated"

  const { classes } = useStyles()
  const { status } = useSession();
  const router = useRouter();
  const onAvatarClick = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <nav>
      <Group className={classes.containerGroup} position={"apart"} px="lg">
        <Text className={classes.logo}>Pin Drive</Text>
        {isAuthenticated && (
          <Input placeholder={"search files."} icon={<FileSearch />} />
        )}
        <Group className={classes.rightContent} position="right">
          <Text>About</Text>
          <Text>Contact</Text>
          {
            status === "authenticated"
              ? (<Avatar
                  className={classes.avatar}
                  onClick={onAvatarClick}
                  radius="xl"
                />)
              : (<AuthButton />)
          }
        </Group>
      </Group>
    </nav>
  )
}
