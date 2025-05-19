import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Benefit } from "@/views";
import { Breadcrumb } from "@/components";
const BenefitPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "Benefit", href: "/benefit" }]} />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Benefit
      </h2>
      <Benefit />
    </>
  );
};

export default BenefitPage;
