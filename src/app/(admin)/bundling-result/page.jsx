import { Brand, BundlingResult } from "@/views";
import { Breadcrumb } from "@/components";

const BundlingResultPage = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Bundling Result", href: "/bundling-result" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Bundling Result
      </h2>
      <BundlingResult />
    </>
  );
};

export default BundlingResultPage;
