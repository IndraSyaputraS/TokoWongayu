"use client";

import { ShoppingCart, UserCircle } from "@phosphor-icons/react";

const NavbarMain = () => {
  return (
    <nav className="bg-white dark:bg-[#213448] fixed w-full shadow-md h-20 z-50">
      <div className="w-full px-4 md:px-20 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="/home-page" className="text-2xl font-bold">
                WONGAYU
              </a>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <a
                  href="/home-page"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Home
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="/product-menu"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Produk
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Rekomendasi
                </a>
              </li>
              {/* <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  On Sale
                </a>
              </li> */}
              <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Brand
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:space-x-2">
            {/* <button
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <ShoppingCart size={20} />
            </button> */}
            <button
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              title="Profile"
              className="inline-flex trancate items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <UserCircle size={32} weight="bold"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
