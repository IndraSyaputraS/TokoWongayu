import { Benefit } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const BenefitPage = async () => {
  const user = await requireAuth();
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
