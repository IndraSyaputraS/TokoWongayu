"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const renderSkeleton = () => {
  return (
    <div className="w-full mx-auto px-6 py-6 max-w-7xl">
      <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Bundling Rekomendasi Produk
      </h3>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse"
          >
            <div className="mb-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

            <div className="space-y-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"
                ></div>
              ))}
            </div>

            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>

            <div className="mt-4 h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BundlingRecCard = () => {
  const [bundlings, setBundlings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const router = useRouter();
  const visibleCount = 4;

  useEffect(() => {
    async function fetchBundlings() {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/recomendations`
        );
        if (!res.ok) throw new Error("Failed to fetch bundlings");
        const data = await res.json();
        setBundlings(data.data || []);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchBundlings();
  }, []);

  useEffect(() => {
    if (bundlings.length <= visibleCount) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + visibleCount) % bundlings.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [bundlings.length]);

  function handleOverview(id) {
    router.push(`/bundling-overview/${id}`);
  }

  if (loading) return renderSkeleton();
  if (bundlings.length === 0)
    return <p className="text-center py-8">No bundlings available.</p>;

  const visibleBundles = [
    ...bundlings.slice(currentIndex, currentIndex + visibleCount),
    ...bundlings.slice(
      0,
      Math.max(0, currentIndex + visibleCount - bundlings.length)
    ),
  ];

  return (
    <div className="w-full mx-auto px-6 py-6 max-w-7xl">
      <div
        className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {visibleBundles.map((bundle, index) => (
          <div
            key={bundle.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bundling
              </h5>
              <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {bundle.benefitName}
              </h5>

              <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300 text-md max-h-40 overflow-auto">
                {(bundle.items || []).map((product) => (
                  <li key={product.productId} className="truncate">
                    <span className="font-medium">{product.name}</span> <br />
                    <span className="text-xs">
                      {product.category || "Kategori tidak tersedia"} –{" "}
                      {product.price !== null && product.price !== undefined
                        ? `Rp${product.price.toLocaleString("id-ID")}`
                        : "Harga tidak tersedia"}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Total Harga:{" "}
                  <span className="font-semibold">
                    Rp{(bundle.totalPrice || 0).toLocaleString("id-ID")}
                  </span>
                </p>
                <p>
                  Tujuan: <span className="italic">{bundle.benefitName}</span>
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleOverview(bundle.id)}
                className="mt-4 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundlingRecCard;
