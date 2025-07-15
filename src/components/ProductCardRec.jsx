"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice, formatPriceBase } from "@/utils/formatPrice";
import PaginationUser from "./PaginationUser";

const ProductCardRec = ({ data, onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(data.length === 0);

  const productsPerPage = 15;
  const totalPages = Math.ceil(data.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = data.slice(startIndex, startIndex + productsPerPage);

  const toggleSelect = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  useEffect(() => {
    onSelect && onSelect(selectedProducts);
  }, [selectedProducts, onSelect]);

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  const SkeletonCard = () => (
    <div className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-lg animate-pulse">
      <div className="h-[80px] w-full px-3 py-3 bg-gray-200 rounded"></div>
      <hr className="border border-gray-200" />
      <div className="pt-6 w-full bg-white px-6 pb-6 rounded-b-lg">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <section className="bg-white antialiased md:pt-4 px-4 sm:px-6 lg:px-14 mx-auto max-w-full">
      <div className="mx-auto w-full px-0 2xl:px-0">
        <div className="mb-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {isLoading
            ? Array.from({ length: productsPerPage }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : visibleProducts.map((product, idx) => {
                const isSelected = selectedProducts.includes(product.id);
                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-lg flex flex-col"
                  >
                    <div className="h-26 w-full px-4 md:h-52 py-2">
                      <Image
                        className="mx-auto md:h-full h-[80px] object-contain"
                        src={product.imageUrl}
                        alt={product.name}
                        priority={false}
                        width={200}
                        height={200}
                      />
                    </div>
                    <hr className="border border-gray-200" />
                    <div className="pt-3 sm:pt-6 w-full bg-white px-3 sm:px-6 pb-3 rounded-b-lg">
                      <div
                        href="#"
                        className="block w-full truncate text-sm sm:text-base font-semibold leading-tight text-gray-900 hover:underline"
                        title={product.name}
                      >
                        {product.name}
                      </div>
                      <div className="mt-1 sm:mt-2">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                          {product.Benefit?.name ? product.Benefit?.name : `-`}
                        </p>
                        <div className="mt-1 sm:mt-2">
                          <p className="text-xs sm:text-sm font-medium text-gray-900">
                            {product.Category?.name ? product.Category.name : `-`}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-lg sm:text-xl font-extrabold text-gray-900">
                          Rp. {formatPriceBase(product.price) ? formatPriceBase(product.price) : `-`}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleSelect(product.id)}
                        className={`mt-4 w-full rounded-md px-4 py-2 text-sm font-medium ${
                          isSelected
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {isSelected ? "Batal" : "Pilih"}
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>

        {!isLoading && totalPages > 1 && (
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

export default ProductCardRec;
