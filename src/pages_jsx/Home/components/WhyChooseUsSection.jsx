// src/pages_jsx/Home/components/WhyChooseUsSection.jsx
import React from 'react';
import { Users, BookOpen, Sparkles, ShieldCheck, TrendingUp, Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
    {
        icon: <Users className="h-10 w-10 text-orange-500" />,
        title: 'Đội Ngũ Giáo Viên Tâm Huyết',
        description: '100% giáo viên bản xứ (Anh, Úc, Mỹ) và Việt Nam đạt chuẩn, có chứng chỉ giảng dạy quốc tế, giàu kinh nghiệm và áp dụng phương pháp "Coach" thay vì "Teach".'
    },
    {
        icon: <Home className="h-10 w-10 text-green-500" />,
        title: 'Cơ Sở Vật Chất Hiện Đại',
        description: 'Phòng học rộng rãi trên 35m2, trang bị màn hình cảm ứng cỡ lớn, thư viện, khu vui chơi trong nhà và ngoài trời, tạo môi trường học tập và khám phá tự nhiên nhất.'
    },
    {
        icon: <BookOpen className="h-10 w-10 text-blue-500" />,
        title: 'Lộ Trình Đào Tạo Toàn Diện',
        description: 'Các chương trình học đa dạng từ Pre-Starters cho trẻ mẫu giáo đến các khóa luyện thi IELTS, tiếng Anh doanh nghiệp và du học, đáp ứng mọi nhu cầu.'
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
        title: 'Cam Kết Chất Lượng',
        description: 'Chúng tôi không ngừng nỗ lực để mang đến cơ hội tiếp cận và làm chủ kiến thức ngôn ngữ, giúp học viên tự tin giao tiếp và phát triển toàn diện.'
    },
    {
        icon: <Sparkles className="h-10 w-10 text-yellow-500" />,
        title: 'Môi Trường Truyền Cảm Hứng',
        description: 'A&U không chỉ là nơi học, mà là một cộng đồng nơi học viên được giao lưu, trao đổi kiến thức và trải nghiệm văn hóa đa dạng trong một môi trường đầy cảm hứng.'
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
        title: 'Kết Quả Vượt Trội',
        description: 'Với hơn 5000+ học viên đã và đang đào tạo, cùng sự tin tưởng của 300+ phụ huynh trong năm 2022, A&U tự hào về những thành tựu đã đạt được.'
    }
];

function WhyChooseUsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Tại sao chọn A&U English?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Chúng tôi tự hào mang đến một môi trường học tập Anh ngữ toàn diện, nơi chất lượng và sự tận tâm luôn được đặt lên hàng đầu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="text-center p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400"
                        >
                            <CardHeader className="items-center">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-5 mx-auto">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-800 tracking-tight">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardDescription className="text-gray-600 text-base">
                                {feature.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;