"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Baby, BookOpen, Briefcase, School, Shield, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const trainingPrograms = [
    {
        id: 'mau-giao',
        title: 'Tiếng Anh Mẫu giáo',
        age: '3 - 6 tuổi',
        description: 'Bé làm quen với tiếng Anh qua các hoạt động vui nhộn, bài hát và trò chơi, tạo nền tảng phát âm chuẩn và niềm yêu thích ngôn ngữ từ sớm.',
        imageSrc: '/assets/images/R5AT4202.jpg',
        icon: <Baby className="h-6 w-6" />,
    },
    {
        id: 'tieu-hoc',
        title: 'Tiếng Anh Tiểu học',
        age: '6 - 11 tuổi',
        description: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết theo chuẩn Cambridge, giúp học sinh tự tin giao tiếp và đạt kết quả cao trong các kỳ thi.',
        imageSrc: '/assets/images/R5AT3961.jpg',
        icon: <School className="h-6 w-6" />,
    },
    {
        id: 'thcs',
        title: 'Tiếng Anh THCS',
        age: '11 - 13 tuổi',
        description: 'Nâng cao ngữ pháp, từ vựng và kỹ năng học thuật, chuẩn bị cho các kỳ thi chuyển cấp và định hướng lấy chứng chỉ quốc tế.',
        imageSrc: '/assets/images/R5AT3931.jpg',
        icon: <Shield className="h-6 w-6" />,
    },
    {
        id: 'ielts',
        title: 'Luyện thi IELTS',
        age: '13 tuổi trở lên',
        description: 'Lộ trình cá nhân hóa với các chiến thuật làm bài hiệu quả, tập trung vào việc tối đa hóa điểm số cho cả 4 kỹ năng, phục vụ mục tiêu du học và sự nghiệp.',
        imageSrc: '/assets/images/R5AT4255.jpg',
        icon: <BookOpen className="h-6 w-6" />,
    },
    {
        id: 'summer-camp',
        title: 'Trại Hè Tiếng Anh',
        age: '7 - 14 tuổi',
        description: 'Trải nghiệm mùa hè sôi động với các hoạt động dự án, dã ngoại và thực hành tiếng Anh trong môi trường thực tế, nâng cao kỹ năng mềm và sự tự tin.',
        imageSrc: '/assets/images/R5AT3865.jpg',
        icon: <Sun className="h-6 w-6" />,
    },
    {
        id: 'business-english',
        title: 'Tiếng Anh Doanh Nghiệp',
        age: 'Người đi làm',
        description: 'Chương trình thiết kế riêng cho doanh nghiệp, tập trung vào kỹ năng giao tiếp, thuyết trình, viết email và đàm phán trong môi trường công sở quốc tế.',
        imageSrc: '/assets/images/R5AT4168.jpg',
        icon: <Briefcase className="h-6 w-6" />,
    },
];

const PROGRAMS_PER_PAGE = 2;

function ProgramCard({ program, reverse = false }) {
    return (
        <div id={program.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={cn("relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg", reverse && "md:order-last")}>
                <Image
                    src={program.imageSrc}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="prose prose-lg max-w-none">
                <Badge variant="secondary" className="mb-2 text-base">{program.age}</Badge>
                <h3 className="flex items-center gap-3 mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
                    <span className="text-orange-500">{program.icon}</span>
                    {program.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                    {program.description}
                </p>
                <div className="mt-6">
                    <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-base">
                        <Link href={`/training/${program.id}`}>
                            Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function ProgramsList() {
    const [visibleCount, setVisibleCount] = useState(PROGRAMS_PER_PAGE);

    const displayPrograms = trainingPrograms.slice(0, visibleCount);
    
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + PROGRAMS_PER_PAGE);
    };

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Lộ Trình Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Chương Trình Đào Tạo Nổi Bật
                    </p>
                </div>
                <div className="space-y-24">
                    {displayPrograms.map((program, index) => (
                        <ProgramCard key={program.id} program={program} reverse={index % 2 !== 0} />
                    ))}
                </div>
                 <div className="text-center mt-20">
                    {visibleCount < trainingPrograms.length && (
                        <Button
                            size="lg"
                            onClick={handleLoadMore}
                            // --- FIX: Thêm class `cursor-pointer` ---
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-10 py-6 cursor-pointer"
                        >
                            Xem thêm
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProgramsList;