// "use client";
// import { TableSkeletonLoader } from "@/components";
// import { useEffect, useState } from "react";

// const TryResultClient = ({ productId }) => {
//   const [similarityData, setSimilarityData] = useState([]);
//   const [selectedProductIds, setSelectedProductIds] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const fetchSimilarity = async () => {
//       try {
//         const res = await fetch(`/api/try?productId=${productId}`, {
//           cache: "no-store",
//         });
//         const data = await res.json();

//         setSimilarityData(data.results || []);
//         setSelectedProductIds(data.selectedProductIds || []);
//       } catch (err) {
//         console.error("Failed to fetch similarity:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSimilarity();
//   }, [productId]);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         setAllProducts(data.data || []);
//       } catch (err) {
//         console.error("Failed to fetch all products:", err);
//       }
//     };

//     fetchAllProducts();
//   }, []);

//   useEffect(() => {
//     if (allProducts.length > 0 && selectedProductIds.length > 0) {
//       const idSet = new Set(selectedProductIds.map((id) => id.toString()));
//       const filtered = allProducts.filter((prod) =>
//         idSet.has(prod.id.toString())
//       );
//       setSelectedProducts(filtered);
//     }
//   }, [allProducts, selectedProductIds]);

//   return (
//     <>
//       <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
//           Result
//         </h2>

//         <div className="flex justify-end items-center mb-6 gap-4">
//           <button
//             disabled={isLoading}
//             className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
//               isLoading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={() => setShowDropdown((prev) => !prev)}
//           >
//             Produk Dipilih
//           </button>

//           {showDropdown && (
//             <div className="z-10 absolute right-2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto max-h-72 overflow-y-auto dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {isLoading ? (
//                   <li className="px-4 py-2 italic text-gray-400">Loading...</li>
//                 ) : selectedProducts.length === 0 ? (
//                   <li className="px-4 py-2 italic text-gray-400">
//                     Tidak ada produk terpilih
//                   </li>
//                 ) : (
//                   selectedProducts.map((prod) => (
//                     <li
//                       key={prod.id}
//                       className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-default"
//                     >
//                       {prod.name}
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {isLoading ? (
//         <TableSkeletonLoader columns={3} rows={10} />
//       ) : (
//         <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
//           <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
//             <h1 className="text-xl font-semibold mb-4">Hasil Similarity</h1>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th className="px-4 py-3">No</th>
//                   <th className="px-4 py-3">Produk Mirip</th>
//                   <th className="px-4 py-3">Kategori</th>
//                   <th className="px-4 py-3">Manfaat</th>
//                   <th className="px-4 py-3">Price</th>
//                   <th className="px-4 py-3 text-center">Similarity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {similarityData.length === 0 ? (
//                   <tr>
//                     <td colSpan={6} className="text-center py-4">
//                       Tidak ada hasil similarity
//                     </td>
//                   </tr>
//                 ) : (
//                   similarityData.map((item, idx) => (
//                     <tr
//                       key={idx}
//                       className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
//                     >
//                       <td className="px-4 py-2">{idx + 1}</td>
//                       <td className="px-4 py-2">{item.toProductName}</td>
//                       <td className="px-4 py-2">{item.category}</td>
//                       <td className="px-4 py-2">{item.benefit}</td>
//                       <td className="px-4 py-2">{item.price}</td>
//                       <td className="px-4 py-2 text-center">{item.similarityScore}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TryResultClient;

"use client";
import { TableSkeletonLoader } from "@/components";
import { useEffect, useState } from "react";

const TryResultClient = ({ productId, budget }) => {
  const [similarityMatrix, setSimilarityMatrix] = useState([]);
  const [productLabels, setProductLabels] = useState([]); // e.g., P1, P2, etc.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarity = async () => {
      try {
        const res = await fetch(`/api/try?productId=${productId}`, {
          cache: "no-store",
        });
        const data = await res.json();

        // Assume: data.matrix = 2D array of similarity, data.labels = ['P1', 'P2', ...]
        setSimilarityMatrix(data.matrix || []);
        setProductLabels(data.labels || []);
      } catch (err) {
        console.error("Failed to fetch similarity:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimilarity();
  }, [productId]);

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-4">
        Tabel Similarity Produk
      </h2>

      {isLoading ? (
        <TableSkeletonLoader columns={10} rows={10} />
      ) : (
        <div className="overflow-auto rounded-lg shadow bg-white dark:bg-gray-800">
          <table className="min-w-full text-sm text-center text-gray-700 dark:text-gray-300 border-collapse">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border p-2 bg-white dark:bg-gray-800">Produk</th>
                {productLabels.map((label, idx) => (
                  <th key={idx} className="border p-2">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {similarityMatrix.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <th className="border p-2 bg-gray-100 dark:bg-gray-700">{productLabels[rowIndex]}</th>
                  {row.map((value, colIndex) => (
                    <td key={colIndex} className="border p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TryResultClient;
