"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Baby, BookOpen, Briefcase, School, Shield, Sun, Loader2, Target, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { loadMoreTrainings } from '@/app/actions/trainingActions';
// SỬA: Import custom hook useTraining
import { useTraining } from '@/context/TrainingProvider';

// ... (phần code iconMap và ProgramCard giữ nguyên không đổi) ...
const iconMap = {
    'mau-giao': <Baby className="h-6 w-6" />,
    'tieu-hoc': <School className="h-6 w-6" />,
    'thcs': <Shield className="h-6 w-6" />,
    'ielts': <BookOpen className="h-6 w-6" />,
    'summer-camp': <Sun className="h-6 w-6" />,
    'business-english': <Briefcase className="h-6 w-6" />,
};

// Danh sách các icon chung để lựa chọn ngẫu nhiên
const genericIcons = [
    <BookOpen className="h-6 w-6" />,
    <Briefcase className="h-6 w-6" />,
    <School className="h-6 w-6" />,
    <Shield className="h-6 w-6" />,
    <Target className="h-6 w-6" />,
    <Lightbulb className="h-6 w-6" />
];


const getIconForProgram = (slug) => {
    const key = Object.keys(iconMap).find(k => slug.includes(k));
    if (key) {
        return iconMap[key];
    }
    // Nếu không tìm thấy icon cụ thể, chọn ngẫu nhiên một icon từ danh sách chung
    const randomIndex = Math.floor(Math.random() * genericIcons.length);
    return genericIcons[randomIndex];
};

function ProgramCard({ program, reverse = false }) {
    return (
        <div id={program.slug} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Link href={`/training/${program.slug}`} className={cn(reverse && "md:order-last")}>
                <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer">
                    <Image
                        src={program.thumbnail}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </Link>
            <div className="prose prose-lg max-w-none">
                <Badge variant="secondary" className="mb-2 text-base">{program.age}</Badge>
                <h3 className="flex items-center gap-3 mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
                    <span className="text-orange-500">{getIconForProgram(program.slug)}</span>
                    {program.title}
                </h3>
                <div 
                    className="mt-4 leading-relaxed text-gray-600 line-clamp-3" 
                    dangerouslySetInnerHTML={{ __html: program.description }} 
                />
                <div className="mt-6">
                    <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-base">
                        <Link href={`/training/${program.slug}`}>
                            Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const PROGRAMS_PER_PAGE = 2;

function ProgramsList({ initialTrainingData }) {
    // SỬA: Lấy state từ Context thay vì useState cục bộ
    const {
        programs, setPrograms,
        currentPage, setCurrentPage,
        totalPages, setTotalPages,
        isInitialized, setIsInitialized
    } = useTraining();

    const [isLoading, setIsLoading] = useState(false);

    // SỬA: Logic khởi tạo state trong Context
    useEffect(() => {
        // Nếu context chưa được khởi tạo, dùng dữ liệu từ server để khởi tạo
        if (!isInitialized) {
            setPrograms(initialTrainingData.data || []);
            setCurrentPage(initialTrainingData.currentPage || 1);
            setTotalPages(initialTrainingData.totalPages || 1);
            setIsInitialized(true); // Đánh dấu đã khởi tạo
        }
    }, [initialTrainingData, isInitialized, setPrograms, setCurrentPage, setTotalPages, setIsInitialized]);


    const handleLoadMore = async () => {
        if (currentPage >= totalPages) return;
        setIsLoading(true);
        const nextPage = currentPage + 1;
        
        try {
            const newData = await loadMoreTrainings(nextPage, PROGRAMS_PER_PAGE);
            
            if (newData.error) {
                throw new Error(newData.error);
            }

            // SỬA: Cập nhật state trong context
            setPrograms(prev => [...prev, ...newData.data]);
            setCurrentPage(nextPage);

        } catch (error) {
            console.error("Failed to load more programs:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    // Nếu chưa khởi tạo xong, không render gì cả để tránh FOUC (Flash of Unstyled Content)
    if (!isInitialized) {
        return null;
    }

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
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} program={program} reverse={index % 2 !== 0} />
                    ))}
                </div>
                <div className="text-center mt-20">
                    {currentPage < totalPages && (
                        <Button
                            size="lg"
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-10 py-6 cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Đang tải...
                                </>
                            ) : (
                                "Xem thêm"
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProgramsList;