import { Breadcrumb, Filter, ProductCard } from "@/components";
import { Faders } from "@phosphor-icons/react/dist/ssr";

const ProductMenuPage = async () => {
  return (
    <>
      <div className="mx-4 my-4 flex lg:mx-14">
        <Breadcrumb
          root={{ label: "Home", href: "/home-page" }}
          items={[{ label: "Produk", href: "/product-menu" }]}
        />
      </div>
      <div className="px-4">
        <span className="text-4xl text-black font-bold lg:px-10">Produk</span>
        <ProductCard visibleCount={12} disableAnimation={true} />
      </div>
    </>
  );
};

export default ProductMenuPage;
