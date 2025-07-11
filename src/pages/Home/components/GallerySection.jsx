// src/pages/Home/components/GallerySection.jsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

// Chọn lọc một số ảnh tiêu biểu từ thư mục của bạn
// Thêm className để xác định kích thước và vị trí trong lưới
const galleryImages = [
    { src: '/assets/images/R5AT3838.jpg', alt: 'Không khí lớp học sôi nổi', className: 'md:col-span-2 md:row-span-2' },
    { src: '/assets/images/R5AT4012.jpg', alt: 'Học viên thực hành giao tiếp', className: '' },
    { src: '/assets/images/R5AT4208.jpg', alt: 'Giáo viên hướng dẫn tận tình', className: '' },
    { src: '/assets/images/R5AT4153.jpg', alt: 'Hoạt động ngoại khóa vui vẻ', className: 'md:row-span-2' },
    { src: '/assets/images/R5AT4083.jpg', alt: 'Học viên thuyết trình tự tin', className: 'md:col-span-2' },
    { src: '/assets/images/R5AT3975.jpg', alt: 'Lớp học với giáo viên bản xứ', className: '' },
    { src: '/assets/images/R5AT4123.jpg', alt: 'Không gian học tập hiện đại', className: '' },
];


function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Hàm xử lý khi Dialog được đóng
    const handleOpenChange = (isOpen) => {
        if (!isOpen) {
            setSelectedImage(null);
        }
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Thư Viện Ảnh</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Khoảnh Khắc Đáng Nhớ Tại A&U
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Cùng nhìn lại những giờ học sôi nổi, những hoạt động ngoại khóa bổ ích và những nụ cười rạng rỡ của học viên tại A&U English.
                    </p>
                </div>

                <Dialog onOpenChange={handleOpenChange}>
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${image.className}`}>
                                <DialogTrigger asChild onClick={() => setSelectedImage(image.src)}>
                                    <div>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Camera className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                            <div className="relative w-full h-auto">
                                <Image
                                    src={selectedImage}
                                    alt="Ảnh được chọn"
                                    width={1200}
                                    height={800}
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>
                        </DialogContent>
                    )}
                </Dialog>

                <div className="text-center mt-12">
                    <Button size="lg" variant="outline">
                        Xem Thêm Ảnh
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default GallerySection;