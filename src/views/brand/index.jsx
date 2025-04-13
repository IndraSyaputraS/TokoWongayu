"use client";
import { Modal, Pagination, PopUp } from "@/components";
import { PencilLine, Plus, Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Brand = ({ brands }) => {
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brandList, setBrandList] = useState([]);

  const router = useRouter();
  const itemsPerPage = 10;

  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBrands = brands.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editMode
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/brands/${selectedBrand.id}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/brands`;

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        setName("");
        setOpenModal(false);
        setEditMode(false);
        setSelectedBrand(null);
        router.refresh();
      } else {
        console.error("Failed to save brand:", await res.text());
      }
    } catch (err) {
      console.error("Error saving brand:", err);
    }
  };

  // const handleDelete = async (id) => {
  //   const confirmDelete = confirm(
  //     "Are you sure you want to delete this brand?"
  //   );
  //   if (!confirmDelete) return;

  //   try {
  //     const res = await fetch(`/api/brands/${id}`, {
  //       method: "DELETE",
  //     });

  //     if (res.ok) {
  //       setBrandList((prev) => prev.filter((brand) => brand.id !== id));
  //       alert("Brand deleted successfully.");
  //       router.refresh();
  //     } else {
  //       alert("Failed to delete brand.");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting brand:", error);
  //     alert("An error occurred while deleting the brand.");
  //   }
  // };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this brand?");
    if (!confirmDelete) return;
  
    try {
      const res = await fetch(`/api/brands/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        setBrandList((prev) => prev.filter((brand) => brand.id !== id));
        toast.success("Brand deleted successfully.");
        router.refresh();
      } else {
        toast.error("Failed to delete brand.");
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
      toast.error("An error occurred while deleting the brand.");
    }
  };
  
  function handleOpenModal() {
    setEditMode(false);
    setName("");
    setSelectedBrand(null);
    setOpenModal(true);
  }

  function handleEdit(brand) {
    setEditMode(true);
    setSelectedBrand(brand);
    setName(brand.name);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex items-center flex-1 space-x-4">
            <h5>
              <span className="text-gray-500">All Brand: </span>
              <span className="dark:text-white">{brands?.length}</span>
            </h5>
          </div>
          <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            <button
              onClick={handleOpenModal}
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <Plus size="24" color="#d9e3f0" className="mr-1" />
              Add new brand
            </button>
          </div>
        </div>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          size="lg"
          title={editMode ? "Update Brand" : "Create Brand"}
        >
          <Modal.Body>
            <form
              id="brand-form"
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2 text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Input Brand Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              form="brand-form"
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {editMode ? (
                <>
                  <PencilLine size={20} className="mr-2" />
                  Update Brand
                </>
              ) : (
                <>
                  <Plus size={20} className="mr-2" />
                  Add New Brand
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
                <th scope="col" className="px-4 py-3">
                  Brand
                </th>
                <th scope="col" className="text-center px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedBrands.map((brand, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3">{brands.indexOf(brand) + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {brand.name}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                        onClick={() => handleEdit(brand)}
                      >
                        <PencilLine size={20} weight="thin" />
                      </button>
                      <button
                        onClick={() => handleDelete(brand.id)}
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
    </>
  );
};

export default Brand;
