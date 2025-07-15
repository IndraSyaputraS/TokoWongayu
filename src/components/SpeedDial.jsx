"use client";

import { ArrowRight, Spinner } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SpeedDial = ({ selectedProducts = [], budget }) => {
  const router = useRouter();
  const productIds = selectedProducts.map((p) => p.id);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const handleClick = async () => {
    if (selectedProducts.length === 0) {
      toast.error("Pilih minimal satu produk untuk mendapatkan rekomendasi.");
      return;
    }

    setIsLoading(true);
    setErrorMessage({});

    try {
      const res = await fetch("/api/recomendations/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productIds: productIds,
          budget: Number(budget),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          setErrorMessage(result.errors);
          Object.entries(result.errors).forEach(([field, msg]) => {
            toast.error(`${msg}`);
          });
        } else if (result.message) {
          toast.error(result.message);
        } else {
          toast.error("Gagal memproses data.");
        }
        return;
      }

      if (result.bundles) {
        localStorage.setItem(
          "recommendation_bundle",
          JSON.stringify(result.bundles)
        );
        router.push("/recomendation-page/result");
      } else {
        toast.error("Tidak ada data bundles yang diterima.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan saat memproses rekomendasi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center">
          <Spinner size={52} color="#ffffff" className="animate-spin" />
        </div>
      )}
      <div className="fixed bottom-6 end-6 group z-50">
        <button
          type="button"
          onClick={handleClick}
          className="relative flex items-center bg-blue-700 text-white rounded-full p-3 hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">
            Dapatkan Rekomendasi
          </span>
          <div className="text-white rounded-full w-8 h-8 flex items-center justify-center">
            <ArrowRight size={24} weight="bold" />
          </div>

          {selectedProducts.length > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
              {selectedProducts.length}
            </div>
          )}
        </button>

        {selectedProducts.length > 0 && (
          <div className="absolute bottom-16 end-0 hidden group-hover:flex flex-col items-end bg-blue-800 border border-gray-200 rounded-md shadow-lg p-2 max-w-xs">
            {selectedProducts.map((product, index) => (
              <span
                key={index}
                className="text-sm text-white truncate"
                title={product.name}
              >
                {product.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SpeedDial;
