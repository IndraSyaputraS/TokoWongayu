"use client";

import { useEffect, useState } from "react";
import {
  BagSimple,
  CirclesFour,
  HardDrive,
  HouseLine,
  Note,
  Package,
  Stack,
  Tag,
} from "@phosphor-icons/react";
import { Error } from "@/components";

async function fetchData(endpoint) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

const SkeletonCard = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse">
    <div className="flex items-center gap-2 mb-2 border-b border-gray-300 dark:border-gray-600 pb-2">
      <div className="w-6 h-6 bg-gray-300 rounded dark:bg-gray-600"></div>
      <div className="h-5 bg-gray-300 rounded w-24 dark:bg-gray-600"></div>
    </div>
    <div className="grid grid-cols-2 font-normal text-gray-700 dark:text-gray-400">
      <div className="h-4 bg-gray-300 rounded w-20 dark:bg-gray-600"></div>
      <div className="h-4 bg-gray-300 rounded w-6 justify-self-end dark:bg-gray-600"></div>
    </div>
  </div>
);

const Dashboard = () => {
  const [brands, setBrands] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [calcs, setCalcs] = useState([]);
  const [bundCats, setBundCats] = useState([]);
  const [bundRes, setBundRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [
          brand,
          category,
          benefit,
          product,
          calculationData,
          bundleCategorie,
          BundlingResult,
        ] = await Promise.all([
          fetchData("brands"),
          fetchData("categories"),
          fetchData("benefits"),
          fetchData("products"),
          fetchData("calculation-data"),
          fetchData("bundle-categories"),
          fetchData("recomendations"),
        ]);
        setBrands(brand);
        setBenefits(benefit);
        setCategories(category);
        setProducts(product);
        setCalcs(calculationData);
        setBundCats(bundleCategorie);
        setBundRes(BundlingResult);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const stats = [
    { label: "Brand", icon: Tag, total: brands.length },
    { label: "Category", icon: CirclesFour, total: categories.length },
    { label: "Benefit", icon: Note, total: benefits.length },
    { label: "Product", icon: Package, total: products.length },
    { label: "Calculation Data", icon: HardDrive, total: calcs.length },
    { label: "Bundle Category", icon: Stack, total: bundCats.length },
    { label: "Bundling Result", icon: BagSimple, total: bundRes.length },
  ];

  return (
    <>
      {isError ? (
        <Error />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 7 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-300 dark:border-gray-600 pb-2">
                    <stat.icon
                      size={24}
                      weight="fill"
                      className="text-gray-500"
                    />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {stat.label}
                    </h5>
                  </div>
                  <p className="grid grid-cols-2 font-normal text-gray-700 dark:text-gray-400">
                    Total Data
                    <span className="flex justify-end items-end">
                      {stat.total}
                    </span>
                  </p>
                </div>
              ))}
        </div>
      )}
    </>
  );
};

export default Dashboard;
