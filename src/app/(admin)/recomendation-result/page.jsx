import ResultClient from "./result";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const ResultPage = async ({ searchParams }) => {
  const user = await requireAuth();
  const { productId, budget } = await searchParams;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Recomendation", href: "/recomendation" },
          { label: "Result", href: "/recomendation-result" },
        ]}
      />

      <ResultClient productId={productId} budget={budget} />
    </>
  );
};

export default ResultPage;
