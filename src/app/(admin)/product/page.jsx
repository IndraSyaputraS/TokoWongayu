import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@/views";

async function fetchProduct() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    return res.json();
  } catch (err) {
    console.error("Failed to fetch product:", err);
  }
}
const ProductPage = async () => {
  const data = await fetchProduct();
  const products = data.data;
  return (
    <>
      <nav className="mb-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HouseLine size={16} className="mr-1" />
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <a
                className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400"
              >
                Product
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Product
      </h2>
      <Product data={products} />
    </>
  );
};

export default ProductPage;
