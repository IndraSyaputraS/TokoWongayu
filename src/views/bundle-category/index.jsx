"use client";
import { Modal, MultiSelect, Pagination } from "@/components";
import { PencilLine, Plus, Trash, Warning } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
async function fetchData(endpoint) {
  try {
    const res = await fetch(`/api/${endpoint}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    toast.error(err.message);
    return [];
  }
}

const BundleCategory = ({}) => {
  const [form, setForm] = useState({
    benefitId: "",
  });
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [selectedBundCat, setSelectedBundCat] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [bundCatToDelete, setBundCatToDelete] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bundleCategories, setBundleCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const itemsPerPage = 10;

  const totalPages = Math.ceil(bundleCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBunCat = bundleCategories.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [bens, cats, bunds] = await Promise.all([
        fetchData("benefits"),
        fetchData("categories"),
        fetchData("bundle-categories"),
      ]);
      setBenefits(bens);
      setCategories(cats);
      setBundleCategories(bunds);
      setLoading(false);
    }
    loadData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.benefitId || selectedCategory.length === 0) {
        toast.error("Please select both benefit and category.");
        return;
      }
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
      const url = editMode
        ? `${baseURL}/api/bundle-categories/${selectedBundCat.id}`
        : `${baseURL}/api/bundle-categories`;

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          benefitId: form.benefitId,
          categoryIds: selectedCategory.map((item) => item.id),
        }),
      });

      if (res.ok) {
        const notif = editMode
          ? toast.success("Bundle Category Updated successfully.")
          : toast.success("Bundle Category Created successfully.");
        setForm({
          benefitId: "",
        });
        setOpenModal(false);
        setEditMode(false);
        setSelectedBundCat(null);
        setSelectedCategory([]);
        router.refresh();
      } else {
        console.error("Failed to save Bundle Category:", await res.text());
      }
    } catch (err) {
      console.error("Error saving Bundle Category:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/bundle-categories/${bundCatToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Bundle Category deleted successfully.");
        setOpenDeleteModal(false);
        router.refresh();
      } else {
        toast.error("Failed to delete Bundle Category.");
      }
    } catch (error) {
      console.error("Error deleting Bundle Category:", error);
      toast.error("An error occurred while deleting the Bundle Category.");
    }
  };

  function handleOpenModal() {
    setEditMode(false);
    setForm({
      benefitId: "",
    });
    setSelectedBundCat(null);
    setOpenModal(true);
  }
  function handleOpenDeleteModal(id) {
    setOpenDeleteModal(true);
    setBundCatToDelete(id);
  }

  function handleEdit(bundleCategory) {
    setEditMode(true);
    setSelectedBundCat(bundleCategory);

    const selectedCats = categories.filter((cat) =>
      bundleCategory.categories?.some((item) => item.Category?.id === cat.id)
    );

    setForm({
      benefitId: bundleCategory.benefitId || "",
    });

    setSelectedCategory(selectedCats);
    setOpenModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
    setBundCatToDelete("");
  }
  function handleCloseModal() {
    setForm({
      benefitId: "",
    });
    setSelectedBundCat(null);
    setSelectedCategory([]);
    setOpenModal(false);
  }

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg sm:rounded-lg">
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex items-center flex-1 space-x-4 justify-between">
            <h5>
              <span className="text-gray-500">All Bundle Category: </span>
              <span className="dark:text-white">{bundleCategories?.length}</span>
            </h5>
            <button
              onClick={handleOpenModal}
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <Plus size="24" color="#d9e3f0" className="mr-1" />
              Add
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-[64px] px-4 py-3">
                  No
                </th>
                <th scope="col" className="w-[450px] px-4 py-3">
                  Perawatan
                </th>
                <th scope="col" className="px-4 py-3">
                  Category
                </th>
                <th scope="col" className="text-center px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedBunCat.map((bundCat, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3">{bundleCategories.indexOf(bundCat) + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {bundCat.Benefit?.name}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {bundCat.categories && bundCat.categories.length > 0
                      ? bundCat.categories
                          .map((c) => c.Category?.name)
                          .join(", ")
                      : "-"}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                        onClick={() => handleEdit(bundCat)}
                      >
                        <PencilLine size={20} weight="thin" />
                      </button>
                      <button
                        onClick={() => handleOpenDeleteModal(bundCat.id)}
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
        open={openModal}
        onClose={handleCloseModal}
        size="sm"
        title={editMode ? "Update Bundle Category" : "Create Bundle Category"}
      >
        <Modal.Body>
          <form
            id="bundCat-form"
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center "
          >
            <div className="w-full">
              <div className="pb-3">
                <label
                  htmlFor="benefit"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Perawatan
                </label>
                <select
                  id="benefit"
                  value={form.benefitId}
                  onChange={(e) => updateForm("benefitId", e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Benefit</option>
                  {benefits.map((benefit) => (
                    <option key={benefit.id} value={benefit.id}>
                      {benefit.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <MultiSelect
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  data={categories}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            form="bundCat-form"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {editMode ? (
              <>
                <PencilLine size={20} className="mr-2" />
                Update Bundle Category
              </>
            ) : (
              <>
                <Plus size={20} className="mr-2" />
                Add New Bundle Category
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
              Are you sure you want to delete this Bundle Category?
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

export default BundleCategory;
