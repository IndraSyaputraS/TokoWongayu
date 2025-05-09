"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { HandleError } from "@/components";
import toast from "react-hot-toast";

const ProductCreate = ({ brands, categories, benefits, product }) => {
  const [form, setForm] = useState({
    name: product?.name || "",
    brandId: product?.brandId || "",
    itemCode: product?.itemCode || "",
    price: product?.price || "",
    stock: product?.stock || "",
    benefitId: product?.benefitId || "",
    categoryId: product?.categoryId || "",
    image: null,
    preview: product?.imageUrl || null,
    uploadedImageUrl: product?.imageUrl || "",
    uploadedImageId: product?.imageId || null,
    oldUploadedImageId: "",
  });
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = async (e) => {
    if (uploading) return;
    setUploading(true);

    const file = e.target.files[0];
    if (!file) {
      setUploading(false);
      return;
    }

    if (form.uploadedImageId) {
      updateForm("oldUploadedImageId", form.uploadedImageId);
    }

    const formData = new FormData();
    formData.append("image", file);

    const uploadRes = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    if (uploadRes.ok) {
      updateForm("image", file);
      updateForm("preview", URL.createObjectURL(file));
      updateForm("uploadedImageUrl", data.data.imageUrl);
      updateForm("uploadedImageId", data.data.id);

      if (form.oldUploadedImageId) {
        await fetch(`/api/upload-image/${form.oldUploadedImageId}`, {
          method: "DELETE",
        });
        updateForm("oldUploadedImageId", "");
      }
    } else {
      console.error("Failed to upload image:", data.message || "Unknown error");
    }

    setUploading(false);
  };

  const handleDeleteImage = async () => {
    // Cek jika tidak ada gambar yang di-upload (mungkin gambar default)
    if (!form.uploadedImageId && !form.uploadedImageUrl) return;

    // Jika ada gambar yang sudah di-upload sebelumnya
    if (form.uploadedImageId) {
      const res = await fetch(`/api/upload-image/${form.uploadedImageId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        updateForm("uploadedImageId", "");
        updateForm("uploadedImageUrl", "");
        updateForm("image", null);
        updateForm("preview", null);
      } else {
        console.error("Failed to delete image");
      }
    } else {
      // Jika gambar adalah gambar default (tanpa ID)
      updateForm("uploadedImageUrl", "");
      updateForm("image", null);
      updateForm("preview", null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
  
    const method = product ? "PUT" : "POST";
    const endpoint = product ? `/api/products/${product.id}` : "/api/products";
  
    try {
      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          itemCode: form.itemCode,
          price: form.price ? parseFloat(form.price) : null,
          stock: form.stock ? parseInt(form.stock) : null,
          brandId: parseInt(form.brandId),
          benefitId: parseInt(form.benefitId),
          categoryId: parseInt(form.categoryId),
          imageId: form.uploadedImageId || null,
          imageUrl: form.uploadedImageUrl,
        }),
      });
  
      let data = {};
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        console.error("Failed to parse JSON:", err);
      }
  
      if (res.ok) {
        toast.success(method ? "Success Edit Product" : "Success Add Product")
        router.push("/product");
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          console.error("Failed to " + (product ? "update" : "create") + " product");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
              placeholder="Input Product Name"
              className={!errors.name ? "input-field" : "input-field-error"}
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
            />
            {errors.name && <HandleError error={errors.name} />}
          </div>

          <div>
            <label htmlFor="itemCode" className="form-label">
              Item Code
            </label>
            <input
              type="text"
              id="itemCode"
              className={!errors.itemCode ? "input-field" : "input-field-error"}
              placeholder="Input Item Code"
              value={form.itemCode}
              onChange={(e) => updateForm("itemCode", e.target.value)}
            />
            {errors.itemCode && <HandleError error={errors.itemCode} />}
          </div>

          <div>
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <select
              id="brand"
              value={form.brandId}
              onChange={(e) => updateForm("brandId", e.target.value)}
              className={!errors.brandId ? "input-field" : "input-field-error"}
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            {errors.brandId && <HandleError error={errors.brandId} />}
          </div>

          <div>
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              value={form.categoryId}
              onChange={(e) => updateForm("categoryId", e.target.value)}
              className={
                !errors.categoryId ? "input-field" : "input-field-error"
              }
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && <HandleError error={errors.categoryId} />}
          </div>

          <div>
            <label htmlFor="benefit" className="form-label">
              Benefit
            </label>
            <select
              id="benefit"
              value={form.benefitId}
              onChange={(e) => updateForm("benefitId", e.target.value)}
              className={
                !errors.benefitId ? "input-field" : "input-field-error"
              }
            >
              <option value="">Select Benefit</option>
              {benefits.map((benefit) => (
                <option key={benefit.id} value={benefit.id}>
                  {benefit.name}
                </option>
              ))}
            </select>
            {errors.benefitId && <HandleError error={errors.benefitId} />}
          </div>

          <div>
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              className={!errors.price ? "input-field" : "input-field-error"}
              placeholder="Input Price"
              value={form.price}
              onChange={(e) => updateForm("price", e.target.value)}
            />
            {errors.price && <HandleError error={errors.price} />}
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
              value={form.stock}
              onChange={(e) => updateForm("stock", e.target.value)}
            />
          </div>

          <div className="sm:col-span-2 flex justify-end mt-auto">
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
            >
              {product ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>

        <div className="md:w-1/4 flex flex-col items-center h-200 mt-4 md:mt-0">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white text-center">
            Add Image
          </label>

          {form.preview ? (
            <div className="relative group w-32 h-32">
              <Image
                src={form.preview}
                alt="Preview"
                className="object-contain rounded-lg border border-gray-300 dark:border-gray-600 shadow w-full h-full bg-zinc-50 dark:bg-gray-700"
                width={128}
                height={128}
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                onClick={handleDeleteImage}
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

          .input-field-error {
            background-color: #f9fafb; /* Tetap menggunakan latar belakang normal */
            border: 1px solid #f87171; /* border-red-500 */
            color: #111827; /* Tidak berubah, tetap warna teks normal */
            font-size: 0.875rem;
            border-radius: 0.5rem;
            padding: 0.5rem;
            width: 100%;
            outline: none;
            box-shadow: 0 0 0 2px rgba(248, 113, 113, 0.5); /* focus:ring-red-500 */
          }

          /* Placeholder style */
          .input-field-error::placeholder {
            color: #9b2c2c; /* placeholder-red-700 */
          }
        `}</style>
      </form>
    </>
  );
};

export default ProductCreate;
