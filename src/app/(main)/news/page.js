// src/app/(main)/news/page.js
import NewsPage from "@/pages/News/NewsPage";

export const metadata = {
  title: "Tin tức & Sự kiện - A & U English",
  description: "Cập nhật những tin tức, sự kiện và thông báo mới nhất từ Hệ thống Anh ngữ A&U.",
};

export default function News() {
  return <NewsPage />;
}