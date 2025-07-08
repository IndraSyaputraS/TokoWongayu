import { Breadcrumb } from "@/components";
import BundlingOverview from "@/components/BundlingOverview";

const ProductOverviewPage = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return (
      <div className="p-8 text-red-600">
        Product not found or failed to fetch data.
      </div>
    );
  }

  return (
    <>
      <div className="mx-4 lg:mx-14 mt-4 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[
            { label: "Rekomendasi", href: "/recomendation-page" },
            { label: "Hasil", href: "/recomendation-page/result" },
            { label: "Detail", href: "#" },
          ]}
        />
      </div>
      <div>
        <BundlingOverview bundlingId={id} />
      </div>
    </>
  );
};

export default ProductOverviewPage;
