import { createStyles, MantineTheme, Paper, Text } from "@mantine/core"
import { Folder } from "@prisma/client"

import { Folder as FolderIcon } from "tabler-icons-react"

type props = {
  folder: Folder
  onFolderClick: Function
}
const useStyles = createStyles((theme: MantineTheme) => ({
  folder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 300,
    border: "1px solid black",
    padding: 10,
  },
}))

export default function FolderView({ folder, onFolderClick }: props) {
  const { classes } = useStyles()

  return (
    <Paper
      shadow="md"
      className={classes.folder}
      onClickCapture={() => onFolderClick(folder)}
    >
      <FolderIcon />
      <Text>{folder.name}</Text>
    </Paper>
  )
}
