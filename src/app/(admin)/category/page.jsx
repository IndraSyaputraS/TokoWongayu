import { Category } from "@/views";
import { Breadcrumb } from "@/components";
import { requireAuth } from "@/libs/authCheck";

const CategoryPage = async () => {
  const user = await requireAuth();
  return (
    <>
      <Breadcrumb items={[{ label: "Category", href: "/category" }]} />
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
        Category
      </h2>
      <Category />
    </>
  );
};

export default CategoryPage;
