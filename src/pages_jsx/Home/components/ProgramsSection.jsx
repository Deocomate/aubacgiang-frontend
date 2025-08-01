import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Baby, Rocket, Plane, GraduationCap, Briefcase, ArrowRight, BookCopy, Target, Lightbulb, PenSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const iconMap = {
    'mau-giao': <Baby className="h-8 w-8 text-orange-500" />,
    'tieu-hoc': <Rocket className="h-8 w-8 text-blue-500" />,
    'thcs': <Plane className="h-8 w-8 text-green-500" />,
    'flyers': <GraduationCap className="h-8 w-8 text-purple-500" />,
    'ielts': <Briefcase className="h-8 w-8 text-red-500" />,
};

// Danh sách các icon chung để lựa chọn ngẫu nhiên
const genericIcons = [
    <GraduationCap className="h-8 w-8 text-purple-500" />,
    <Briefcase className="h-8 w-8 text-red-500" />,
    <BookCopy className="h-8 w-8 text-teal-500" />,
    <Target className="h-8 w-8 text-indigo-500" />,
    <Lightbulb className="h-8 w-8 text-yellow-500" />,
    <PenSquare className="h-8 w-8 text-sky-500" />
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

function ProgramsSection({ trainings }) {
    if (!trainings || trainings.length === 0) {
        return (
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p>Không thể tải danh sách chương trình học.</p>
                </div>
            </section>
        );
    }

    const stripHtml = (html) => {
        if (typeof window !== 'undefined') {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return doc.body.textContent || "";
        }
        return html.replace(/<[^>]+>/g, '');
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto lg:px-4 px-4 md:px-9">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Lộ Trình Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Chương Trình Đào Tạo Nổi Bật
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
                        {trainings.map((program) => (
                            <CarouselItem key={program.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col pt-0 h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                                        <AspectRatio ratio={16 / 9}>
                                            <Image
                                                src={program.thumbnail}
                                                alt={`Hình ảnh khóa học ${program.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </AspectRatio>
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-2">
                                                {getIconForProgram(program.slug)}
                                                <CardTitle className="text-2xl font-bold tracking-tight text-gray-900">{program.title}</CardTitle>
                                            </div>
                                            <Badge variant="secondary">{program.age}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription className="text-base text-gray-600 line-clamp-3">
                                                {stripHtml(program.description)}
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild variant="ghost" className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                                                <Link href={`/training/${program.slug}`}>
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
                    <CarouselDots />
                </Carousel>
            </div>
        </section>
    );
}

export default ProgramsSection;