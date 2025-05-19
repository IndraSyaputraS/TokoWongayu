import ResultClient from "./result";
import { Breadcrumb } from "@/components";

const ResultPage = async ({ searchParams }) => {
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
