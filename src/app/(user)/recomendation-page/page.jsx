import { Breadcrumb } from "@/components";
import { RecomendationUser } from "@/views";

const RecomendationUserPage = () => {
  return (
    <>
      <div className="mx-4 lg:mx-14 mt-4 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[{ label: "Rekomendasi", href: "/recomendation-page" }]}
        />
      </div>

      <RecomendationUser />
    </>
  );
};

export default RecomendationUserPage;
