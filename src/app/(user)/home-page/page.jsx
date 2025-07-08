import {
  BundlingRecCard,
  ProductCardAnimated,
} from "@/components";
import { HeroSection } from "@/views";

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      <div className="flex items-center justify-center md:pt-4">
        <a className="text-2xl md:text-4xl text-black font-bold my-2 md:my-4">NEW ARRIVALS</a>
      </div>
      <div className="px-4">
        <ProductCardAnimated visibleCount={4} />
      </div>
      <div className="w-full text-center md:pb-4 pb-4">
        <a href="/product-menu">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Show more
          </button>
        </a>
      </div>
      <hr className="border border-gray-200" />
      <div className="flex items-center justify-center">
        <a className="text-2xl md:text-4xl text-black font-bold my-2 md:my-4 text-center">
          BUNDLING RECOMMENDATION
        </a>
      </div>
      <BundlingRecCard />
    </>
  );
};
export default HomePage;
