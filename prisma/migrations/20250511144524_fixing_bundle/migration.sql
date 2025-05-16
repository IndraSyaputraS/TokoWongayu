/*
  Warnings:

  - You are about to drop the column `benefit__id` on the `SavedBundle` table. All the data in the column will be lost.
  - Added the required column `benefit_id` to the `SavedBundle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SavedBundle" DROP CONSTRAINT "SavedBundle_benefit__id_fkey";

-- AlterTable
ALTER TABLE "SavedBundle" DROP COLUMN "benefit__id",
ADD COLUMN     "benefit_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SavedBundle" ADD CONSTRAINT "SavedBundle_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
