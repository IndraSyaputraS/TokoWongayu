/*
  Warnings:

  - You are about to drop the column `bundleId` on the `BundleItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `BundleItem` table. All the data in the column will be lost.
  - You are about to drop the column `benefitId` on the `SavedBundle` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `SavedBundle` table. All the data in the column will be lost.
  - You are about to drop the column `totalScore` on the `SavedBundle` table. All the data in the column will be lost.
  - Added the required column `bundle_id` to the `BundleItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `BundleItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benefit__id` to the `SavedBundle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `SavedBundle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_score` to the `SavedBundle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BundleItem" DROP CONSTRAINT "BundleItem_bundleId_fkey";

-- DropForeignKey
ALTER TABLE "BundleItem" DROP CONSTRAINT "BundleItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "SavedBundle" DROP CONSTRAINT "SavedBundle_benefitId_fkey";

-- AlterTable
ALTER TABLE "BundleItem" DROP COLUMN "bundleId",
DROP COLUMN "productId",
ADD COLUMN     "bundle_id" INTEGER NOT NULL,
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SavedBundle" DROP COLUMN "benefitId",
DROP COLUMN "totalPrice",
DROP COLUMN "totalScore",
ADD COLUMN     "benefit__id" INTEGER NOT NULL,
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_score" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "SavedBundle" ADD CONSTRAINT "SavedBundle_benefit__id_fkey" FOREIGN KEY ("benefit__id") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BundleItem" ADD CONSTRAINT "BundleItem_bundle_id_fkey" FOREIGN KEY ("bundle_id") REFERENCES "SavedBundle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BundleItem" ADD CONSTRAINT "BundleItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
