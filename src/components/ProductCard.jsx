"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPriceBase } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import  PaginationUser  from "./PaginationUser";

const SkeletonCard = () => (
  <div className="rounded-lg border border-gray-200 bg-[#F0EEED] pt-6 shadow-lg animate-pulse">
    <div className="h-56 w-full bg-gray-300 px-6" />
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

const ProductCard = ({ visibleCount = 0, disableAnimation = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const router = useRouter();

  const productsPerPage = visibleCount || 8;
  const totalPages = Math.ceil(data.length / productsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
        );
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
        setTimeout(() => setFade(true), 50);
      }
    };
    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = disableAnimation
    ? data.slice(startIndex, startIndex + productsPerPage)
    : data.slice(0, productsPerPage);

  function handleOverview(id) {
    router.push(`/product-overview/${id}`);
  }

  if (loading) {
    return (
      <section className="bg-white antialiased pt-4 md:pt-4">
        <div className="mx-auto max-w-screen-xl sm:px-6 2xl:px-0">
          <div className="mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: productsPerPage }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white antialiased pt-4 md:pt-4">
      <div className="mx-auto max-w-screen-xl sm:px-6 2xl:px-0">
        <div
          className={`mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {visibleProducts.map((product, idx) => (
            <div
              key={idx}
              onClick={() => handleOverview(product.id)}
              className="rounded-lg border border-gray-200 bg-[#F0EEED] pt-4 shadow-md cursor-pointer"
            >
              <div className="h-52 sm:h-56 w-full px-4 sm:px-6">
                <Image
                  className="mx-auto h-full object-contain"
                  src={product.imageUrl}
                  alt={product.name}
                  priority={false}
                  width={200}
                  height={200}
                />
              </div>
              <hr className="border border-gray-200" />
              <div className="pt-4 sm:pt-6 w-full bg-white px-4 sm:px-6 pb-6 rounded-b-lg">
                <a
                  href="#"
                  className="block w-full truncate text-base sm:text-lg font-semibold leading-tight text-gray-900 hover:underline"
                  title={product.name}
                >
                  {product.name}
                </a>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-900">
                    {product.Benefit?.name}
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">
                      {product.Category?.name}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    Rp. {formatPriceBase(product.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {disableAnimation && totalPages > 1 && (
          <PaginationUser
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </section>
  );
};

export default ProductCard;
