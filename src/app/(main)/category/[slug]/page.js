/* ===== src\app\(main)\category\[slug]\page.js ===== */
import { getNewsByCategorySlug, getNewsCategories } from "@/services/newsService";
import NewsPage from "@/pages/News/NewsPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const newsData = await getNewsByCategorySlug(slug);

  if (!newsData || !newsData.category) {
    return {
      title: "Không tìm thấy danh mục",
    };
  }

  return {
    title: `${newsData.category.name} - Tin tức & Sự kiện | A&U English`,
    description: `Các bài viết, tin tức và sự kiện thuộc danh mục ${newsData.category.name} tại Hệ thống Anh ngữ A&U.`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = params;
  const page = searchParams?.page;
  const search = searchParams?.search;
  const pageSize = searchParams?.pageSize;
  
  const [newsData, categories] = await Promise.all([
      getNewsByCategorySlug(slug, { page, search, pageSize }),
      getNewsCategories()
  ]);

  if (!newsData.category) {
      notFound();
  }

  return <NewsPage newsData={newsData} categories={categories} categoryInfo={newsData.category} />;
}