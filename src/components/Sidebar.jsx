// "use client";
// import { ChartBar, CirclesFour, HardDrive, Note, Package, Tag } from "@phosphor-icons/react";
// import { ArchiveAdd, Box, Category2, Chart2, Tag2 } from "iconsax-react";
// import Link from "next/link";
// const Sidebar = () => {
//   return (
//     <aside
//       className="fixed top-0 left-0 z-40 w-64 h-full pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
//       aria-label="Sidenav"
//       id="drawer-navigation"
//     >
//       <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
//         <ul className="space-y-2">
//           <li>
//             <Link
//               href="/dashboard"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <ChartBar size={24} weight="fill" className="text-gray-500"/>
//               <span className="ml-3">Overview</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/brand"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <Tag size={24} weight="fill" className="text-gray-500"/>
//               <span className="ml-3">Brand</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/category"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <CirclesFour size={24} color="#6b7280" weight="fill" />
//               <span className="ml-3">Category</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/benefit"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <Note size={24} weight="fill" className="text-gray-500"/>
//               <span className="ml-3">Benefit</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/product"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <Package size={24} weight="fill" className="text-gray-500" />
//               <span className="ml-3">Product</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/calculation-data"
//               className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//             >
//               <HardDrive size={24} weight="fill" className="text-gray-500" />
//               <span className="ml-3">Calculation Data</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import {
  ChartBar,
  CirclesFour,
  HardDrive,
  Note,
  Package,
  Tag,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: <ChartBar size={24} weight="fill" className="text-gray-500" />,
      label: "Overview",
    },
    {
      href: "/brand",
      icon: <Tag size={24} weight="fill" className="text-gray-500" />,
      label: "Brand",
    },
    {
      href: "/category",
      icon: <CirclesFour size={24} weight="fill" className="text-gray-500" />,
      label: "Category",
    },
    {
      href: "/benefit",
      icon: <Note size={24} weight="fill" className="text-gray-500" />,
      label: "Benefit",
    },
    {
      href: "/product",
      icon: <Package size={24} weight="fill" className="text-gray-500" />,
      label: "Product",
    },
    {
      href: "/calculation-data",
      icon: <HardDrive size={24} weight="fill" className="text-gray-500" />,
      label: "Calculation Data",
    },
  ];

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-full pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
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
                  className={`flex items-center p-2 text-base font-medium rounded-lg group transition-colors
                    ${
                      isActive
                        ? "text-white bg-blue-600 dark:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    }`}
                >
                  {item.icon}
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
