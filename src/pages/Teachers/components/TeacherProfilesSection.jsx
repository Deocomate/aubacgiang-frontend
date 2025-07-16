import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Facebook, Mail } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const teachersData = [
    {
        name: 'Ms. Minh Nguyệt',
        role: 'Giám đốc Trung tâm',
        nationality: 'Việt Nam',
        qualifications: ["Giám đốc Ngoại ngữ A&U", "Cử nhân Sư phạm Tiếng Anh - ĐHQGHN"],
        imageSrc: '/assets/images/R5AT4240.jpg',
        fallback: 'MN',
        email: 'minhnguyetbg78@gmail.com',
        facebookUrl: '#'
    },
    {
        name: 'Mr. Jai Kattenberg',
        role: 'Giáo viên Tiếng Anh',
        nationality: 'Quốc tịch Úc',
        qualifications: ["Cử nhân Đại học Griffith", "Chứng chỉ 120 hours TEFL"],
        imageSrc: '/assets/images/R5AT4155.jpg',
        fallback: 'JK',
        email: 'info@anu.edu.vn',
        facebookUrl: '#'
    },
    {
        name: 'Mr. Welsh Ilya',
        role: 'Giáo viên Tiếng Anh',
        nationality: 'Quốc tịch Anh',
        qualifications: ["Thạc sĩ University College London", "Chứng chỉ TEFL"],
        imageSrc: '/assets/images/R5AT4278.jpg',
        fallback: 'WI',
        email: 'info@anu.edu.vn',
        facebookUrl: '#'
    },
    {
        name: 'Ms. Emily Rose',
        role: 'Giáo viên Tiếng Anh',
        nationality: 'Quốc tịch Mỹ',
        qualifications: ["Cử nhân Ngôn ngữ Anh", "Chứng chỉ TESOL"],
        imageSrc: '/assets/images/R5AT4012.jpg',
        fallback: 'ER',
        email: 'info@anu.edu.vn',
        facebookUrl: '#'
    },
];

function TeacherProfilesSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Về Chúng Tôi</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Gặp Gỡ Đội Ngũ A&U
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Những gương mặt tận tâm, những chuyên gia đầy nhiệt huyết đứng sau sự thành công của học viên.
                    </p>
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {teachersData.map((teacher, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="py-2 h-full">
                                    <Card className="flex flex-col text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
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
                                        <CardContent className="flex-grow mt-4 text-left text-gray-600 w-full">
                                            <ul className="list-disc list-inside space-y-1">
                                                {teacher.qualifications.map((q, i) => (
                                                    <li key={i}>{q}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter className="justify-center gap-4 pt-4 mt-4 border-t border-gray-100">
                                            <a href={teacher.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={`Facebook của ${teacher.name}`}>
                                                <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
                                            </a>
                                            <a href={`mailto:${teacher.email}`} aria-label={`Gửi email cho ${teacher.name}`}>
                                                <Mail className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
                                            </a>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}

export default TeacherProfilesSection;