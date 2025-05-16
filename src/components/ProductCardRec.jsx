"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import Pagination from "./Pagination";

const ProductCardRec = ({ data, onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  return (
    <>
      <section className="bg-white antialiased dark:bg-gray-900 md:pt-4 mx-24">
        <div className="mx-auto w-full px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-3 md:mb-8 lg:grid-cols-3 xl:grid-cols-5">
            {visibleProducts.map((product, idx) => {
              const isSelected = selectedProducts.includes(product.id);
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 bg-[#F0EEED] shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full px-3 py-3">
                    <Image
                      className="mx-auto h-full"
                      src={product.imageUrl}
                      alt={product.name}
                      priority={false}
                      width={200}
                      height={200}
                    />
                  </div>
                  <hr className="border border-gray-200 dark:border-gray-700" />
                  <div className="pt-6 w-full bg-white px-6 pb-6 rounded-b-lg">
                    <div
                      className="block w-full truncate text-lg font-semibold leading-tight text-gray-900 dark:text-white"
                      title={product.name}
                    >
                      {product.name}
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {product.Benefit?.name}
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.Category?.name}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-4">
                      <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                        {formatPrice(product.price)}
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

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCardRec;
