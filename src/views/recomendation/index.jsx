"use client";
import { MultiSelect } from "@/components";
import { Calculator } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Recomendation = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [budget, setBudget] = useState("");

  const router = useRouter();

  const handleCalculateSimilarity = () => {
    if (!selectedProductId.length) {
      alert("Pilih produk terlebih dahulu.");
      return;
    }

    const productIds = selectedProductId.map((item) =>
      typeof item === "object" ? item.id : item
    );
    const finalBudget = budget.trim() === "" ? "1000000" : budget;
    const queryParams = new URLSearchParams({
      productId: productIds.join(","),
      budget: finalBudget,
      role: "1",
    }).toString();

    router.push(`/recomendation-result?${queryParams}`);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-5">
        <MultiSelect
          label="Pilih Produk"
          selectedCategory={selectedProductId}
          setSelectedCategory={setSelectedProductId}
          data={products}
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Anggaran
        </label>
        <input
          type="number"
          id="budget"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Anggaran"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
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
  );
};

export default Recomendation;
