"use client";
import { useRouter } from "next/navigation";
import { List, UserCircle } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ setSidebarOpen }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await fetch("/api/logouts", { method: "POST" });
    router.push("/login");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <List size={24} />
          </button>

          <a href="#" className="flex items-center justify-between mr-4">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap leading-tight dark:text-white">
              Wongayu
            </span>
          </a>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <UserCircle size={32} />
          </button>

          {dropdownOpen && (
            <div
              id="dropdown"
              className="absolute right-0 z-50 w-40 my-1 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <ul className="py-1 text-gray-500 dark:text-gray-400" role="none">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
