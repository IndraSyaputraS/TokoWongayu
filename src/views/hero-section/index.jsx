"use client";

import Image from "next/image";

const brands = [
  { src: "/assets/garnier.svg", className: "dark:invert" },
  { src: "/assets/wardah.svg", className: "dark:invert" },
  { src: "/assets/g2g.svg", className: "invert dark:brightness-0" },
  { src: "/assets/purbasari.svg", className: "invert dark:brightness-0" },
  { src: "/assets/scarlet.svg", className: "invert dark:brightness-0" },
  { src: "/assets/hanasui.svg", className: "dark:invert dark:brightness-0" },
];

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#F2F0F1] py-8 antialiased dark:bg-[#547792] md:py-10">
        <div className="mx-auto grid max-w-screen-xl md:grid-cols-12 lg:gap-12 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">
              FIND THE SKINCARE YOU NEED
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              Explore a variety of skincare collections that provide many
              benefits for your care.
            </p>
          </div>
          <div className="flex justify-end md:col-span-5">
            <Image
              className="w-[520px] h-[380px]"
              src="/assets/hero.webp"
              alt="shopping illustration"
              width={2000}
              height={2000}
            />
          </div>
        </div>

        {/* Brand Section */}
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 px-2 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-center"
            >
              <Image
                className={`w-[165px] ${brand.className}`}
                src={brand.src}
                alt="brand logo"
                width={200}
                height={200}
              />
            </a>
          ))}
        </div>
      </section>
      <hr className="border-t border-gray-200 dark:border-gray-700" />
    </>
  );
};

export default HeroSection;
