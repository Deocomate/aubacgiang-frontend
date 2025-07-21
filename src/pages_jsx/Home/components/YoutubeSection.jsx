"use client";

import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getYoutubeEmbedUrl } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";

// SỬA: Thêm giá trị mặc định cho prop `links` là một mảng rỗng
function YoutubeSection({ links = [] }) {
    const embedLinks = links.slice(0, 4).map(getYoutubeEmbedUrl).filter(Boolean);

    // SỬA: Thêm kiểm tra nếu không có link nào hợp lệ thì không render section này
    if (embedLinks.length === 0) {
        return null;
    }

    const YoutubeVideo = ({ url, index }) => (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src={url}
                    title={`A&U YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </AspectRatio>
        </div>
    );

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">A&U TRÊN YOUTUBE</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Video Nổi Bật
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Khám phá thêm về cuộc sống học tập, các sự kiện và cảm nhận của học viên tại A&U English qua những video chân thực nhất.
                    </p>
                </div>

                {/* Container cho màn hình lớn */}
                <div className="hidden sm:block max-w-6xl mx-auto p-2 pt-4 md:p-6 bg-white rounded-xl shadow-md border">
                    <div className="grid grid-cols-2 gap-4">
                        {embedLinks.map((url, index) => (
                            <YoutubeVideo key={index} url={url} index={index} />
                        ))}
                    </div>
                </div>

                {/* Carousel cho màn hình nhỏ */}
                <div className="sm:hidden">
                    <Carousel opts={{ loop: true }} className="w-full max-w-lg mx-auto">
                        <CarouselContent>
                            {embedLinks.map((url, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <YoutubeVideo url={url} index={index} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselDots />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
