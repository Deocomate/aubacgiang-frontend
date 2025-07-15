// src/pages/Home/components/YoutubeSection.jsx
"use client";

import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

function YoutubeSection() {
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

                <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-md border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Video 1 */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.youtube.com/embed/fXXcJJENN9U"
                                    title="A&U - CÙNG LẮNG NGHE CẢM NHẬN CỦA HỌC VIÊN VỀ KHÓA HỌC IELTS"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </AspectRatio>
                        </div>

                        {/* Video 2 */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.youtube.com/embed/BaR4iCqJFWk"
                                    title="MỘT BUỔI HỌC TRẢI NGHIỆM TẠI A&U_A&U DEMO CLASS"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </AspectRatio>
                        </div>

                        {/* Video 3 */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.youtube.com/embed/KNnGaIwnI0g"
                                    title="A&U - GIỚI THIỆU HỆ THỐNG ANH NGỮ A&U"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </AspectRatio>
                        </div>

                        {/* Video 4 */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.youtube.com/embed/N2KAoRPxXvc"
                                    title="A&U - GIỚI THIỆU TRUNG TÂM ANH NGỮ A&U KIDS"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;