"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Trash } from "@phosphor-icons/react";

const ProductCreate = ({ brands, categories, benefits }) => {
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [benefitId, setBenefitId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageId, setUploadedImageId] = useState("");
  const [oldUploadedImageId, setOldUploadedImageId] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleImageChange = async (e) => {
    if (uploading) return;
    setUploading(true);
    const file = e.target.files[0];
    if (!file) {
      setUploading(false);
      return;
    }

    if (uploadedImageId) setOldUploadedImageId(uploadedImageId);

    const formData = new FormData();
    formData.append("image", file);

    const uploadRes = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    if (uploadRes.ok) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setUploadedImageUrl(data.data.imageUrl);
      setUploadedImageId(data.data.id);

      if (oldUploadedImageId) {
        await fetch(`/api/upload-image/${oldUploadedImageId}`, {
          method: "DELETE",
        });
        setOldUploadedImageId("");
      }
    } else {
      console.error("Failed to upload image:", data.message || "Unknown error");
    }

    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        brandId,
        itemCode,
        price,
        stock,
        benefitId,
        categoryId,
        imageId: uploadedImageId,
        imageUrl: uploadedImageUrl,
      }),
    });

    if (res.ok) {
      router.push("/product");
    } else {
      console.error("Failed to create product");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start gap-4"
      >
        <div className="w-full md:w-3/4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder="Input Prodcut Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="itemCode" className="form-label">
              Item Code
            </label>
            <input
              type="text"
              id="itemCode"
              className="input-field"
              placeholder="Input Item Code"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <select
              id="brand"
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              className="input-field"
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="input-field"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="benefit" className="form-label">
              Benefit
            </label>
            <select
              id="benefit"
              value={benefitId}
              onChange={(e) => setBenefitId(e.target.value)}
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
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="input-field"
              placeholder="Input Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              className="input-field"
              placeholder="Input Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2 flex justify-end mt-auto">
      <button
        type="submit"
        className="px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
      >
        Add product
      </button>
    </div>
        </div>
        <div className="md:w-1/4 flex flex-col items-center h-200 mt-4 md:mt-0">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white text-center">
            Add Image
          </label>

          {preview ? (
            <div className="relative group w-32 h-32">
              <Image
                src={preview}
                alt="Preview"
                className="object-contain rounded-lg border border-gray-300 dark:border-gray-600 shadow w-full h-full bg-zinc-50 dark:bg-gray-700"
                width={128}
                height={128}
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                onClick={async () => {
                  if (!uploadedImageId || uploadedImageId === "undefined")
                    return;

                  const res = await fetch(`/api/upload-image/${uploadedImageId}`, {
                    method: "DELETE",
                  });

                  if (res.ok) {
                    setUploadedImageId("");
                    setUploadedImageUrl("");
                    setImage(null);
                    setPreview(null);
                  } else {
                    console.error("Failed to delete image");
                  }
                }}
              >
                <Trash size={16} />
              </button>
            </div>
          ) : (
            <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg text-gray-400 text-sm relative">
              No image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          )}
        </div>

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
      </form>
    </>
  );
};

export default ProductCreate;
