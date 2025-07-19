"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Award, Globe, UserCheck, Facebook, Mail } from 'lucide-react';

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

const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
};

function TeachersSection({ teachers }) {
    const router = useRouter();

    const handleCardClick = (slug) => {
        router.push(`/teachers/${slug}`);
    };

    const handleSocialClick = (e, url) => {
        e.stopPropagation(); // Prevent card's onClick from firing
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Đội Ngũ Giảng Dạy</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Giáo Viên Tâm Huyết & Chuyên Môn Cao
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Với triết lý <span className="font-semibold text-orange-600">"We don't teach - We coach"</span>, đội ngũ của chúng tôi là những người bạn đồng hành cùng học viên trên con đường chinh phục tiếng Anh.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {qualityStandards.map((standard) => (
                        <div key={standard.title} className="flex flex-col items-center text-center p-6 bg-orange-500 text-white rounded-lg shadow-md">
                            <div className="mb-4">{standard.icon}</div>
                            <h3 className="text-xl font-bold">{standard.title}</h3>
                            <p className="mt-2 text-sm text-orange-100">{standard.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {teachers.map((teacher) => (
                        <Card 
                            key={teacher.id} 
                            onClick={() => handleCardClick(teacher.slug)}
                            className="flex flex-col text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full cursor-pointer"
                        >
                            <CardHeader className="items-center">
                                <Avatar className="w-32 h-32 mb-4 border-4 border-orange-200 mx-auto">
                                    <AvatarImage src={teacher.avatar} alt={`Portrait of ${teacher.full_name}`} />
                                    <AvatarFallback className="text-4xl bg-orange-100 text-orange-600">{getInitials(teacher.full_name)}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-2xl font-bold text-gray-900">{teacher.full_name}</CardTitle>
                                <CardDescription className="text-base text-orange-600 font-medium min-h-[3rem] flex items-center justify-center">
                                    {teacher.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow mt-4 text-left text-gray-600 w-full">
                                <ul className="list-disc list-inside space-y-1">
                                    {teacher.qualifications.map((q, i) => (
                                        <li key={i}>{q}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="justify-center gap-4 pt-4 mt-4 border-t border-gray-100">
                                <div
                                    onClick={(e) => handleSocialClick(e, teacher.facebook)}
                                    aria-label={`Facebook of ${teacher.full_name}`}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Facebook className="h-5 w-5 text-gray-400 group-hover:text-orange-500" />
                                </div>
                                <div
                                    onClick={(e) => handleSocialClick(e, `mailto:${teacher.email}`)}
                                    aria-label={`Email ${teacher.full_name}`}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-orange-500" />
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeachersSection;