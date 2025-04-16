/*
  Warnings:

  - You are about to drop the `bundle_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bundle_category" DROP CONSTRAINT "bundle_category_benefit_id_fkey";

-- DropForeignKey
ALTER TABLE "bundle_category" DROP CONSTRAINT "bundle_category_category_id_fkey";

-- DropTable
DROP TABLE "bundle_category";

-- CreateTable
CREATE TABLE "BundleCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "benefit_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "BundleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pivot_bun_cat" (
    "id" SERIAL NOT NULL,
    "bundle_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pivot_bun_cat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pivot_bun_cat_bundle_id_category_id_key" ON "pivot_bun_cat"("bundle_id", "category_id");

-- AddForeignKey
ALTER TABLE "BundleCategory" ADD CONSTRAINT "BundleCategory_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BundleCategory" ADD CONSTRAINT "BundleCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pivot_bun_cat" ADD CONSTRAINT "pivot_bun_cat_bundle_id_fkey" FOREIGN KEY ("bundle_id") REFERENCES "BundleCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pivot_bun_cat" ADD CONSTRAINT "pivot_bun_cat_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
