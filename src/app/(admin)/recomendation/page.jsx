import { Recomendation } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const RecomendationPage = async () => {
  const user = await requireAuth();
  return (
    <>
      <Breadcrumb
        items={[{ label: "Recomendation", href: "/recomendation" }]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Recomendation
      </h2>
      <Recomendation />
    </>
  );
};

export default RecomendationPage;
