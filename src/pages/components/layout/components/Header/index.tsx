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
}))

export default function Header() {
  const { status } = useSession()
  const isAuthenticated = status === "authenticated"

  const { classes } = useStyles()
  const { status } = useSession();
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
          <AuthButton />
        </Group>
      </Group>
    </nav>
  )
}
