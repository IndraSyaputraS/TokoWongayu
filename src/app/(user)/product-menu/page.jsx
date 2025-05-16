import { Filter, ProductCard } from "@/components";
import { CaretRight, Faders, HouseLine } from "@phosphor-icons/react/dist/ssr";

const ProductMenuPage = async () => {
  return (
    <>
      <nav className="mx-14 my-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/home-page"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HouseLine size={16} className="mr-1" />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <a className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                Product
              </a>
            </div>
          </li>
        </ol>
      </nav>
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
