"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPriceBase } from "@/utils/formatPrice";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";

const SkeletonCard = () => (
  <div className="rounded-lg border border-gray-200 bg-[#F0EEED] pt-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 animate-pulse">
    <div className="h-56 w-full bg-gray-300 dark:bg-gray-700 px-6" />
    <hr className="border border-gray-200 dark:border-gray-700" />
    <div className="pt-6 w-full bg-white px-6 pb-6 rounded-b-lg">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
      <div className="flex items-center gap-2 mt-2">
        <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
      <div className="mt-4 h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
    </div>
  </div>
);

const ProductCard = ({ visibleCount = 0, disableAnimation = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectProduct, setSelectProduct] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const productsPerPage = visibleCount || 8;
  const totalPages = Math.ceil(data.length / productsPerPage);

  useEffect(() => {
    if (disableAnimation) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + productsPerPage) % data.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length, productsPerPage, disableAnimation]);

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
        toast.error("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  let visibleProducts = [];

  if (disableAnimation) {
    const startIndex = (currentPage - 1) * productsPerPage;
    visibleProducts = data.slice(startIndex, startIndex + productsPerPage);
  } else {
    visibleProducts = [
      ...data.slice(currentIndex, currentIndex + productsPerPage),
      ...data.slice(
        0,
        Math.max(0, currentIndex + productsPerPage - data.length)
      ),
    ];
  }

  function handleOverview(id) {
    router.push(`/product-overview/${id}`);
  }

  return (
    <section className="bg-white antialiased dark:bg-gray-900 md:pt-4 pt-4">
      <div className="mx-auto max-w-screen-xl sm:px-6 2xl:px-0">
        <div
          className={`mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-500 ${
            disableAnimation ? "" : fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {loading
            ? Array.from({ length: productsPerPage }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : visibleProducts.map((product, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOverview(product.id)}
                  className="rounded-lg border border-gray-200 bg-[#F0EEED] pt-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
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
                  <hr className="border border-gray-200 dark:border-gray-700" />
                  <div className="pt-4 sm:pt-6 w-full bg-white px-4 sm:px-6 pb-6 rounded-b-lg">
                    <a
                      href="#"
                      className="block w-full truncate text-base sm:text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      title={product.name}
                    >
                      {product.name}
                    </a>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        5.0
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        (455)
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                        Rp. {formatPriceBase(product.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {disableAnimation && totalPages > 1 && (
          <Pagination
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
