import { BundleCategory } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const BundleCategoryPage = async () => {
  const user = await requireAuth()
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
