"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPriceBase } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";

const SkeletonCard = () => (
  <div className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-lg animate-pulse">
    <div className="h-[80px] md:h-52 w-full bg-gray-300 px-4" />
    <hr className="border border-gray-200" />
    <div className="pt-6 w-full bg-white px-6 pb-6 rounded-b-lg">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="flex items-center gap-2 mt-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-4 w-12 bg-gray-300 rounded" />
      </div>
      <div className="mt-4 h-6 w-1/2 bg-gray-300 rounded" />
    </div>
  </div>
);

const ProductCard = ({ product, onClick }) => (
  <div
    key={product.id}
    onClick={() => onClick(product.id)}
    className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-md cursor-pointer"
  >
    <div className="h-26 w-full px-4 md:h-52 py-2">
      <Image
        className="mx-auto md:h-full h-[80px] object-contain"
        src={product.imageUrl || "/placeholder.png"}
        alt={product.name || "Product Image"}
        priority={false}
        width={200}
        height={200}
      />
    </div>
    <hr className="border border-gray-200" />
    <div className="pt-3 sm:pt-6 w-full bg-white px-3 sm:px-6 pb-3 rounded-b-lg">
      <a
        href="#"
        className="block w-full truncate text-sm sm:text-base font-semibold leading-tight text-gray-900 hover:underline"
        title={product.name}
      >
        {product.name}
      </a>
      <div className="mt-1 sm:mt-2">
        <p className="text-xs sm:text-sm font-medium text-gray-900">
          {product.Benefit?.name}
        </p>
        <div className="mt-1 sm:mt-2">
          <p className="text-xs sm:text-sm font-medium text-gray-900">
            {product.Category?.name}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-lg sm:text-xl font-extrabold text-gray-900">
          Rp. {formatPriceBase(product.price)}
        </p>
      </div>
    </div>
  </div>
);

const ProductCardAnimated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  const router = useRouter();
  const visibleCount = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
        );
        const result = await res.json();
        setData(result.data || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (data.length <= visibleCount) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + visibleCount) % data.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleOverview = (id) => {
    router.push(`/product-overview/${id}`);
  };

  const visibleProducts = Array.from(
    new Map(
      [
        ...data.slice(currentIndex, currentIndex + visibleCount),
        ...data.slice(
          0,
          Math.max(0, currentIndex + visibleCount - data.length)
        ),
      ].map((b) => [b.id, b])
    ).values()
  );

  return (
    <section className="bg-white antialiased">
      <div className="mx-auto max-w-screen-xl sm:px-6 2xl:px-0">
        <div
          className={`mb-4 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleOverview}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardAnimated;
