import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "@/views";
import { Spinner } from "@/components";
import Image from "next/image";
async function fetchBrand() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brands`);

    if (!res.ok) {
      throw new Error(`Failed to fetch brands: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
}
const BrandPage = async () => {
  const data = await fetchBrand();
  if (data.error) {
    return (
      <div className="flex justify-center items-center">
        <Image
        src="/404.png"
        width={500}
        height={500}
        alt="Brand Not Found"/>
      </div>
    );
  }
  const brands = data.data;
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
              <a className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                Brand
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Brand
      </h2>
      <Brand data={brands} />
    </>
  );
};

export default BrandPage;
