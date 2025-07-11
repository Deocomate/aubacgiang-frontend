// src/pages/Home/components/FaqSection.jsx
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Dữ liệu cho các câu hỏi thường gặp (FAQ)
const faqData = [
    {
        question: "Chất lượng đội ngũ giáo viên tại A&U English như thế nào?",
        answer: "100% giáo viên tại A&U đạt chuẩn theo yêu cầu của Sở Giáo dục. Giáo viên nước ngoài là người bản xứ (Anh, Úc, Mỹ...) có bằng cử nhân trở lên và chứng chỉ giảng dạy quốc tế như TEFL. Triết lý của chúng tôi là 'We don't teach - We coach', giáo viên sẽ là những huấn luyện viên tâm huyết đồng hành cùng học viên."
    },
    {
        question: "Trung tâm có những khóa học nào phù hợp cho các lứa tuổi khác nhau?",
        answer: "A&U có lộ trình đào tạo toàn diện cho mọi lứa tuổi: Pre-Starters (Mẫu giáo - Lớp 2), Starters (Lớp 1-4), Movers (Lớp 2-5), Flyers (Lớp 4-7), và các khóa học cho người lớn, luyện thi IELTS, tiếng Anh doanh nghiệp."
    },
    {
        question: "Quy mô lớp học và môi trường học tập tại trung tâm ra sao?",
        answer: "Toàn bộ phòng học đều có diện tích trên 35m², trang bị màn hình cảm ứng cỡ lớn và giáo trình điện tử. Ngoài ra, trung tâm còn có thư viện, khu vui chơi trong nhà và ngoài trời để tạo môi trường học tập và khám phá tự nhiên, truyền cảm hứng nhất cho học viên."
    },
    {
        question: "Làm thế nào để đăng ký một khóa học tại A&U English?",
        answer: "Quý phụ huynh và học viên có thể đến trực tiếp trung tâm tại địa chỉ: Tầng 1, nhà B, nhà ở sinh viên, đường Hoàng Văn Thụ, Bắc Giang, hoặc liên hệ qua hotline 097 979 84 26 để được tư vấn và hỗ trợ đăng ký nhanh nhất."
    },
];

function FaqSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Giải Đáp Thắc Mắc</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Câu Hỏi Thường Gặp
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Những thắc mắc phổ biến nhất về các khóa học và dịch vụ tại A&U English đã được chúng tôi tổng hợp tại đây để bạn tiện theo dõi.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}>
                                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-gray-600 leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;