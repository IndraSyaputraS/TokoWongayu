import { Breadcrumb } from "@/components";
import { RecomendationResult } from "@/views";
const RecomendationPageResult = () => {
  return (
    <>
      <div className="mx-4 lg:mx-14 mt-4 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[
            { label: "Rekomendasi", href: "/recomendation-page" },
            { label: "Hasil", href: "#" },
          ]}
        />
      </div>
      <RecomendationResult />
    </>
  );
};

export default RecomendationPageResult;
