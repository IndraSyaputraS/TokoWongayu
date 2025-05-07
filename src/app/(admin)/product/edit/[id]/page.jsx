import { ProductCreate } from "@/views";
import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";

async function fetchData(endpoint) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

const ProductEditPage = async ({ params }) => {
  const { id } = await params;
  const [brands, categories, benefits, product] = await Promise.all([
    fetchData("brands"),
    fetchData("categories"),
    fetchData("benefits"),
    fetchData(`products/${id}`),
  ]);

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
                href="/product"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                Product
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <span className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                Edit
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Edit Product
      </h2>

      <ProductCreate
        brands={brands}
        categories={categories}
        benefits={benefits}
        product={product}
      />
    </>
  );
};

export default ProductEditPage;
