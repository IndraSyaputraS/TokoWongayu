// app/product/create/page.jsx
import { Breadcrumb } from "@/components";
import { ProductCreate } from "@/views";
import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";

const ProductCreatePage = async () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Product", href: "/product" },
          { label: "Create", href: "/product/create" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Create Product
      </h2>

      <ProductCreate />
    </>
  );
};

export default ProductCreatePage;
