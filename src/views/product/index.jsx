"use client";
import { Modal, Pagination, TableSkeletonLoader } from "@/components";
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
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Product = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isImporting, setIsImporting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productList, setProductList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
      );
      const result = await res.json();
      setProducts(result.data);
    } catch (err) {
      console.error("Failed to fetch benefits:", err);
      toast.error("Failed to load benefits.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Data imported successfully");
        setSelectedFile(null);
        handleCloseModal();
        fetchProducts();
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

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }
  function handleOpenDeleteModal(id) {
    setOpenDeleteModal(true);
    setProductToDelete(id);
  }
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/products/${productToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProductList((prev) =>
          prev.filter((data) => data.id !== productToDelete)
        );
        toast.success("Benefit deleted successfully.");
        setOpenDeleteModal(false);
        fetchProducts();
      } else {
        toast.error("Failed to delete benefit.");
      }
    } catch (error) {
      console.error("Error deleting benefit:", error);
      toast.error("An error occurred while deleting the benefit.");
    }
  };

  return (
    <>
      {isLoading ? (
        <TableSkeletonLoader columns={8} rows={10} />
      ) : (
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">All Product: </span>
                <span className="dark:text-white">{products?.length}</span>
              </h5>
            </div>
            <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3 lg:justify-end">
              <Link
                href="/product/create"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <Plus size="24" color="#d9e3f0" className="mr-1" />
                Add
              </Link>
              <button
                type="button"
                onClick={handleOpenModal}
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <FileArrowDown size="24" className="mr-1" />
                Import
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="min-w-16 px-4 py-3">
                    No
                  </th>
                  <th scope="col" className="min-w-28 px-4 py-3">
                    Item Code
                  </th>
                  <th scope="col" className="min-w-96 px-4 py-3">
                    Product
                  </th>
                  <th scope="col" className="min-w-32 px-4 py-3">
                    Brand
                  </th>
                  <th scope="col" className="min-w-40 px-4 py-3">
                    Category
                  </th>
                  <th scope="col" className="min-w-56 px-4 py-3">
                    Benefit
                  </th>
                  <th scope="col" className="min-w-24 px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="text-center px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="whitespace-nowrap px-4 py-3">
                      {products.indexOf(product) + 1}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.itemCode}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center gap-2">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={35}
                            height={35}
                            className="w-[35px] h-[35px] object-cover rounded"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">
                            No Image
                          </span>
                        )}
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.Brand?.name}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.Category?.name}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.Benefit?.name}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.price}
                    </td>
                    <td className="px-4 py-2 max-w-xs overflow-hidden whitespace-nowrap text-ellipsis font-medium text-gray-900 dark:text-white">
                      {product.description}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex justify-center gap-2">
                        <Link href={`/product/edit/${product.id}`}>
                          <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                            <PencilLine size={20} weight="thin" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleOpenDeleteModal(product.id)}
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
          </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
      )}
      {/* Modal Import */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        size="sm"
        title="Import Product"
        dismissable={!isImporting}
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
                    className={`ml-2 ${
                      isImporting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isImporting}
                  >
                    <XCircle size={28} color="#d42121" weight="thin" />
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
            <div className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-red-600">
              <Warning size={64} />
            </div>
            <h3 className="mb-5 text-lg text-center font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Product?
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
    </>
  );
};

export default Product;
