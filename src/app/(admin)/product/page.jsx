import { Product } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const ProductPage = async () => {
  const user = await requireAuth();
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
