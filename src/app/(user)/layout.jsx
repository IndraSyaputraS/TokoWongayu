"use client";

import { Footer, NavbarMain } from "@/components";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-white dark:bg-[#213448]">
      <Toaster position="top-right" />
      <NavbarMain />
      <main className="flex-1 pt-20 pb-8">{children}</main>
      <Footer/>
    </div>
  );
};

export default UserLayout;
