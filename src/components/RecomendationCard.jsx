"use client";

const RecomendationCard = ({ bundles = [] }) => {
  if (bundles.length === 0) {
    return null;
  }

  return (
    <div className="w-full mx-auto px-4 py-6">
      <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bundling Rekomendasi Produk
      </h5>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bundles.map((bundleGroup, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bundling {index + 1}
              </h5>
              <ul className="mb-3 space-y-1 text-gray-900 dark:text-gray-300 text-md">
                {bundleGroup.bundle.map((product) => (
                  <li key={product.id}>
                    <span className="font-medium">{product.name}</span> <br />
                    <span className="text-xs">
                      {product.benefitName} -{product.category} –{" "}
                      {product.price !== null
                        ? `Rp${product.price}`
                        : "Harga tidak tersedia"}{" "}
                      – Similarity:{" "}
                      <span className="font-semibold">{product.score}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-800 dark:text-gray-400">
                <p>
                  Total Harga:{" "}
                  <span className="font-semibold">
                    Rp{bundleGroup.totalPrice}
                  </span>
                </p>
                <p>
                  Total Score:{" "}
                  <span className="font-semibold">
                    {bundleGroup.totalScore.toFixed(3)}
                  </span>
                </p>
                <p>
                  Rata-rata Similarity:{" "}
                  <span className="font-semibold">
                    {bundleGroup.avgScore.toFixed(3)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendationCard;
