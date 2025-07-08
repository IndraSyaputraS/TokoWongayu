"use client";
import { useRouter } from "next/navigation";

const RecomendationCardUser = ({ bundles = [] }) => {
  if (bundles.length === 0) {
    return null;
  }

  console.log(bundles);

  const router = useRouter();

  function handleOverview(id) {
    router.push(`/bundling-overview/${id}`);
  }
  return (
    <div className="w-full mx-auto px-4 lg:px-14">
      <h5 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight text-black">
        Rekomendasi Bundling Produk
      </h5>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {bundles.map((bundleGroup, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <h5 className="mb-2 text-md md:text-xl font-bold tracking-tight text-gray-900">
                Bundling {index + 1}
              </h5>
              <ul className="mb-3 space-y-1 text-gray-700 text-md">
                {bundleGroup.bundle.map((product) => (
                  <li key={product.id}>
                    <span className="font-medium text-sm md:text-md">
                      {product.name}
                    </span>{" "}
                    <br />
                    <span className="text-xs md:text-sm">
                      {product.category} –{" "}
                      {product.price !== null
                        ? `Rp${product.price}`
                        : "Harga tidak tersedia"}{" "}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-600">
                <p>
                  Total Harga:{" "}
                  <span className="font-semibold">Rp{bundleGroup.total}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleOverview(bundleGroup.bundleId)}
                className="mt-4 inline-flex items-center px-3 py-2 text-xs md:text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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

export default RecomendationCardUser;
