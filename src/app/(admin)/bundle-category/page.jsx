import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { BundleCategory } from "@/views";
import { Breadcrumb } from "@/components";

const BundleCategoryPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "Bundle Category", href: "/bundle-category" }]} />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Bundle Category
      </h2>
      <BundleCategory />
    </>
  );
};

export default BundleCategoryPage;
