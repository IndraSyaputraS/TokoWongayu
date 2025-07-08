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
            className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-primary-600"
          >
            <HouseLine className="w-3 h-3 md:w-5 md:h-5 mr-1 mb-[2px]" />
            {root.label}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <CaretRight color="#9ca3af" weight="bold" className="w-3 h-3 md:w-5 md:h-5" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="ms-1 text-xs font-medium text-gray-700 hover:text-primary-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="ms-1 text-xs font-medium text-gray-700"
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
