import { ProductOverview } from "@/views";
import { CaretRight, Faders, HouseLine } from "@phosphor-icons/react/dist/ssr";
async function fetchProductById(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
      {
        cache: "no-store", // pastikan selalu ambil data baru
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
const ProductOverviewPage = async ({ params }) => {
  const { id } = await params;
  const productData = await fetchProductById(id);

  if (!productData) {
    return (
      <div className="p-8 text-red-600">
        Product not found or failed to fetch data.
      </div>
    );
  }
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
              <a
                href="/product-menu"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                Produk
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <a className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                Detail
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-12 gap-6 px-14">
        <div className="col-span-12 md:col-span-10">
          <span className="text-4xl font-bold">Product Detail</span>
          <ProductOverview product={productData.data} />
        </div>
      </div>
    </>
  );
};

export default ProductOverviewPage;
