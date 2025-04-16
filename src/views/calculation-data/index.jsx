"use client";
import { Pagination, Modal } from "@/components";
import {
  CloudArrowUp,
  FileArrowDown,
  MicrosoftExcelLogo,
  PencilLine,
  Plus,
  Spinner,
  Trash,
  Warning,
  XCircle,
} from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const CalculationData = ({ data, products, getTransaction }) => {
  const [form, setForm] = useState({
    transaction: "",
    productId: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isImporting, setIsImporting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [selectedCalc, setSelectedCalc] = useState(null);
  const [calcList, setCalcList] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [calcToDelete, setCalcToDelete] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCalcs = data.slice(startIndex, startIndex + itemsPerPage);

  const router = useRouter();
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setSelectedFile(null)
    setOpenModal(false);
  }

  function handleOpenCreateModal() {
    setOpenCreateModal(true);
  }
  function handleCloseCreateModal() {
    setForm({
      transaction: "",
      productId: "",
    });
    setEditMode(false);
    setOpenCreateModal(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
      const url = editMode
        ? `${baseURL}/api/calculation-data/${selectedCalc.id}`
        : `${baseURL}/api/calculation-data`;

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transaction: form.transaction,
          productId: form.productId,
        }),
      });

      if (res.ok) {
        const notif = editMode
          ? toast.success("Calculation Data Updated successfully.")
          : toast.success("Calculation Data Created successfully.");
        setOpenCreateModal(false);
        setEditMode(false);
        setSelectedCalc(null);
        router.refresh();
      } else {
        console.error("Failed to save calculation data:", await res.text());
      }
    } catch (err) {
      console.error("Error saving calculation data:", err);
    }
  };
  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  function handleEdit(calc) {
    setEditMode(true);
    setSelectedCalc(calc);
    setForm({
      transaction: calc.transaction,
      productId: calc.productId,
    });
    setOpenCreateModal(true);
  }
  function handleOpenDeleteModal(id) {
    setOpenDeleteModal(true);
    setCalcToDelete(id);
  }
  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/calculation-data/${calcToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCalcList((prev) => prev.filter((data) => data.id !== calcToDelete));
        toast.success("Calculation Data deleted successfully.");
        setOpenDeleteModal(false);
        router.refresh();
      } else {
        toast.error("Failed to delete Calculation Data.");
      }
    } catch (error) {
      console.error("Error deleting Calculation Data:", error);
      toast.error("An error occurred while deleting the Calculation Data.");
    }
  };
  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex items-center flex-1 space-x-4">
            <h5>
              <span className="text-gray-500">All Calculation Data: </span>
              <span className="dark:text-white">{data?.length}</span>
            </h5>
          </div>
          <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            <button
              onClick={handleOpenCreateModal}
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
                  <td className="px-4 py-3">{data.indexOf(calc) + 1}</td>
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
                        onClick={() => handleEdit(calc)}
                      >
                        <PencilLine size={20} weight="thin" />
                      </button>
                      <button
                        onClick={() => handleOpenDeleteModal(calc.id)}
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
      {/* Modal Create Edit */}
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        size="sm"
        title={editMode ? "Update Calculation Data" : "Create Calculation Data"}
      >
        <Modal.Body>
          <form
            id="calc-form"
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center "
          >
            <div className="w-full">
              <div className="pb-3">
                <label
                  htmlFor="transcation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Transaction
                </label>
                <input
                  type="text"
                  id="transaction"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2 text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={getTransaction}
                  value={form.transaction}
                  onChange={(e) => updateForm("transaction", e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product
                </label>
                <select
                  id="product"
                  value={form.productId}
                  onChange={(e) => updateForm("productId", e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            form="calc-form"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {editMode ? (
              <>
                <PencilLine size={20} className="mr-2" />
                Update Calculation
              </>
            ) : (
              <>
                <Plus size={20} className="mr-2" />
                Add New Calculation
              </>
            )}
          </button>
        </Modal.Footer>
      </Modal>
      {/* Modal Import */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        size="sm"
        title="Create Product"
      >
        <Modal.Body>
          <form id="import" onSubmit={handleFileUpload}>
            <div className="flex items-center justify-center w-full">
              {selectedFile ? (
                <div className="flex flex-row items-center justify-center w-full h-64 p-6">
                  <div className="flex items-center space-x-2">
                    <MicrosoftExcelLogo
                      size={24}
                      className="text-gray-500 dark:text-gray-400"
                    />
                    <p className="text-sm text-gray-800 dark:text-white">
                      {selectedFile.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedFile(null)}
                    className="ml-2"
                  >
                    <XCircle size={28} color="#d42121" weight="thin"/>
                  </button>
                </div>
              ) : (
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
              )}
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
                <Spinner size={16} className="animate-spin" />
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
      {/* Modal Delete */}
      <Modal
        open={openDeleteModal}
        onClose={handleCloseModal}
        size="sm"
        placement="center"
      >
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <div className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200">
              <Warning size={64} />
            </div>
            <h3 className="mb-5 text-lg font-normal text-center text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Calculation Data?
            </h3>
            <div className="flex ">
              <button
                type="button"
                onClick={handleDelete}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                onClick={handleCloseDeleteModal}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <style jsx>{`
        .input-field {
          background-color: #f9fafb;
          border: 1px solid #d1d5db;
          color: #111827;
          font-size: 0.875rem;
          border-radius: 0.5rem;
          padding: 0.625rem;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CalculationData;
