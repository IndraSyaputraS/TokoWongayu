"use client";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useEffect, useState } from "react";

const BundlingOverview = ({ bundlingId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savedBundle, setSavedBundle] = useState([]);

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
          <p className="text-2xl lg:text-4xl text-gray-900 font-bold truncate">
            {data.name}
          </p>
        )}
      </div>

      <section className="py-4 bg-white md:py-8 antialiased flex justify-center items-center">
        <div className="w-full px-4 mx-4 sm:mx-10 2xl:px-0 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
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
                  <div className="h-full flex justify-center items-center">
                    <div className="max-w-xs md:max-w-md lg:max-w-lg">
                      <Image
                        src={item.imageUrl || "/images/noimage.png"}
                        alt={item.name}
                        priority={false}
                        width={130}
                        height={130}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:pl-6 md:text-left w-full">
                    <h1 className="text-md md:text-xl mb-2 mt-4 font-semibold text-gray-900">
                      {item.name}
                    </h1>
                    <p className="mb-2 text-gray-500 text-sm">
                      <span className="font-medium text-sm md:text-md text-gray-700">
                        Benefit:
                      </span>{" "}
                      {item.benefit}
                    </p>
                    <p className="mb-2 text-gray-500 text-sm md:text-md">
                      <span className="font-medium ext-sm md:text-md text-gray-700">
                        Category:
                      </span>{" "}
                      {item.category}
                    </p>
                    <hr className="my-3 md:my-8 border-gray-200" />
                    <div className="sm:items-center sm:gap-4 sm:flex justify-center md:justify-start">
                      <p className="text-md md:text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default BundlingOverview;
