"use client";

import { usePathname } from "next/navigation";
import { ShoppingCart, UserCircle } from "@phosphor-icons/react";

const navLinks = [
  { name: "Home", href: "/home-page" },
  { name: "Produk", href: "/product-menu" },
  { name: "Rekomendasi", href: "/recomendation-page" },
  { name: "Brand", href: "/brand" },
];

const NavbarMain = () => {
  const pathname = usePathname();

  const linkClass = (href) =>
    `flex text-sm font-medium ${
      pathname === href
        ? "text-primary-700 dark:text-primary-500"
        : "text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
    }`;

  return (
    <nav className="bg-white dark:bg-[#213448] fixed w-full shadow-md h-20 z-50">
      <div className="w-full px-4 md:px-14 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="/home-page" className="text-2xl font-bold">
                WONGAYU
              </a>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass(link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center lg:space-x-2">
            <button
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              title="Profile"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <UserCircle size={32} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
