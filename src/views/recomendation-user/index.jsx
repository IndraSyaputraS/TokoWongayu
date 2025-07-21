"use client";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Breadcrumb, Modal, ProductCardRec, SpeedDial } from "@/components";
const RecomendationUser = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        setResults(Array.isArray(data) ? data : data.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleSelect = useCallback(
    (selectedIds) => {
      const selected = results
        .filter((product) => selectedIds.includes(product.id))
        .map((product) => ({
          id: product.id,
          name: product.name,
        }));

      setSelectedProducts(selected);
    },
    [results]
  );

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-14">
        <a className="text-2xl md:text-4xl text-black font-bold">
          Pilih Produk
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 md:gap-4 my-4 items-center">
          <label className="text-sm font-medium text-gray-900 text-left lg:text-right lg:col-span-2">
            Anggaran
          </label>
          <div className="flex lg:col-span-4 justify-end">
            <input
              type="number"
              id="budget"
              value={budget}
              placeholder="0"
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="lg:col-span-2 flex justify-end">
            <button
              onClick={() => setOpenModal(true)}
              className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Lihat Panduan
            </button>
          </div>
        </div>
      </div>

      <div>
        <ProductCardRec data={results} onSelect={handleSelect} />
        <SpeedDial selectedProducts={selectedProducts} budget={budget} />
      </div>
      {/* Modal info */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        size="xs"
        title="Cara Mendapatkan Rekomendasi"
      >
        <Modal.Body>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-900">
              <thead className="text-xs text-gray-500 uppercase">
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-transparent flex justify-center">
                    1
                  </td>
                  <td className="pl-2 border border-transparent">
                    Masukkan anggaran maksimal pada kolom Anggaran.
                  </td>
                </tr>
                <tr>
                  <td className="pt-2 border border-transparent flex justify-center">
                    2
                  </td>
                  <td className="pt-2 pl-2 border border-transparent">
                    Pilih beberapa produk yang Anda sukai dari daftar.
                  </td>
                </tr>
                <tr>
                  <td className="pt-2 border border-transparent flex justify-center">
                    3
                  </td>
                  <td className="pt-2 pl-2 border border-transparent">
                    Klik button panah yang berada pada pojok kanan bawah.
                  </td>
                </tr>
                <tr>
                  <td className="pt-2 border border-transparent flex justify-center">
                    4
                  </td>
                  <td className="pt-2 pl-2 border border-transparent">
                    Tunggu proses loading untuk mendapatkan rekomendasi.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecomendationUser;
