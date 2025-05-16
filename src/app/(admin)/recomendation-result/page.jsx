// "use client";
// import { RecomendationCard, TableSkeletonLoader } from "@/components";
// import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const ResultPage = () => {
//   const searchParams = useSearchParams();
//   const [results, setResults] = useState([]);
//   const [bundles, setBundles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [dropdownProducts, setDropdownProducts] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
  
//   // State to toggle between result views
//   const [showResults, setShowResults] = useState(true); // Default is showing results

//   const productId = searchParams.get("productId");
//   const budget = searchParams.get("budget");
//   const role = searchParams.get("role");

//   useEffect(() => {
//     const fetchResult = async () => {
//       try {
//         const res = await fetch(
//           `/api/recomendations/count?productId=${productId}&budget=${budget}&role=${role}`
//         );
//         const data = await res.json();
//         setResults(data.recommendedBundle || []);
//         setBundles(data.bundles || []);
//       } catch (err) {
//         console.error("Gagal mengambil data:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     const fetchDropdownProducts = async () => {
//       if (!productId) return;
//       try {
//         const res = await fetch(`/api/products/selected?ids=${productId}`);
//         const data = await res.json();
//         setDropdownProducts(data.data || []);
//       } catch (err) {
//         console.error("Gagal ambil produk dropdown:", err);
//       }
//     };

//     fetchDropdownProducts();

//     if (productId && budget) {
//       fetchResult();
//     }
//   }, [productId, budget, role]);

//   return (
//     <>
//       <nav className="mb-4 flex" aria-label="Breadcrumb">
//         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//           <li className="inline-flex items-center">
//             <a
//               href="/dashboard"
//               className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
//             >
//               <HouseLine size={16} className="mr-1" />
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <div className="flex items-center">
//               <CaretRight size={16} color="#9ca3af" weight="bold" />
//               <a
//                 href="/recomendation"
//                 className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
//               >
//                 Recomendation
//               </a>
//             </div>
//           </li>
//           <li>
//             <div className="flex items-center">
//               <CaretRight size={16} color="#9ca3af" weight="bold" />
//               <a className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
//                 Result
//               </a>
//             </div>
//           </li>
//         </ol>
//       </nav>

//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//         <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
//           Result
//         </h2>

//         <div className="flex justify-end items-center mb-6 gap-4">
//           <button
//             id="dropdownDefaultButton"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             type="button"
//             onClick={() => setShowResults(true)} // Show the results table
//           >
//             Caculation Result
//           </button>
//           <button
//             id="dropdownDefaultButton"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             type="button"
//             onClick={() => setShowResults(false)} // Show the recommendation card
//           >
//             Bundling Recomendation
//           </button>
//         </div>
//       </div>

//       {isLoading ? (
//         <TableSkeletonLoader columns={3} rows={10} />
//       ) : showResults ? (
//         <div>
//           <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
//             <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
//               <div className="flex items-center flex-1 space-x-4 justify-between">
//                 <h1 className="text-xl font-semibold mb-4">
//                   Hasil Rekomendasi
//                 </h1>
//                 <div className="relative pr-2">
//                   <button
//                     id="dropdownDefaultButton"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     type="button"
//                     onClick={() => setShowDropdown((prev) => !prev)}
//                   >
//                     Produk Terpilih
//                   </button>
//                   {showDropdown && (
//                     <div className="z-10 absolute right-2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto max-h-72 overflow-y-auto dark:bg-gray-700">
//                       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                         {dropdownProducts.map((prod) => (
//                           <li key={prod.id}>
//                             <span className="block px-4 py-2">{prod.name}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                     <th scope="col" className="w-[64px] px-4 py-3">
//                       No
//                     </th>
//                     <th scope="col" className="w-[600px] px-4 py-3">
//                       Produk
//                     </th>
//                     <th scope="col" className="text-center px-4 py-3">
//                       Nilai Similarity
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {results.map((item, idx) => (
//                     <tr
//                       key={idx}
//                       className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
//                     >
//                       <td className="px-4 py-3">{idx + 1}</td>
//                       <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         {item.name}
//                       </td>
//                       <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
//                         {item.score}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="mt-3">
//           <RecomendationCard bundles={bundles} />
//         </div>
//       )}
//     </>
//   );
// };

// export default ResultPage;
import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { TableSkeletonLoader } from "@/components";
import ResultClient from "./result"; // Buat file ini

async function fetchData(endpoint, params) {
  const queryParams = new URLSearchParams(params).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}?${queryParams}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

const ResultPage = async ({ searchParams }) => {
  const productId = searchParams.get("productId");
  const budget = searchParams.get("budget");
  const role = searchParams.get("role");

  const [resultsData, dropdownProductsData] = await Promise.allSettled([
    fetchData("recomendations/count", { productId, budget, role }),
    fetchData("products/selected", { ids: productId }),
  ]);

  const results =
    resultsData.status === "fulfilled"
      ? resultsData.value?.recommendedBundle || []
      : [];
  const bundles =
    resultsData.status === "fulfilled" ? resultsData.value?.bundles || [] : [];
  const dropdownProducts =
    dropdownProductsData.status === "fulfilled"
      ? dropdownProductsData.value || []
      : [];

  return (
    <>
      <nav className="mb-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HouseLine size={16} className="mr-1" />
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <a
                href="/recomendation"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                Recomendation
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <a className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
                Result
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <ResultClient
        results={results}
        bundles={bundles}
        dropdownProducts={dropdownProducts}
      />
    </>
  );
};

export default ResultPage;
