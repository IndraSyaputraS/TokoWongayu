/*
  Warnings:

  - You are about to drop the `BundleCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BundleCategory" DROP CONSTRAINT "BundleCategory_benefit_id_fkey";

-- DropForeignKey
ALTER TABLE "BundleCategory" DROP CONSTRAINT "BundleCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "pivot_bun_cat" DROP CONSTRAINT "pivot_bun_cat_bundle_id_fkey";

-- DropTable
DROP TABLE "BundleCategory";

-- CreateTable
CREATE TABLE "bundle_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "benefit_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bundle_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bundle_category" ADD CONSTRAINT "bundle_category_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pivot_bun_cat" ADD CONSTRAINT "pivot_bun_cat_bundle_id_fkey" FOREIGN KEY ("bundle_id") REFERENCES "bundle_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
