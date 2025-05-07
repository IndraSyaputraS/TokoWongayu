"use client";
import { Calculator } from "@phosphor-icons/react";
import React, { useState } from "react";

const Recomendation = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [recommendedBundle, setRecommendedBundle] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculateSimilarity = async () => {
    try {
      if (!selectedProductId) {
        alert("Pilih produk terlebih dahulu.");
        return;
      }

      const res = await fetch(
        `/api/recomendations/count?productId=${selectedProductId}`
      );

      if (!res.ok) {
        throw new Error("Gagal mengambil data similarity");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setRecommendedBundle(data.recommendedBundle);
      setIsCalculated(true);
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4 justify-between">
              <div className="w-full lg:w-1/2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Pilih Produk
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-700 dark:border-gray-600"
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                >
                  <option value="">-- Pilih Produk --</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleCalculateSimilarity}
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <Calculator size="24" color="#d9e3f0" className="mr-1" />
                Calculate Similarity
              </button>
            </div>
          </div>
        {isCalculated && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="w-[64px] px-4 py-3">
                    No
                  </th>
                  <th scope="col" className="w-[64px] px-4 py-3">
                    Produk
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Nilai Similarity
                  </th>
                </tr>
              </thead>
              <tbody>
                {recommendedBundle.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recomendation;
