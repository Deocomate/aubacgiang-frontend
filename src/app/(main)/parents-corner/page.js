/* src/app/(main)/parents-corner/page.js */
import ParentsCornerPage from "@/pages/ParentsCorner/ParentsCornerPage";
import { getKnowledgeNews } from "@/services/newsService";
import { getDocuments } from "@/services/documentService"; // THÊM MỚI

export const metadata = {
  title: "Góc phụ huynh - Đồng hành cùng con | A&U English",
  description:
    "Nguồn tài nguyên, cẩm nang và thông tin hữu ích dành cho phụ huynh tại A&U English để cùng con chinh phục tiếng Anh hiệu quả.",
};

export default async function ParentsCorner() {
  // SỬA: Dùng Promise.all để fetch song song
  const [handbookArticles, documents] = await Promise.all([
    getKnowledgeNews(6),
    getDocuments(4)
  ]);
  
  // SỬA: Truyền thêm prop `documents`
  return <ParentsCornerPage handbookArticles={handbookArticles} documents={documents} />;
}