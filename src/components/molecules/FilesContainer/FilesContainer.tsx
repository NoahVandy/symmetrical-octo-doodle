import Grid from "@mui/material/Grid"
import { File } from '@prisma/client';
import FileView from "../FileView/FileView";

export interface IFilesContainer {
  files: File[];
}

export default function FilesContainer({ files }: IFilesContainer) {
  return (
    <Grid
      container
      direction="row"
    >
      {files.map((file: File) => {
        const { id } = file;
        return (
          <Grid
            key={id}
            item
          >
            <FileView file={file} />
          </Grid>
        );
      })}
    </Grid>
  );
}
