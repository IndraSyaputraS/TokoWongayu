"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const SpeedDial = ({ selectedProducts = [], budget }) => {
  const router = useRouter();
  const productIds = selectedProducts.map((p) => p.id);

  const handleClick = async () => {
    if (selectedProducts.length === 0) return;

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
        console.error("Response error:", result);
        throw new Error("Gagal mengirim data rekomendasi.");
      }
      const recommendationData = result.bundles ? result.bundles[0].bundle : [];
      console.log("Rekomendasi bundle pertama:", recommendationData);
      // Simpan hasil rekomendasi ke localStorage
      if (result.bundles) {
        localStorage.setItem(
          "recommendation_bundle",
          JSON.stringify(result.bundles)
        );
      } else {
        console.error("Tidak ada data bundles yang diterima");
      }

      router.push("/recomendation-page/result");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat memproses rekomendasi.");
    }
  };
  return (
    <div className="fixed bottom-6 end-6 group z-50">
      <button
        type="button"
        onClick={handleClick}
        className="relative flex items-center bg-blue-700 text-white rounded-full p-3 hover:bg-blue-800 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">
          Dapatkan Rekomendasi
        </span>
        <div className="text-white rounded-full w-8 h-8 flex items-center justify-center">
          <ArrowRight size={24} weight="bold" />
        </div>

        {/* Badge jumlah */}
        {selectedProducts.length > 0 && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {selectedProducts.length}
          </div>
        )}
      </button>

      {/* Tooltip daftar nama produk saat hover */}
      {selectedProducts.length > 0 && (
        <div className="absolute bottom-16 end-0 hidden group-hover:flex flex-col items-end bg-blue-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg p-2 max-w-xs">
          {selectedProducts.map((product, index) => (
            <span
              key={index}
              className="text-sm text-white dark:text-gray-200 truncate"
              title={product.name}
            >
              {product.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeedDial;
