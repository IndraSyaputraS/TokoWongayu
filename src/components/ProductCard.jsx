"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPriceBase } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import PaginationUser from "./PaginationUser";

const SkeletonCard = () => (
  <div className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-lg animate-pulse">
    <div className="h-[80px] sm:h-52 w-full bg-gray-300 px-3 sm:px-6 rounded-t-lg" />
    <hr className="border border-gray-200" />
    <div className="pt-3 sm:pt-6 w-full bg-white px-3 sm:px-6 pb-5 rounded-b-lg">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="flex items-center gap-2 mt-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-4 w-12 bg-gray-300 rounded" />
      </div>
      <div className="mt-4 h-6 w-1/2 bg-gray-300 rounded" />
    </div>
  </div>
);

const ProductCard = ({ visibleCount = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const productsPerPage = visibleCount;
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
      }
    };
    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = data.slice(startIndex, startIndex + productsPerPage);

  function handleOverview(id) {
    router.push(`/product-overview/${id}`);
  }

  if (loading) {
    return (
      <section className="bg-white antialiased pt-4 md:pt-4">
        <div className="mx-auto max-w-screen-xl sm:px-6 2xl:px-0">
          <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product, idx) => (
            <div
              key={idx}
              onClick={() => handleOverview(product.id)}
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
              <div className="pt-3 sm:pt-6 w-full bg-white px-3 sm:px-6 pb-5 rounded-b-lg">
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
          ))}
        </div>

        {totalPages > 1 && (
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
