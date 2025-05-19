import { Breadcrumb } from "@/components";
import { CalculationData } from "@/views";
import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";

const CalculationDataPage = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Calculation Data", href: "/calculation-data" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Calculation Data
      </h2>
      <CalculationData />
      {/* <CalculationData data={calcs} products={products} getTransaction={getLast}/> */}
    </>
  );
};

export default CalculationDataPage;
