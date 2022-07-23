import {
  Input,
  Container,
  createStyles,
  MantineTheme,
  Text,
  Group,
} from "@mantine/core"

import { FileSearch } from "tabler-icons-react"
import { useSession } from "next-auth/react"

const useStyles = createStyles((theme: MantineTheme) => ({
  containerGroup: {
    paddingTop: 15,
  },
}))

export default function Header() {
  const auth = useSession()

  const { classes } = useStyles()
  return (
    <nav>
      <Group className={classes.containerGroup} position={"apart"} px="lg">
        <Text>Pin Drive</Text>
        {auth.status != "authenticated" && (
          <>
            <Input placeholder={"search files."} icon={<FileSearch />} />
          </>
        )}
        <Group>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Go to Drive</Text>
        </Group>
      </Group>
    </nav>
  )
}
