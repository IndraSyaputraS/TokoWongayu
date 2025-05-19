import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Recomendation } from "@/views";
import { Breadcrumb } from "@/components";

const RecomendationPage = async () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Recomendation", href: "/recomendation" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Recomendation
      </h2>
      <Recomendation />
    </>
  );
};

export default RecomendationPage;
