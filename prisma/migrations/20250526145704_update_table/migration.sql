/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SavedBundle` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `bundle_category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `bundle_category` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `bundling_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bundling_package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_recomendation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `BundleItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `SavedBundle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `bundle_category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bundling_item" DROP CONSTRAINT "bundling_item_bundling_pack_id_fkey";

-- DropForeignKey
ALTER TABLE "bundling_item" DROP CONSTRAINT "bundling_item_product_id_fkey";

-- DropForeignKey
ALTER TABLE "item_recomendation" DROP CONSTRAINT "item_recomendation_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_bundling_pack_id_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_user_id_fkey";

-- AlterTable
ALTER TABLE "BundleItem" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SavedBundle" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "bundle_category" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "stock",
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "bundling_item";

-- DropTable
DROP TABLE "bundling_package";

-- DropTable
DROP TABLE "item_recomendation";

-- DropTable
DROP TABLE "ratings";

-- DropTable
DROP TABLE "transaction";

-- DropTable
DROP TABLE "users";
