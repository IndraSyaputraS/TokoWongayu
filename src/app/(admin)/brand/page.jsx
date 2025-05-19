import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "@/views";
import { Breadcrumb } from "@/components";
import Image from "next/image";
const BrandPage = () => {
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
