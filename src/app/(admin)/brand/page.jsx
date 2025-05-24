import { Brand } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const BrandPage = async () => {
  const user = await requireAuth()
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Brand", href: "/brand" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Brand
      </h2>
      <Brand />
    </>
  );
};

export default BrandPage;
