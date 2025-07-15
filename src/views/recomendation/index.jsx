"use client";
import { MultiSelect } from "@/components";
import { Calculator } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function fetchData(endpoint) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

const SkeletonInput = () => (
  <div>
    <div className="animate-pulse mb-5">
      <div className="h-5 bg-gray-300 rounded w-32 mb-2 dark:bg-gray-700"></div>
      <div className="h-10 bg-gray-200 rounded w-full dark:bg-gray-700"></div>
    </div>
    <div className="animate-pulse mb-5">
      <div className="h-5 bg-gray-300 rounded w-32 mb-2 dark:bg-gray-700"></div>
      <div className="h-10 bg-gray-200 rounded w-full dark:bg-gray-700"></div>
    </div>
  </div>
);

const Recomendation = () => {
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [budget, setBudget] = useState("");
  const [products, setProducts] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [product, recomendation] = await Promise.all([
          fetchData("products"),
          fetchData("recomendations"),
        ]);
        setProducts(product);
        setRecomendations(recomendation);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

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
    }).toString();

    router.push(`/recomendation-result?${queryParams}`);
  };

  return (
    <div className="max-w-xl mx-auto">
      {isLoading ? (
        <>
          <SkeletonInput />
        </>
      ) : (
        <>
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
        </>
      )}
      <div className="flex justify-center">
        <button
          onClick={handleCalculateSimilarity}
          type="button"
          disabled={isLoading}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Calculator size="24" color="#d9e3f0" className="mr-1" />
          Calculate Similarity
        </button>
      </div>
    </div>
  );
};

export default Recomendation;
