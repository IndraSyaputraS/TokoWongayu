import { RecomendationResult } from "@/views";
import {
  ArrowRight,
  CaretRight,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";
const RecomendationPageResult = () => {
  return (
    <>
      <nav className="mx-14 my-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/home-page"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HouseLine size={16} className="mr-1" />
              Home
            </a>
          </li>
          <li className="inline-flex items-center">
            <a
              href="/recomendation-page"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              <CaretRight size={16} color="#9ca3af" weight="bold" />
                Rekomendasi
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <CaretRight size={16} color="#9ca3af" weight="bold" />
              <span className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                Hasil
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <RecomendationResult />
    </>
  );
};

export default RecomendationPageResult;
