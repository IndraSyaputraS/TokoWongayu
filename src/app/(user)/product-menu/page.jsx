import { Breadcrumb, Filter, ProductCard } from "@/components";
import { Faders } from "@phosphor-icons/react/dist/ssr";

const ProductMenuPage = async () => {
  return (
    <>
      <div className="mx-14 my-4 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[{ label: "Produk", href: "/product-menu" }]}
        />
      </div>

      <div className="grid grid-cols-12 gap-6 px-14">
        {/* Sidebar filter */}
        <div className="col-span-12 md:col-span-2">
          <div className="border rounded-lg p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800 grid grid-cols-2">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Filters
            </h2>
            <div className="flex justify-end">
              <Faders size={32} className="opacity-40" />
            </div>
            <hr className="col-span-2 border border-gray-200 dark:border-gray-700" />
            <div className="col-span-2 py-4">
              <Filter />
            </div>
          </div>
        </div>

        {/* Product list */}
        <div className="col-span-12 md:col-span-10">
          <span className="text-4xl font-bold">Product</span>
          <ProductCard visibleCount={12} disableAnimation={true} />
        </div>
      </div>
    </>
  );
};

export default ProductMenuPage;
