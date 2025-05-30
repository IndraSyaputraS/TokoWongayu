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
      <footer className="px-4 py-4 bg-[#F0F0F0] sm:p-6">
        <div className="w-full">
          <div className="md:flex md:justify-between">
            <div className="mb-2 md:mb-0 max-w-md">
              <a className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                  WONGAYU
                </span>
              </a>
              <div>
                <a className="text-sm text-gray-700">
                  We have a wide range of skincare that suits your skin and that
                  you can use comfortably.
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/3WmLBjXEHjWtf68P7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-blue-500 text-gray-700"
                >
                  Jl. Untung Suropati I No.10, Pagelaran, Kecamatan Pagelaran,
                  Kabupaten Malang, Jawa Timur
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2022{" "}
              <a href="#" className="hover:underline">
                Wongayu™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FacebookLogo size={20} weight="bold" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <InstagramLogo size={20} weight="bold" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <XLogo size={20} weight="bold" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
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
