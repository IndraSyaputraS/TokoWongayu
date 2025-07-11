import { Breadcrumb } from "@/components";
import { ProductOverview } from "@/views";

const ProductOverviewPage = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <div className="mx-4 mt-4 lg:mx-14 flex">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[
            { label: "Produk", href: "/product-menu" },
            { label: "Detail", href: "#" },
          ]}
        />
      </div>
      <div className="px-4 lg:px-14">
          <span className="text-2xl md:text-4xl text-black font-bold">Detail Produk</span>
      </div>
      <ProductOverview productId={id} />
    </>
  );
};

export default ProductOverviewPage;
