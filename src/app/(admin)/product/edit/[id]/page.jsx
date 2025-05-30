import { Breadcrumb } from "@/components";
import { ProductCreate } from "@/views";
import { requireAuth } from "@/libs/authCheck";

const ProductEditPage = async ({ params }) => {
  const { id } = await params;
  const user = await requireAuth();
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Product", href: "/product" },
          { label: "Edit", href: "/product/edit" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Edit Product
      </h2>

      <ProductCreate productId={id} />
    </>
  );
};

export default ProductEditPage;
