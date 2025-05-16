-- DropForeignKey
ALTER TABLE "BundleItem" DROP CONSTRAINT "BundleItem_bundle_id_fkey";

-- DropForeignKey
ALTER TABLE "BundleItem" DROP CONSTRAINT "BundleItem_product_id_fkey";

-- DropForeignKey
ALTER TABLE "SavedBundle" DROP CONSTRAINT "SavedBundle_benefit_id_fkey";

-- AddForeignKey
ALTER TABLE "SavedBundle" ADD CONSTRAINT "SavedBundle_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BundleItem" ADD CONSTRAINT "BundleItem_bundle_id_fkey" FOREIGN KEY ("bundle_id") REFERENCES "SavedBundle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BundleItem" ADD CONSTRAINT "BundleItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
