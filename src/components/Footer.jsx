"use client";

import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  XLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      {/* <hr className="border-t border-gray-200 dark:border-gray-700" /> */}
      <footer className="px-4 py-4 bg-[#F0F0F0] sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 max-w-md">
              <a className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  WONGAYU
                </span>
              </a>
              <a className="text-sm ">
                We have a wide range of skincare that suits your skin and that
                you can use comfortably.
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="#" className="hover:underline">
                Wongayu™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FacebookLogo size={20} weight="bold" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <XLogo size={20} weight="bold" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <TiktokLogo size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
