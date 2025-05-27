"use client";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useEffect, useState } from "react";

const BundlingOverview = ({ bundlingId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBundlingById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recomendations/${id}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to fetch bundling data");

      const result = await res.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBundlingById(bundlingId);
  }, [bundlingId]);

  return (
    <>
      <div className="mx-4 lg:mx-14">
        {isLoading ? (
          <div className="h-10 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        ) : (
          <p className="text-3xl sm:text-4xl font-bold truncate">
            {data.signature}
          </p>
        )}
      </div>

      <section className="py-4 bg-white md:py-8 dark:bg-gray-900 antialiased flex justify-center items-center">
        <div className="w-full px-4 mx-4 sm:mx-10 2xl:px-0 grid grid-cols-1 gap-8 md:grid-cols-2">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:grid md:grid-cols-2 md:gap-6 items-center animate-pulse border border-gray-300 rounded p-4"
                  >
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded shadow mb-4 md:mb-0"></div>
                    <div className="w-full md:pl-6">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
                      <hr className="my-6 md:my-8 border-gray-200" />
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))
            : data.items?.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col md:grid md:grid-cols-2 md:gap-6 items-center border border-gray-300 rounded p-4"
                >
                  <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded shadow overflow-hidden mx-auto">
                    <Image
                      src={item.imageUrl || "/images/noimage.png"}
                      alt={item.name}
                      priority={false}
                      width={200}
                      height={200}
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-6 md:text-left w-full">
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h1>
                    <div className="mt-3 sm:items-center sm:gap-4 sm:flex justify-center md:justify-start">
                      <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-white">
                        Benefit:
                      </span>{" "}
                      {item.benefit}
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-white">
                        Category:
                      </span>{" "}
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default BundlingOverview;
