"use client";
import { formatPrice } from "@/utils/formatPrice";
import { Star } from "@phosphor-icons/react";
import Image from "next/image";

const BundlingOverview = ({ data }) => {
  const items = data?.items || [];

  return (
    <>
      <section className="py-4 bg-white md:py-8 dark:bg-gray-900 antialiased flex justify-center items-center">
        <div className="w-full px-4 mx-10 2xl:px-0 grid grid-cols-2 gap-10">
          {items.map((item) => (
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
                  <span className="font-medium text-gray-700 dark:text-white">Benefit:</span>{" "}
                  {item.benefit}
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-white">Category:</span>{" "}
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
