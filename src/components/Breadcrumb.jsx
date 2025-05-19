"use client";
import Link from "next/link";
import { HouseLine, CaretRight } from "@phosphor-icons/react";

const Breadcrumb = ({
  items = [],
  root = { label: "Dashboard", href: "/dashboard" },
}) => {
  return (
    <nav className="mb-4 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href={root.href}
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HouseLine size={16} className="mr-1" />
            {root.label}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
