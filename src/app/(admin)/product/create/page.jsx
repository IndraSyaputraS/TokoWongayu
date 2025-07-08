import { Breadcrumb } from "@/components";
import { ProductCreate } from "@/views";
import { requireAuth } from "@/libs/authCheck";

const ProductCreatePage = async () => {
  const user = await requireAuth();
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Product", href: "/product" },
          { label: "Create", href: "/product/create" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Add Product
      </h2>

      <ProductCreate />
    </>
  );
};

export default ProductCreatePage;
