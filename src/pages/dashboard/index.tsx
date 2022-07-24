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

import { Folder as FolderType, File as FileType } from "@prisma/client"
import FilesView from "../../components/molecules/FilesView/FilesView"
import File from "../../components/molecules/FileView"

const files: FileType[] = [
  {
    id: "1",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "2",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "3",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "4",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "5",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "6",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "7",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "8",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
  {
    id: "9",
    userId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    pinataId: "1",
    name: "test",
    mimeType: "image/png",
    size: 100,
    metaData: {
      width: 100,
      height: 100,
    },
    pinToIpfs: true,
    isDuplicate: false,
  },
]

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    padding: 10,
  },
  folderHeader: {
    marginLeft: 30,
    marginRight: 30,
    width: "50%",
    marginTop: 50,
  },
  filesHeader: {
    marginLeft: 30,
    marginRight: 30,
    width: "50%",
    marginTop: 50,
  },
  filesScroll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    marginTop: "1em",
    width: "78%",
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
      <ScrollArea
        type="hover"
        style={{
          width: "80%",
          marginTop: "20px",
        }}
      >
        <Group style={{ width: folders.length * 325 }}>
          {folders.map((folder: FolderType) => (
            <Folder
              folder={folder}
              onFolderClick={(folder: FolderType) => console.log(folder.id)}
            />
          ))}
        </Group>
      </ScrollArea>
      <Group position="apart" className={classes.filesHeader}>
        <Group>
          <FoldersIcon />
          <Text size="lg">Files</Text>
        </Group>
        <Text onClickCapture={() => console.log("going to all folders")}>
          View All
        </Text>
      </Group>
      <ScrollArea className={classes.filesScroll} type="hover">
        <Group>
          {files.map((file: FileType) => (
            <File file={file} />
          ))}
        </Group>
      </ScrollArea>
    </>
  )
}
