import BundlingOverview from "@/components/BundlingOverview";
import { CaretRight, HouseLine } from "@phosphor-icons/react/dist/ssr";

async function fetchBundlingById(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recomendations/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch bundling data");

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const breadcrumbItems = [
  {
    label: "Home",
    href: "/home-page",
    icon: <HouseLine size={16} className="mr-1" />,
  },
  { label: "Rekomendasi", href: "/recomendation-page" },
  { label: "Hasil", href: "/recomendation-page/result" },
  { label: "Detail", href: null },
];

const ProductOverviewPage = async ({ params }) => {
  const { id } = await params;
  const bundlingData = await fetchBundlingById(id);

  if (!bundlingData) {
    return (
      <div className="p-8 text-red-600">
        Product not found or failed to fetch data.
      </div>
    );
  }

  return (
    <>
      <nav className="mx-14 my-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <CaretRight
                  size={16}
                  color="#9ca3af"
                  weight="bold"
                  className="mx-1"
                />
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.icon || null}
                  {item.label}
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div>
        <p className="text-4xl font-bold mx-14">{bundlingData.signature}</p>
        <BundlingOverview data={bundlingData} />
      </div>
    </>
  );
};

export default ProductOverviewPage;
