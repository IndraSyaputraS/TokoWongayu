"use client";

const TableSkeletonLoader = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto space-y-4">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4 justify-between">
          <div className="h-6 w-40 bg-gray-300 rounded dark:bg-gray-600 mb-4"></div>
          <div className="pr-2">
            <div className="h-10 w-36 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
      <div role="status" className="animate-pulse">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-24"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {Array.from({ length: columns }).map((_, colIdx) => (
                  <td key={colIdx} className="px-4 py-3">
                    <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <span className="sr-only">Loading table...</span>
      </div>
    </div>
  );
};

export default TableSkeletonLoader;
