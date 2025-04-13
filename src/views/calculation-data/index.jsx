"use client";
import { Pagination, Modal } from "@/components";
import {
  CloudArrowUp,
  FileArrowDown,
  PencilLine,
  Plus,
  Spinner,
  Trash,
} from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const CalculationData = ({ datas }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isImporting, setIsImporting] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(datas.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCalcs = datas.slice(startIndex, startIndex + itemsPerPage);

  const router = useRouter();
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleFileUpload = async (e) => {
    e.preventDefault(); // penting!
    if (!selectedFile) {
      toast.error("No file selected.");
      return;
    }

    setIsImporting(true); // start loading

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("/api/calculation-data", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Data imported successfully");
        setSelectedFile(null);
        handleCloseModal();
        router.refresh();
      } else {
        toast.error("Failed to import data.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Error importing file.");
    } finally {
      setIsImporting(false); // stop loading
    }
  };
  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Calculation Data: </span>
            <span className="dark:text-white">{datas?.length}</span>
          </h5>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <Plus size="24" color="#d9e3f0" />
            Add Calculation Data
          </button>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <button
            type="button"
            onClick={handleOpenModal}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <FileArrowDown size="24" />
            Import
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        size="xl"
        title="Create Product"
      >
        <Modal.Body>
          <form id="import" onSubmit={handleFileUpload}>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudArrowUp size={24} />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Excel (.xlsx)
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".xlsx, .xls"
                  className="hidden"
                  id="dropzone-file"
                />
              </label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="submit"
            form="import"
            disabled={isImporting}
            className={`text-white inline-flex items-center ${
              isImporting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center`}
          >
            {isImporting ? (
              <>
                <Spinner size={16} />
                Importing...
              </>
            ) : (
              <>
                <FileArrowDown size="20" className="mr-2" />
                Import
              </>
            )}
          </button>
        </Modal.Footer>
      </Modal>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-[20px] px-4 py-3">
                No
              </th>
              <th scope="col" className="w-[20px] px-4 py-3">
                Transaction
              </th>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="text-center px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedCalcs.map((calc, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3">{datas.indexOf(calc) + 1}</td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {calc.transaction}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {calc.Product?.name}
                </td>
                <td className="px-3 py-2">
                  <div className="flex justify-center gap-2">
                    <button
                      className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                      //   onClick={() => handleEdit(brand.id)}
                    >
                      <PencilLine size={20} weight="thin" />
                    </button>
                    <button
                      //   onClick={() => handleDelete(brand.id)}
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <Trash size={20} weight="light" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default CalculationData;
