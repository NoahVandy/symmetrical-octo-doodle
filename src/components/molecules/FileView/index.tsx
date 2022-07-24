import {
  createStyles,
  MantineTheme,
  Paper
} from '@mantine/core';
import { File } from '@prisma/client';

export interface IFileView {
  file: File;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  file: {
    height: 500,
    width: 300,
    border: "1px solid black",
    padding: 10,
  },
}));

export default function FileView({ file }: IFileView) {
  const { classes } = useStyles()
  const { name } = file;

  return (
    <Paper shadow="md" className={classes.file}>
      {name}
    </Paper>
  );
}
