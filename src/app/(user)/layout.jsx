"use client";

import { Navbar, Sidebar } from "@/components";

const UserLayout = ({ children }) => {
  return (
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />
      <main class="p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
};

export default UserLayout;
