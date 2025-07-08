"use client";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Breadcrumb, ProductCardRec, SpeedDial } from "@/components";
const RecomendationUser = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        setResults(Array.isArray(data) ? data : data.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleSelect = useCallback(
    (selectedIds) => {
      const selected = results
        .filter((product) => selectedIds.includes(product.id))
        .map((product) => ({
          id: product.id,
          name: product.name,
        }));

      setSelectedProducts(selected);
    },
    [results]
  );
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-14">
        <a className="text-2xl md:text-4xl text-black font-bold">Pilih Produk</a>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 my-4 items-center">
          <label className="text-sm font-medium text-gray-900 text-left lg:text-right">
            Anggaran
          </label>
          <input
            type="number"
            id="budget"
            value={budget}
            placeholder="0"
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
      </div>

      {/* Product Card */}
      <div>
        <ProductCardRec data={results} onSelect={handleSelect} />
        <SpeedDial selectedProducts={selectedProducts} budget={budget} />
      </div>
    </>
  );
};

export default RecomendationUser;