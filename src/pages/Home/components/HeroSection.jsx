"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';

function HeroSection({ banner }) {
    const { title, description, images } = banner;

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="relative w-full h-[70vh] sm:h-screen">
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 z-0"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[70vh] sm:h-screen w-full">
                                <Image
                                    src={src}
                                    alt={title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-lg">
                        {description}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105">
                            <Link href="/training">
                                Khám phá các khóa học
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;