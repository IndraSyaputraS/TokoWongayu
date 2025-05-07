import { ProductCard } from "@/components";
import { HeroSection } from "@/views";
async function fetchProduct() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    return res.json();
  } catch (err) {
    console.error("Failed to fetch ategory:", err);
  }
}
const HomePage = async () => {
  const data = await fetchProduct();
  const products = data.data;
  return (
    <>
      <HeroSection />
      <div className="flex items-center justify-center md:pt-8">
        <a className="text-4xl font-bold">NEW ARRIVALS</a>
      </div>
      <ProductCard data={products} visibleCount={4} disableAnimation={false} />
      <div className="w-full text-center md:pb-8">
        <a href="/product-menu">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Show more
          </button>
        </a>
      </div>
      <hr className="border border-gray-200 dark:border-gray-700" />
      <div className="flex items-center justify-center md:pt-8">
        <a className="text-4xl font-bold">BUNDLING RECOMENDATION</a>
      </div>
      <div className="w-full text-center md:pb-8">
        <a href="/product-menu">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Show more
          </button>
        </a>
      </div>
    </>
  );
};
export default HomePage;
