import {
  Group,
  ScrollArea,
  Text,
  createStyles,
  MantineTheme,
} from "@mantine/core"
import FoldersView from "../../components/Folders"

import { Folder } from "@prisma/client"

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    padding: 10,
  },
}))

export default function Dashboard() {
  const { classes } = useStyles()

  const folders: Folder[] = [
    {
      id: "1",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
    {
      id: "3",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
    {
      id: "3",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
  ]

  return (
    <>
      <Group position="apart">
        <Text size="lg">Folders</Text>
        <Text onClickCapture={() => console.log("going to all folders")}>
          View All
        </Text>
      </Group>
      <ScrollArea type="hover">
        <FoldersView folders={folders} />
      </ScrollArea>
    </>
  )
}
