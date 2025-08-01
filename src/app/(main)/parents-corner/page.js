/* src/app/(main)/parents-corner/page.js */
import ParentsCornerPage from "@/pages_jsx/ParentsCorner/ParentsCornerPage";
import {getKnowledgeNews} from "@/services/newsService";
import {getDocuments} from "@/services/documentService";
import {getTestimonials} from "@/services/parentsCornerService";
// THÊM: Import service để lấy dữ liệu homepage (chứa fags)
import {getHomepageData} from "@/services/homeService";

export const metadata = {
    title: "Góc phụ huynh - Đồng hành cùng con | A&U English",
    description: "Nguồn tài nguyên, cẩm nang và thông tin hữu ích dành cho phụ huynh tại A&U English để cùng con chinh phục tiếng Anh hiệu quả.",
};

export default async function ParentsCorner() {
    // SỬA: Thêm getHomepageData vào Promise.all
    const [handbookArticles, documents, testimonials, homeData] = await Promise.all([getKnowledgeNews(6), getDocuments(4), getTestimonials(6), getHomepageData() // Lấy cả dữ liệu trang chủ
    ]);

    // SỬA: Truyền thêm prop `faqs` vào component
    return <ParentsCornerPage
        handbookArticles={handbookArticles}
        documents={documents}
        testimonials={testimonials}
        faqs={homeData?.fags || []}
    />;
}