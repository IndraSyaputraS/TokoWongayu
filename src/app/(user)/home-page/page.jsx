import { BundlingRecCard, ProductCard } from "@/components";
import { HeroSection } from "@/views";

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      <div className="flex items-center justify-center md:pt-4">
        <a className="text-4xl font-bold my-4">NEW ARRIVALS</a>
      </div>
      <div className="px-4">
        <ProductCard visibleCount={4} disableAnimation={false} />
      </div>
      <div className="w-full text-center md:pb-4 pb-4">
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
      <div className="flex items-center justify-center md:pt-4">
        <a className="text-4xl font-bold my-4 text-center">
          BUNDLING RECOMENDATION
        </a>
      </div>
      <BundlingRecCard />
    </>
  );
};
export default HomePage;
