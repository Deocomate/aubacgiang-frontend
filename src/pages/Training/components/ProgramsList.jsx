// src/pages/Training/components/ProgramsList.jsx
"use client";

// SỬA: Thêm useRef
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Baby, BookOpen, Briefcase, School, Shield, Sun, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { loadMoreTrainings } from '@/app/actions/trainingActions';

// ... (phần code iconMap và ProgramCard giữ nguyên không đổi) ...
const iconMap = {
    'mau-giao': <Baby className="h-6 w-6" />,
    'tieu-hoc': <School className="h-6 w-6" />,
    'thcs': <Shield className="h-6 w-6" />,
    'ielts': <BookOpen className="h-6 w-6" />,
    'summer-camp': <Sun className="h-6 w-6" />,
    'business-english': <Briefcase className="h-6 w-6" />,
};

const getIconForProgram = (slug) => {
    const key = Object.keys(iconMap).find(k => slug.includes(k));
    return key ? iconMap[key] : <BookOpen className="h-6 w-6" />;
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
// ... (hết phần không đổi) ...

const PROGRAMS_PER_PAGE = 2;
// THÊM: Định nghĩa một key để lưu vào storage
const STORAGE_KEY = 'trainingPageState';

function ProgramsList({ initialTrainingData }) {
    const [programs, setPrograms] = useState(initialTrainingData.data || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(initialTrainingData.totalPages || 1);
    const [isLoading, setIsLoading] = useState(false);
    
    // THÊM: Dùng isInitialMount để chỉ lưu state sau lần render đầu tiên
    const isInitialMount = useRef(true);

    // THÊM: useEffect để khôi phục state từ sessionStorage khi component mount
    useEffect(() => {
        try {
            const savedState = sessionStorage.getItem(STORAGE_KEY);
            if (savedState) {
                const { savedPrograms, savedCurrentPage, savedTotalPages } = JSON.parse(savedState);
                // Chỉ khôi phục nếu có nhiều hơn dữ liệu ban đầu
                if (savedPrograms.length > initialTrainingData.data.length) {
                    setPrograms(savedPrograms);
                    setCurrentPage(savedCurrentPage);
                    setTotalPages(savedTotalPages);
                }
            }
        } catch (error) {
            console.error("Could not restore state from sessionStorage:", error);
        }
    }, [initialTrainingData.data.length]); // Chỉ chạy 1 lần khi component mount

    // THÊM: useEffect để lưu state vào sessionStorage khi nó thay đổi
    useEffect(() => {
        // Bỏ qua lần mount đầu tiên để không ghi đè state đã khôi phục
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        try {
            const stateToSave = {
                savedPrograms: programs,
                savedCurrentPage: currentPage,
                savedTotalPages: totalPages,
            };
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
        } catch (error) {
            console.error("Could not save state to sessionStorage:", error);
        }
    }, [programs, currentPage, totalPages]);


    const handleLoadMore = async () => {
        if (currentPage >= totalPages) return;
        setIsLoading(true);
        const nextPage = currentPage + 1;
        
        try {
            const newData = await loadMoreTrainings(nextPage, PROGRAMS_PER_PAGE);
            
            if (newData.error) {
                throw new Error(newData.error);
            }

            setPrograms(prev => [...prev, ...newData.data]);
            setCurrentPage(nextPage);
        } catch (error) {
            console.error("Failed to load more programs:", error);
        } finally {
            setIsLoading(false);
        }
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