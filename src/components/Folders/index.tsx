import { Folder } from "@prisma/client"

import FolderContainer from "./Container"

type props = {
  folders: Folder[]
}

export default function Folders({ folders }: props) {
  return <FolderContainer folders={folders} />
}
