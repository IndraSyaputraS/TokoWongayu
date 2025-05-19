"use client";
import { formatPrice } from "@/utils/formatPrice";
import { Star } from "@phosphor-icons/react";
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
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="h-10 mx-14 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        ) : (
          <p className="text-4xl font-bold mx-14">{data.signature}</p>
        )}
      </div>

      <section className="py-4 bg-white md:py-8 dark:bg-gray-900 antialiased flex justify-center items-center">
        <div className="w-full px-4 mx-10 2xl:px-0 grid grid-cols-2 gap-10">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-8 items-center animate-pulse"
                  >
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
                      <div className="w-[200px] h-[200px] bg-gray-200 rounded shadow"></div>
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                      <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                      <hr className="my-6 md:my-8 border-gray-200" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                    </div>
                  </div>
                ))
            : data.items?.map((item) => (
                <div
                  key={item.productId}
                  className="lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-8 items-center"
                >
                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
                    <Image
                      src={item.imageUrl || "/images/noimage.png"}
                      alt={item.name}
                      priority={false}
                      width={200}
                      height={200}
                      className="rounded shadow"
                    />
                  </div>
                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                      {item.name}
                    </h1>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
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
