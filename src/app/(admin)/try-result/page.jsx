import TryResultClient from "./result";
import { Breadcrumb } from "@/components";

const TryResultPage = async ({ searchParams }) => {
  const { productId } = await searchParams;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Recomendation", href: "/recomendation" },
          { label: "Result", href: "/recomendation-result" },
        ]}
      />

      <TryResultClient productId={productId} />
    </>
  );
};

export default TryResultPage;
