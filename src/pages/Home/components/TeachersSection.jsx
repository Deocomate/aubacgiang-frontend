import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Award, Globe, UserCheck, Linkedin, Mail } from 'lucide-react';
const qualityStandards = [
    {
        icon: <UserCheck className="h-8 w-8 text-white" />,
        title: "100% Đạt Chuẩn",
        description: "Giáo viên đạt chuẩn 100% theo yêu cầu của Sở Giáo dục và Đào tạo."
    },
    {
        icon: <Globe className="h-8 w-8 text-white" />,
        title: "Giáo Viên Bản Xứ",
        description: "Đến từ các quốc gia nói tiếng Anh chuẩn như Anh, Úc, Mỹ, Canada, và Ireland."
    },
    {
        icon: <Award className="h-8 w-8 text-white" />,
        title: "Bằng Cấp Quốc Tế",
        description: "Có bằng cử nhân, thạc sĩ và các chứng chỉ giảng dạy ngoại ngữ quốc tế (TEFL, TESOL)."
    }
];


// ... (Giữ nguyên mảng teachersData)
const teachersData = [
    {
        name: 'Mr. Jai Kattenberg',
        role: 'Giáo viên Tiếng Anh',
        nationality: 'Quốc tịch Úc',
        qualifications: [
            "Cử nhân Đại học Griffith",
            "Chứng chỉ 120 hours TEFL"
        ],
        imageSrc: '/assets/images/R5AT4155.jpg',
        fallback: 'JK'
    },
    {
        name: 'Ms. Minh Nguyệt',
        role: 'Giám đốc Trung tâm',
        nationality: 'Việt Nam',
        qualifications: [
            "Giám đốc Ngoại ngữ A&U",
            "Cử nhân Sư phạm Tiếng Anh - ĐHQGHN"
        ],
        imageSrc: '/assets/images/R5AT4240.jpg',
        fallback: 'MN'
    },
    {
        name: 'Mr. Welsh Ilya',
        role: 'Giáo viên Tiếng Anh',
        nationality: 'Quốc tịch Anh',
        qualifications: [
            "Thạc sĩ University College London",
            "Chứng chỉ TEFL"
        ],
        imageSrc: '/assets/images/R5AT4278.jpg',
        fallback: 'WI'
    }
];


function TeachersSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Phần header giữ nguyên */}
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Đội Ngũ Giảng Dạy</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Giáo Viên Tâm Huyết & Chuyên Môn Cao
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Tại A&U, chúng tôi tin rằng giáo viên là người truyền cảm hứng. Với triết lý <span className="font-semibold text-orange-600">"We don't teach - We coach"</span>, đội ngũ của chúng tôi là những huấn luyện viên, những người bạn đồng hành cùng học viên trên con đường chinh phục tiếng Anh.
                    </p>
                </div>

                {/* Phần quality standards giữ nguyên */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {qualityStandards.map((standard) => (
                        <div key={standard.title} className="flex flex-col items-center text-center p-6 bg-orange-500 text-white rounded-lg shadow-md">
                            <div className="mb-4">{standard.icon}</div>
                            <h3 className="text-xl font-bold">{standard.title}</h3>
                            <p className="mt-2 text-sm text-orange-100">{standard.description}</p>
                        </div>
                    ))}
                </div>

                {/* --- PHẦN CODE ĐƯỢC CẬP NHẬT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {teachersData.map((teacher, index) => (
                        <Card key={index} className="flex flex-col text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            {/* CardHeader chứa ảnh, tên và chức vụ */}
                            <CardHeader className="items-center">
                                <Avatar className="w-32 h-32 mb-4 border-4 border-orange-200 mx-auto">
                                    <AvatarImage src={teacher.imageSrc} alt={`Chân dung ${teacher.name}`} />
                                    <AvatarFallback className="text-4xl bg-orange-100 text-orange-600">{teacher.fallback}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-2xl font-bold text-gray-900">{teacher.name}</CardTitle>
                                <CardDescription className="text-base text-orange-600 font-medium min-h-[3rem] flex items-center justify-center">
                                    {teacher.role} - {teacher.nationality}
                                </CardDescription>
                            </CardHeader>

                            {/* CardContent sẽ co giãn để lấp đầy không gian */}
                            <CardContent className="flex-grow mt-4 text-left text-gray-600 w-full">
                                <ul className="list-disc list-inside space-y-1">
                                    {teacher.qualifications.map((q, i) => (
                                        <li key={i}>{q}</li>
                                    ))}
                                </ul>
                            </CardContent>

                            {/* CardFooter luôn ở dưới cùng */}
                            <CardFooter className="justify-center gap-4 pt-4 mt-4 border-t border-gray-100">
                                <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
                                <Mail className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeachersSection;