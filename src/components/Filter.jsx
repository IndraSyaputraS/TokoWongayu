"use client";
const Filter = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <label
            htmlFor="checkbox-1"
            className="text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox
          </label>
          <input
            id="checkbox-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label
            htmlFor="checkbox-2"
            className="text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox
          </label>
          <input
            id="checkbox-2"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
