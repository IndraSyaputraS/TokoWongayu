"use client";

import { Navbar, Sidebar } from "@/components";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const UserLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="px-8 md:ml-64 min-h-svh pt-20 pb-8">{children}</main>
    </div>
  );
};

export default UserLayout;
