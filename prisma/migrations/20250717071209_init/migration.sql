/*
  Warnings:

  - A unique constraint covering the columns `[item_code]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_item_code_key" ON "product"("item_code");
