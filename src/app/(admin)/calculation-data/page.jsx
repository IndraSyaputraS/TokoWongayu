import { Breadcrumb } from "@/components";
import { CalculationData } from "@/views";
import { requireAuth } from "@/libs/authCheck";

const CalculationDataPage = async () => {
  const user = await requireAuth()
  return (
    <>
      <Breadcrumb
        items={[
          { label: "History Transaction", href: "/calculation-data" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        History Transaction
      </h2>
      <CalculationData />
    </>
  );
};

export default CalculationDataPage;
