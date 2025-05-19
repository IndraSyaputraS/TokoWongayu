import { Breadcrumb } from "@/components";
import { Dashboard } from "@/views";
import { HouseLine } from "@phosphor-icons/react/dist/ssr";

const DashboardPage = async () => {
  return (
    <>
      <Breadcrumb/>

      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Dashboard
      </h2>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
