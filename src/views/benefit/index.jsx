"use client";
import {
  HandleError,
  Modal,
  Pagination,
  TableSkeletonLoader,
} from "@/components";
import { PencilLine, Plus, Trash, Warning } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Benefit = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [benefitToDelete, setBenefitToDelete] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useRouter();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/benefits`
        );
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error("Failed to fetch benefits:", err);
        toast.error("Failed to load benefits.");
      } finally {
        setIsLoading(false); // pastikan loading berhenti baik sukses atau error
      }
    };

    fetchBenefits();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBenefits = data.slice(startIndex, startIndex + itemsPerPage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
      const url = editMode
        ? `${baseURL}/api/benefits/${selectedBenefit.id}`
        : `${baseURL}/api/benefits`;

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const response = await res.json();
      if (!name.trim()) {
        setError(response.message);
        return;
      }

      if (res.ok) {
        const notif = editMode
          ? toast.success("Benefit Updated successfully.")
          : toast.success("Benefit Created successfully.");
        setName("");
        setOpenModal(false);
        setEditMode(false);
        setSelectedBenefit(null);
        router.refresh();
      } else {
        console.error("Failed to save benefit:", await res.text());
      }
    } catch (err) {
      console.error("Error saving benefit:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/benefits/${benefitToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Benefit deleted successfully.");
        setOpenDeleteModal(false);
        router.refresh();
      } else {
        toast.error("Failed to delete benefit.");
      }
    } catch (error) {
      console.error("Error deleting benefit:", error);
      toast.error("An error occurred while deleting the benefit.");
    }
  };

  function handleOpenModal() {
    setEditMode(false);
    setName("");
    setSelectedBenefit(null);
    setOpenModal(true);
  }
  function handleOpenDeleteModal(id) {
    setOpenDeleteModal(true);
    setBenefitToDelete(id);
  }

  function handleEdit(benefit) {
    setEditMode(true);
    setSelectedBenefit(benefit);
    setName(benefit.name);
    setOpenModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }
  function handleCloseModal() {
    setOpenModal(false);
    setError("");
  }
  return (
    <>
      {isLoading ? (
        <TableSkeletonLoader columns={3} rows={10} />
      ) : (
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">All Benefit: </span>
                <span className="dark:text-white">{data?.length}</span>
              </h5>
            </div>
            <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
              <button
                onClick={handleOpenModal}
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <Plus size="24" color="#d9e3f0" />
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
                  <th scope="col" className="w-[600px] px-4 py-3">
                    Benefit
                  </th>
                  <th scope="col" className="text-center px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedBenefits.map((benefit, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3">{data.indexOf(benefit) + 1}</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {benefit.name}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                          onClick={() => handleEdit(benefit)}
                        >
                          <PencilLine size={20} weight="thin" />
                        </button>
                        <button
                          onClick={() => handleOpenDeleteModal(benefit.id)}
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
      )}
      {/* Modal Create Update */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        size="sm"
        title="Create Benefit"
      >
        <Modal.Body>
          <form
            id="benefit-form"
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center "
          >
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Benefit Name
              </label>
              <input
                type="text"
                id="name"
                className={
                  !error
                    ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2 text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full h-8 p-2 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                }
                placeholder="Input Benefit Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError("");
                }}
              />
              {error && <HandleError error={error} />}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            form="benefit-form"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {editMode ? (
              <>
                <PencilLine size={20} className="mr-2" />
                Update Benefit
              </>
            ) : (
              <>
                <Plus size={20} className="mr-2" />
                Add New Benefit
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
              Are you sure you want to delete this Benefit?
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

export default Benefit;
