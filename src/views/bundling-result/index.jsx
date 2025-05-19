"use client";

import { TableSkeletonLoader, Pagination, Modal } from "@/components";
import { BookOpenText } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const BundlingResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [bundleDetail, setBundleDetail] = useState([]);
  const [bundlingPack, setBundlingPack] = useState("");
  const [bundling, setBundling] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/recomendations`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch bundling: ${res.status}`);
        }
        const { data } = await res.json();
        setBundling(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(bundling.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBundling = bundling.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleOpenModal = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recomendations/${id}`
      );
      if (!res.ok) throw new Error(`Failed to fetch detail: ${res.status}`);
      const { data } = await res.json();

      setBundlingPack(data);
      setBundleDetail(data.items);
      setOpenModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setBundlingPack("");
    setBundleDetail([]);
  };

  return (
    <>
      {isLoading ? (
        <TableSkeletonLoader columns={7} rows={10} />
      ) : (
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4 justify-between">
              <h5>
                <span className="text-gray-500">Total Bundling: </span>
                <span className="dark:text-white">{bundling?.length}</span>
              </h5>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="min-w-16 px-4 py-3">
                    No
                  </th>
                  <th scope="col" className="min-w-64 px-4 py-3">
                    Unique Code
                  </th>
                  <th scope="col" className="min-w-56 px-4 py-3">
                    Benefit
                  </th>
                  <th scope="col" className="min-w-32 px-4 py-3">
                    Budget
                  </th>
                  <th scope="col" className="min-w-32 px-4 py-3">
                    Total Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Total Score
                  </th>
                  <th scope="col" className="text-center px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedBundling.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3">{bundling.indexOf(item) + 1}</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.signature}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.benefitName}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.budget}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.totalPrice}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.totalScore}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-primary-700 text-white p-2 rounded-full hover:bg-primary-800"
                          onClick={() => handleOpenModal(item.id)}
                        >
                          <a className="text-xs uppercase flex justify-center items-center">
                            Detail
                          </a>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
      {/* Modal Detail */}
      <Modal
        open={openModal}
        onClose={handleOpenModal}
        size="xl"
        placement="center"
        background="gy"
      >
        <Modal.Body>
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
            <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div className="flex items-center flex-1 space-x-4 justify-between">
                <h5>
                  <span className="text-gray-500">Bundling Code: </span>
                  <span className="text-gray-500">
                    {bundlingPack.signature}
                  </span>
                </h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="min-w-16 px-4 py-3">
                      No
                    </th>
                    <th scope="col" className="min-w-96 px-4 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="min-w-32 px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="min-w-32 px-4 py-3">
                      Score
                    </th>
                    <th scope="col" className="min-w-40 px-4 py-3">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bundleDetail.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3">{i + 1}</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.price}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.score}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="button"
              onClick={handleCloseModal}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BundlingResult;
