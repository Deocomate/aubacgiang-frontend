// src/pages_jsx/Teachers/components/QualityStandardsSection.jsx
import React from 'react';
import { Award, Globe, UserCheck } from 'lucide-react';

const standards = [
    {
        icon: <UserCheck className="h-10 w-10 text-white" />,
        title: "100% Đạt Chuẩn",
        description: "Tỷ lệ giáo viên tại A&U đạt chuẩn theo yêu cầu của Sở Giáo dục và Đào tạo."
    },
    {
        icon: <Globe className="h-10 w-10 text-white" />,
        title: "Giáo Viên Bản Xứ",
        description: "Đến từ 5 quốc gia: Anh, Úc, Mỹ, Canada và Ireland, mang lại môi trường phát âm chuẩn quốc tế."
    },
    {
        icon: <Award className="h-10 w-10 text-white" />,
        title: "Bằng Cấp & Kinh Nghiệm",
        description: "Có bằng cử nhân trở lên, chứng chỉ giảng dạy quốc tế (TEFL, TESOL) và kinh nghiệm giảng dạy."
    }
];

function QualityStandardsSection() {
    return (
        <section className="bg-orange-500 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {standards.map((standard, index) => (
                        <div key={index} className="flex flex-col items-center text-center text-white">
                            <div className="mb-4">{standard.icon}</div>
                            <h3 className="text-2xl font-bold">{standard.title}</h3>
                            <p className="mt-2 text-base text-orange-100 max-w-xs">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QualityStandardsSection;