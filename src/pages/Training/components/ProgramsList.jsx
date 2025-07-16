import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Baby, BookOpen, Briefcase, School, Shield, Sun, Users, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

// Fake JSON data for training programs
const trainingPrograms = [
    {
        id: 'mau-giao', // Sửa href thành id
        title: 'Tiếng Anh Mẫu giáo',
        age: '3 - 6 tuổi',
        description: 'Bé làm quen với tiếng Anh qua các hoạt động vui nhộn, bài hát và trò chơi, tạo nền tảng phát âm chuẩn và niềm yêu thích ngôn ngữ từ sớm.',
        imageSrc: '/assets/images/R5AT4202.jpg',
        icon: <Baby className="h-6 w-6" />,
    },
    {
        id: 'tieu-hoc', // Sửa href thành id
        title: 'Tiếng Anh Tiểu học',
        age: '6 - 11 tuổi',
        description: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết theo chuẩn Cambridge, giúp học sinh tự tin giao tiếp và đạt kết quả cao trong các kỳ thi.',
        imageSrc: '/assets/images/R5AT3961.jpg',
        icon: <School className="h-6 w-6" />,
    },
    {
        id: 'thcs', // Sửa href thành id
        title: 'Tiếng Anh THCS',
        age: '11 - 13 tuổi',
        description: 'Nâng cao ngữ pháp, từ vựng và kỹ năng học thuật, chuẩn bị cho các kỳ thi chuyển cấp và định hướng lấy chứng chỉ quốc tế.',
        imageSrc: '/assets/images/R5AT3931.jpg',
        icon: <Shield className="h-6 w-6" />,
    },
    {
        id: 'ielts', // Sửa href thành id
        title: 'Luyện thi IELTS',
        age: '13 tuổi trở lên',
        description: 'Lộ trình cá nhân hóa với các chiến thuật làm bài hiệu quả, tập trung vào việc tối đa hóa điểm số cho cả 4 kỹ năng, phục vụ mục tiêu du học và sự nghiệp.',
        imageSrc: '/assets/images/R5AT4255.jpg',
        icon: <BookOpen className="h-6 w-6" />,
    },
    // Các chương trình khác giữ nguyên
];


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
                    {/* Cập nhật Link ở đây */}
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
    // Chỉ lấy 4 chương trình chính để hiển thị
    const displayPrograms = trainingPrograms.slice(0, 4);

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
                    <Button asChild size="lg">
                        <Link href="/training">
                            Xem tất cả chương trình <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ProgramsList;