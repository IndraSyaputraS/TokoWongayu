"use client";

import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skeleton = () => (
  <section className="py-8 bg-white md:py-16 antialiased animate-pulse">
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
          <div className="w-[200px] h-[200px] bg-gray-300 rounded"></div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4">
          <div className="h-10 w-96 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-24 w-full bg-gray-300 rounded"></div>
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
    <section className="py-4 md:py-8 bg-white antialiased max-w-screen-xl mx-auto">
      <div className="px-4 2xl:px-0">
        {/* GRID 2 KOLOM */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 items-start">
          {/* Gambar Produk */}
          <div className="h-full flex justify-center items-center">
            <div className="max-w-xs md:max-w-md lg:max-w-lg">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-0">
            <h1 className="text-md md:text-xl font-semibold text-gray-900">
              {product.name}
            </h1>

            <div className="mt-4 text-gray-700 grid grid-cols-2 gap-x-4 gap-y-2 max-w-xs">
              <span className="font-semibold text-sm md:text-md">Brand</span>
              <span className="text-sm md:text-md">
                {product.Brand?.name || "-"}
              </span>

              <span className="font-semibold text-sm md:text-md">Category</span>
              <span className="text-sm md:text-md">
                {product.Category?.name || "-"}
              </span>

              <span className="font-semibold text-sm md:text-md">Benefit</span>
              <span className="text-sm md:text-md">
                {product.Benefit?.name || "-"}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-md md:text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-200" />

        <div className="mt-6">
          <p className="text-gray-500 text-justify text-sm md:text-md">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
