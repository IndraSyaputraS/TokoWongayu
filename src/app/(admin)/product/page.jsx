import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@/views";
import { Breadcrumb } from "@/components";

const ProductPage = async () => {
  return (
    <>
      <Breadcrumb items={[{ label: "Product", href: "/product" }]} />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Product
      </h2>
      <Product />
    </>
  );
};

export default ProductPage;
