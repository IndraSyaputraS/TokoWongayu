"use client";
import { useEffect, useRef, useState } from "react";

export default function MultiSelect({
  label = "Category",
  selectedCategory,
  setSelectedCategory,
  data,
  error, // terima error dari parent
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (id) => {
    const updated = selectedCategory.includes(id)
      ? selectedCategory.filter((item) => item !== id)
      : [...selectedCategory, id];
    setSelectedCategory(updated);
  };

  const getLabel = (id) => {
    const item = data.find((i) => i.id === id);
    return item ? item.name : "";
  };

  const inputWrapperClass = !error
    ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-h-[2.5rem] p-2 text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full min-h-[2.5rem] p-2 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

  return (
    <div className="relative w-full" ref={selectRef}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <div className={inputWrapperClass} onClick={toggleDropdown}>
        {selectedCategory.length === 0 && (
          <span className="text-gray-400 dark:text-gray-500">
            Select categories
          </span>
        )}
        <div className="flex flex-wrap gap-2">
          {selectedCategory.map((id) => (
            <span
              key={id}
              className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
            >
              {getLabel(id)}
            </span>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600 max-h-60 overflow-y-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 ${
                selectedCategory.includes(item.id)
                  ? "bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300"
                  : "text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => handleSelect(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
