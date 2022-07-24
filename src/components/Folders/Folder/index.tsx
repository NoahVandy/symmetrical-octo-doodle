import { createStyles, MantineTheme, Paper } from "@mantine/core"
import { Folder } from "@prisma/client"

type props = {
  folder: Folder
}
const useStyles = createStyles((theme: MantineTheme) => ({
  folder: {
    height: 250,
    width: 300,
    border: "1px solid black",
    padding: 10,
  },
}))

export default function FolderView({ folder }: props) {
  const { classes } = useStyles()

  return (
    <Paper shadow="md" className={classes.folder}>
      {folder.name}
    </Paper>
  )
}
