/*
  Warnings:

  - A unique constraint covering the columns `[userId,cid]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,cid]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cid` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cid` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "cid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "cid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "File_userId_cid_key" ON "File"("userId", "cid");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_userId_cid_key" ON "Folder"("userId", "cid");
