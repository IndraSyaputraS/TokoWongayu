"use client";
import { useRouter } from "next/navigation";
import { UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logouts", { method: "POST" });
    router.push("/login");
  };
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <a href="#" className="flex items-center justify-between mr-4">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap leading-tight dark:text-white">
              Wongayu
            </span>
          </a>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            onClick={handleLogout}
            className="flex mx-3 text-sm bg-white dark:bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <UserCircle size={32} weight="bold" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
