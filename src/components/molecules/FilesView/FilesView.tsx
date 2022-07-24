import { File } from "@prisma/client";
import FilesContainer from '../FilesContainer/FilesContainer';

export interface IFilesView {
  files: File[];
}

export default function FilesView({ files }: IFilesView) {
  return (
    <FilesContainer files={files} />
  );
}
