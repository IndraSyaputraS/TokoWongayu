"use client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const PaginationUser = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <li key={i}>
            <button
              onClick={() => goToPage(i)}
              aria-current={currentPage === i ? "page" : undefined}
              className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                currentPage === i
                  ? "text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {i}
            </button>
          </li>
        );
      } else if (
        (i === currentPage - 2 && i > 1) ||
        (i === currentPage + 2 && i < totalPages)
      ) {
        pages.push(
          <li key={`dots-${i}`}>
            <span className="flex items-center justify-center px-3 h-8 text-gray-500">
              ...
            </span>
          </li>
        );
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex justify-center items-center mt-5 mb-5"
      aria-label="Page navigation"
    >
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <CaretLeft size={16} />
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <CaretRight size={16} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationUser;
