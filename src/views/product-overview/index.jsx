"use client";

import { formatPrice } from "@/utils/formatPrice";
import { Monitor, Plus, Star } from "@phosphor-icons/react";
import Image from "next/image";

const PrdouctOverview = ({ product }) => {
  return (
    <>
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  {formatPrice(product.price)}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <Star size={16} color="#fde047" weight="fill" />
                    <Star size={16} color="#fde047" weight="fill" />
                    <Star size={16} color="#fde047" weight="fill" />
                    <Star size={16} color="#fde047" weight="fill" />
                    <Star size={16} color="#fde047" weight="fill" />
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
                with Magic Keyboard or Magic Keyboard with Touch ID.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        
      </div>
    </>
  );
};

export default PrdouctOverview;
