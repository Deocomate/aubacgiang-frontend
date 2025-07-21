/* src/app/(main)/parents-corner/page.js */
import ParentsCornerPage from "@/pages_jsx/ParentsCorner/ParentsCornerPage";
import { getKnowledgeNews } from "@/services/newsService";
import { getDocuments } from "@/services/documentService";
import { getTestimonials } from "@/services/parentsCornerService"; // THÊM MỚI

export const metadata = {
  title: "Góc phụ huynh - Đồng hành cùng con | A&U English",
  description:
    "Nguồn tài nguyên, cẩm nang và thông tin hữu ích dành cho phụ huynh tại A&U English để cùng con chinh phục tiếng Anh hiệu quả.",
};

export default async function ParentsCorner() {
  const [handbookArticles, documents, testimonials] = await Promise.all([
    getKnowledgeNews(6),
    getDocuments(4),
    getTestimonials(6)
  ]);
  
  return <ParentsCornerPage handbookArticles={handbookArticles} documents={documents} testimonials={testimonials} />;
}