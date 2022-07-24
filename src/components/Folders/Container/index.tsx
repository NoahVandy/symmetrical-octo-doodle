import Grid from "@mui/material/Grid"
import { Folder } from "@prisma/client"

import FolderView from "../Folder"

type props = {
  folders: Folder[]
}

export default function FolderContainer({ folders }: props) {
  return (
    <Grid container direction="row">
      {folders.map((folder: Folder) => (
        <Grid item>
          <FolderView folder={folder} />
        </Grid>
      ))}
    </Grid>
  )
}
