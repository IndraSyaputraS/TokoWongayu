"use client";

import { Footer, NavbarMain } from "@/components";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
  return (
    <div className="antialiased bg-white dark:bg-[#213448]">
      <Toaster position="top-right" />
      <NavbarMain />
      <main className="pt-20 pb-8">{children}</main>
      <Footer/>
    </div>
  );
};

export default UserLayout;
