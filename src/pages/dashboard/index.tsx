import {
  Group,
  ScrollArea,
  Text,
  createStyles,
  MantineTheme,
  Container,
} from "@mantine/core"
import Folder from "../../components/Folder"

import { Folders as FoldersIcon } from "tabler-icons-react"

import { Folder as FolderType } from "@prisma/client"

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    padding: 10,
  },
  folderHeader: {
    marginLeft: 30,
    marginRight: 30,
    width: "50%",
  },
}))

export default function Dashboard() {
  const { classes } = useStyles()

  const folders: FolderType[] = [
    {
      id: "1",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
    {
      id: "2",
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
      id: "4",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
    {
      id: "5",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
    {
      id: "6",
      name: "hentai",
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      parentFolderId: null,
    },
  ]

  return (
    <>
      <Group position="apart" className={classes.folderHeader}>
        <Group>
          <FoldersIcon />
          <Text size="lg">Folders</Text>
        </Group>
        <Text onClickCapture={() => console.log("going to all folders")}>
          View All
        </Text>
      </Group>
      <ScrollArea type="hover" style={{ width: "80%", marginTop: "20px" }}>
        <div>
          <Group style={{ width: folders.length * 325 }}>
            {folders.map((folder: FolderType) => (
              <Folder
                folder={folder}
                onFolderClick={(folder: FolderType) => console.log(folder.id)}
              />
            ))}
          </Group>
        </div>
      </ScrollArea>
    </>
  )
}
