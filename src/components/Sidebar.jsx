"use client";

import {
  BagSimple,
  Calculator,
  ChartBar,
  CirclesFour,
  HardDrive,
  Note,
  Package,
  Stack,
  Tag,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: <ChartBar size={24} weight="fill" />,
      label: "Dashboard",
    },
    { href: "/brand", icon: <Tag size={24} weight="fill" />, label: "Brand" },
    {
      href: "/category",
      icon: <CirclesFour size={24} weight="fill" />,
      label: "Category",
    },
    {
      href: "/benefit",
      icon: <Note size={24} weight="fill" />,
      label: "Benefit",
    },
    {
      href: "/product",
      icon: <Package size={24} weight="fill" />,
      label: "Product",
    },
    {
      href: "/calculation-data",
      icon: <HardDrive size={24} weight="fill" />,
      label: "History Transaction",
    },
    {
      href: "/bundle-category",
      icon: <Stack size={24} weight="fill" />,
      label: "Bundle Category",
    },
    {
      href: "/recomendation",
      icon: <Calculator size={24} weight="fill" />,
      label: "Recomendation",
    },
    {
      href: "/bundling-result",
      icon: <BagSimple size={24} weight="fill" />,
      label: "Bundling Result",
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full pt-14 transition-transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)} // close sidebar on mobile
                  className={`flex items-center p-2 text-base font-medium rounded-lg group transition-colors
                    ${
                      isActive
                        ? "text-white bg-blue-600 dark:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    }`}
                >
                  <div
                    className={`${
                      isActive
                        ? "text-white bg-blue-600 dark:bg-gray-700"
                        : "text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
