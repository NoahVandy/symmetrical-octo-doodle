import {
  Group,
  ScrollArea,
  Text,
  createStyles,
  MantineTheme,
} from "@mantine/core"
import FoldersView from "../../components/Folders"
import FilesView from "../../components/molecules/FilesView/FilesView"

import {
  Folder,
  File
} from "@prisma/client"

const files: File[] = [
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
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
    isDuplicate: false
  },
];

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    padding: 10,
  },

  filesScroll: {
    height: '600px',
    marginTop: '1em',
  }
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
  ];

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
      <ScrollArea
        className={classes.filesScroll}
        type="hover"
      >
        <FilesView files={files} />
      </ScrollArea>
    </>
  )
}
