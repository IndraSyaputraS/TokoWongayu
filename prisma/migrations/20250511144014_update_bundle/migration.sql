/*
  Warnings:

  - You are about to drop the column `userId` on the `SavedBundle` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedBundle" DROP CONSTRAINT "SavedBundle_userId_fkey";

-- AlterTable
ALTER TABLE "SavedBundle" DROP COLUMN "userId";
