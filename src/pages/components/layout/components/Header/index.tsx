import {
  Input,
  createStyles,
  MantineTheme,
  Text,
  Group,
} from '@mantine/core';
import { FileSearch } from "tabler-icons-react"
import AuthButton from '../../../../../components/atoms/AuthButton/AuthButton';

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
          <AuthButton />
        </Group>
      </Group>
    </nav>
  )
}
