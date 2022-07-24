import {
  Input,
  createStyles,
  MantineTheme,
  Text,
  Group,
} from '@mantine/core';
import { useSession } from 'next-auth/react';
import { FileSearch } from "tabler-icons-react"
import AuthButton from '../../../../../components/atoms/AuthButton/AuthButton';
import ColorSchemeToggle
  from '../../../../../components/atoms/ColorSchemeToggle/ColorSchemeToggle';

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
  const { classes } = useStyles()
  const { status } = useSession();
  return (
    <nav>
      <Group className={classes.containerGroup} position={"apart"} px="lg">
        <Text className={classes.logo}>Pin Drive</Text>
        {status !== "authenticated" && (
          <Input placeholder={"search files."} icon={<FileSearch />} />
        )}
        <Group className={classes.rightContent} position="right">
          <ColorSchemeToggle />
          <Text>About</Text>
          <Text>Contact</Text>
          <AuthButton />
        </Group>
      </Group>
    </nav>
  );
}
