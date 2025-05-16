"use client";
import { RecomendationCard, TableSkeletonLoader } from "@/components";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ResultClient = ({ results: initialResults, bundles: initialBundles, dropdownProducts: initialDropdownProducts }) => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState(initialResults);
  const [bundles, setBundles] = useState(initialBundles);
  const [isLoading, setIsLoading] = useState(false); // Data sudah di-fetch di server
  const [dropdownProducts, setDropdownProducts] = useState(initialDropdownProducts);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResultsView, setShowResultsView] = useState(true);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
          Result
        </h2>

        <div className="flex justify-end items-center mb-6 gap-4">
          <button
            id="dropdownDefaultButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setShowResultsView(true)}
          >
            Caculation Result
          </button>
          <button
            id="dropdownDefaultButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setShowResultsView(false)}
          >
            Bundling Recomendation
          </button>
        </div>
      </div>

      {isLoading ? (
        <TableSkeletonLoader columns={3} rows={10} />
      ) : showResultsView ? (
        <div>
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
            <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div className="flex items-center flex-1 space-x-4 justify-between">
                <h1 className="text-xl font-semibold mb-4">
                  Hasil Rekomendasi
                </h1>
                <div className="relative pr-2">
                  <button
                    id="dropdownDefaultButton"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    Produk Terpilih
                  </button>
                  {showDropdown && (
                    <div className="z-10 absolute right-2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto max-h-72 overflow-y-auto dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {dropdownProducts.map((prod) => (
                          <li key={prod.id}>
                            <span className="block px-4 py-2">{prod.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="w-[64px] px-4 py-3">
                      No
                    </th>
                    <th scope="col" className="w-[600px] px-4 py-3">
                      Produk
                    </th>
                    <th scope="col" className="text-center px-4 py-3">
                      Nilai Similarity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3">{idx + 1}</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        {item.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <RecomendationCard bundles={bundles} />
        </div>
      )}
    </>
  );
};

export default ResultClient;