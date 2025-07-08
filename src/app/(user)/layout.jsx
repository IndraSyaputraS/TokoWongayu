"use client";

import { Footer, NavbarMain } from "@/components";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-white">
      <Toaster position="top-right" />
      <NavbarMain />
      <main className="flex-1 pt-16 pb-8">{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
