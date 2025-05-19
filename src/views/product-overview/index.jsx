"use client";

import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skeleton = () => (
  <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased animate-pulse">
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
          <div className="w-[200px] h-[200px] bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4">
          <div className="h-10 w-96 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-24 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  </section>
);

const ProductOverview = ({ productId }) => {
  const [product, setProduct] = useState(null);

  const fetchProductById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await res.json();
      setProduct(data.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);

  if (!product) return <Skeleton />;

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 antialiased max-w-screen-xl mx-auto">
      <div className="px-4 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 items-center">
          {/* Gambar Produk */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              priority={false}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Detail Produk */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.name}
            </h1>

            {/* Brand, Category, Benefit */}
            <div className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-x-4 gap-y-2 max-w-xs">
              <span className="font-semibold">Brand</span>
              <span>{product.Brand?.name || "-"}</span>

              <span className="font-semibold">Category</span>
              <span>{product.Category?.name || "-"}</span>

              <span className="font-semibold">Benefit</span>
              <span>{product.Benefit?.name || "-"}</span>
            </div>

            {/* Harga */}
            <div className="mt-6">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Garis pemisah */}
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            {/* Deskripsi */}
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Studio quality three mic array for crystal clear calls and voice
              recordings...
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Two Thunderbolt USB 4 ports...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
