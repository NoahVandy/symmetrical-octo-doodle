/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,id]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "File_userId_id_key" ON "File"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_userId_id_key" ON "Folder"("userId", "id");
