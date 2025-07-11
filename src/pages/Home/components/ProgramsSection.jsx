// src/pages/Home/components/ProgramsSection.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// FIX: Thay thế UserGraduate bằng GraduationCap
import { Baby, Rocket, Plane, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Dữ liệu cho các chương trình học, thêm trường imageSrc
const programsData = [
    {
        icon: <Baby className="h-8 w-8 text-orange-500" />,
        title: 'PRE-STARTERS',
        target: 'Mẫu giáo - Lớp 2',
        description: 'Làm quen với tiếng Anh qua các cấu trúc cơ bản, từ vựng về chủ đề gần gũi như gia đình, lớp học, màu sắc và hình dạng.',
        href: '/training#pre-starters',
        imageSrc: '/assets/images/R5AT4202.jpg'
    },
    {
        icon: <Rocket className="h-8 w-8 text-blue-500" />,
        title: 'STARTERS',
        target: 'Lớp 1 - 4',
        description: 'Bắt đầu tương tác đơn giản, hỏi và trả lời về các chủ đề quen thuộc, hiểu các từ và câu rất đơn giản trên thông báo, áp phích.',
        href: '/training#starters',
        imageSrc: '/assets/images/R5AT3961.jpg'
    },
    {
        icon: <Plane className="h-8 w-8 text-green-500" />,
        title: 'MOVERS',
        target: 'Lớp 2 - 5',
        description: 'Giao tiếp trong các hội thoại đơn giản, trao đổi thông tin trực tiếp về các chủ đề quen thuộc và viết các tin nhắn ngắn.',
        href: '/training#movers',
        imageSrc: '/assets/images/R5AT4178.jpg'
    },
    {
        // FIX: Thay thế UserGraduate bằng GraduationCap
        icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
        title: 'FLYERS',
        target: 'Lớp 4 - 7',
        description: 'Tự tin mô tả trải nghiệm, ước mơ và hy vọng; đưa ra lý do và giải thích ngắn gọn cho các ý kiến và kế hoạch.',
        href: '/training#flyers',
        imageSrc: '/assets/images/R5AT3931.jpg'
    },
    {
        icon: <Briefcase className="h-8 w-8 text-red-500" />,
        title: 'ADULTS',
        target: 'Lớp 6 - Người lớn',
        description: 'Chương trình toàn diện bao gồm luyện thi chứng chỉ quốc tế IELTS, tiếng Anh cho doanh nghiệp và tiếng Anh chuyên sâu.',
        href: '/training#adults',
        imageSrc: '/assets/images/R5AT4255.jpg'
    }
];

function ProgramsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Lộ Trình Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Chương Trình Đào Tạo Toàn Diện
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        A&U Bắc Giang cung cấp các khóa học đa dạng, được thiết kế chuyên biệt để đáp ứng nhu cầu học tập ở mọi lứa tuổi và trình độ.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {programsData.map((program) => (
                            <CarouselItem key={program.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col pt-0 h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                                        <AspectRatio ratio={16 / 9}>
                                            <Image
                                                src={program.imageSrc}
                                                alt={`Hình ảnh khóa học ${program.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </AspectRatio>
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-2">
                                                {program.icon}
                                                <CardTitle className="text-2xl font-bold tracking-tight text-gray-900">{program.title}</CardTitle>
                                            </div>
                                            <Badge variant="secondary">{program.target}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription className="text-base text-gray-600">
                                                {program.description}
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild variant="ghost" className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                                                <Link href={program.href}>
                                                    Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}

export default ProgramsSection;