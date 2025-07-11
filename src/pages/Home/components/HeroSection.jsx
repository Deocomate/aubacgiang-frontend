// src/pages/Home/components/HeroSection.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Danh sách các hình ảnh cho hero section slideshow
const heroImages = [
    { src: '/assets/images/R5AT3838.jpg', alt: 'Lớp học tương tác tại A&U English' },
    { src: '/assets/images/R5AT4012.jpg', alt: 'Học viên thực hành tại trung tâm A&U' },
    { src: '/assets/images/R5AT4153.jpg', alt: 'Giáo viên bản ngữ tại A&U English' },
    { src: '/assets/images/R5AT4208.jpg', alt: 'Không gian học tập hiện đại' },
    { src: '/assets/images/R5AT4083.jpg', alt: 'Hoạt động ngoại khóa tại A&U' },
];

function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="relative w-full h-screen">
            {/* Background Carousel */}
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 z-0"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {heroImages.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-screen w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    quality={90}
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* **FIX:** Sử dụng gradient overlay để làm tối nền một cách tinh tế */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <div className="max-w-4xl">
                    {/* **FIX:** Tăng cường hiệu ứng đổ bóng cho văn bản */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                        Think A&U - Think Successful
                    </h1>
                    <p className="mt-6 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-lg">
                        Nơi chắp cánh ước mơ Anh ngữ cho mọi lứa tuổi tại Bắc Giang.
                        Chất lượng giảng dạy quốc tế, môi trường học tập truyền cảm hứng.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105"
                        >
                            Khám phá các khóa học
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-orange-500 font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Đăng ký tư vấn
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;