import {
  CirclesFour,
  HardDrive,
  HouseLine,
  Note,
  Package,
  Stack,
  Tag,
} from "@phosphor-icons/react/dist/ssr";

async function fetchData(endpoint) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

const Dashboard = async () => {
  const [
    brands,
    categories,
    benefits,
    products,
    calculationData,
    bundleCategories,
  ] = await Promise.all([
    fetchData("brands"),
    fetchData("categories"),
    fetchData("benefits"),
    fetchData("products"),
    fetchData("calculation-data"),
    fetchData("bundle-categories"),
  ]);

  const stats = [
    { label: "Brand", icon: Tag, total: brands.length },
    { label: "Category", icon: CirclesFour, total: categories.length },
    { label: "Benefit", icon: Note, total: benefits.length },
    { label: "Product", icon: Package, total: products.length },
    {
      label: "Calculation Data",
      icon: HardDrive,
      total: calculationData.length,
    },
    { label: "Bundle Category", icon: Stack, total: bundleCategories.length },
  ];

  return (
    <>
      <nav className="mb-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
              <HouseLine size={16} className="mr-1" />
              Dashboard
            </a>
          </li>
        </ol>
      </nav>

      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-2 border-b border-gray-300 dark:border-gray-600 pb-2">
              <stat.icon size={24} weight="fill" className="text-gray-500" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.label}
              </h5>
            </div>
            <p className="grid grid-cols-2 font-normal text-gray-700 dark:text-gray-400">
              Total Data
              <a className="flex justify-end items-end">{stat.total}</a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
