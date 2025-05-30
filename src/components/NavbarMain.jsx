"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart, UserCircle, List, X } from "@phosphor-icons/react";

const navLinks = [
  { name: "Home", href: "/home-page" },
  { name: "Produk", href: "/product-menu" },
  { name: "Rekomendasi", href: "/recomendation-page" },
];

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `flex text-sm font-medium ${
      pathname === href
        ? "text-primary-700"
        : "text-gray-900 hover:text-primary-700"
    }`;

  return (
    <nav className="bg-white fixed w-full shadow-md h-20 z-50">
      <div className="w-full px-4 md:px-14 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/home-page" className="text-2xl text-black font-bold">
              WONGAYU
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass(link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-900"
            >
              {menuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-20 left-0 right-0 w-full flex flex-col gap-4 bg-white px-6 py-4 shadow-md z-40 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass(link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
