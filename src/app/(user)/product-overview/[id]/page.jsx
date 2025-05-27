import { Breadcrumb } from "@/components";
import { ProductOverview } from "@/views";

const ProductOverviewPage = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <div className="mx-4 my-4 lg:mx-14 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[
            { label: "Produk", href: "/product-menu" },
            { label: "Detail", href: "#" },
          ]}
        />
      </div>
      <div className="px-4 lg:px-14">
          <span className="text-4xl font-bold">Product Detail</span>
      </div>
      <ProductOverview productId={id} />
    </>
  );
};

export default ProductOverviewPage;
