import { NEWS_ARTICLES, NEWS_CATEGORIES } from "@/lib/news-data";
import { slugify } from "@/lib/utils";
import NewsPage from "@/pages/News/NewsPage";
import { notFound } from "next/navigation";

// Hàm này sẽ tạo các trang tĩnh cho mỗi slug danh mục tại thời điểm build
export async function generateStaticParams() {
  return NEWS_CATEGORIES.map((category) => ({
    slug: slugify(category.name),
  }));
}

// Hàm này tạo metadata động cho mỗi trang danh mục
export async function generateMetadata({ params }) {
  // FIX: Thêm await và destructuring params
  const { slug } = await params;
  const category = NEWS_CATEGORIES.find((cat) => slugify(cat.name) === slug);

  if (!category) {
    return {
      title: "Không tìm thấy danh mục",
    };
  }

  return {
    title: `${category.name} - Tin tức & Sự kiện | A&U English`,
    description: `Các bài viết, tin tức và sự kiện thuộc danh mục ${category.name} tại Hệ thống Anh ngữ A&U.`,
  };
}

// Component chính của trang danh mục
export default async function CategoryPage({ params }) {
  // FIX: Thêm await và destructuring params
  const { slug } = await params;

  const filteredArticles = NEWS_ARTICLES.filter(
    (article) => slugify(article.category) === slug
  );

  // Nếu không có bài viết nào hoặc slug không hợp lệ, có thể hiển thị trang 404
  if (filteredArticles.length === 0) {
    const isValidCategory = NEWS_CATEGORIES.some(
      (cat) => slugify(cat.name) === slug
    );
    if (!isValidCategory) {
      notFound();
    }
  }

  // Tái sử dụng component NewsPage và truyền vào danh sách bài viết đã được lọc
  return <NewsPage articles={filteredArticles} />;
}
