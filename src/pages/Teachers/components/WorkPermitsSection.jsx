"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const permitImages = [
    '/assets/images/R5AT4155.jpg',
    '/assets/images/R5AT4278.jpg',
    '/assets/images/R5AT3978.jpg',
    '/assets/images/R5AT4181.jpg',
    '/assets/images/R5AT4083.jpg',
];

function WorkPermitsSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto lg:px-4 px-9">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Minh Chứng Pháp Lý</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Chuyên Nghiệp & Minh Bạch
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        A&U English cam kết tuân thủ đầy đủ các quy định pháp luật về lao động, đảm bảo tất cả giáo viên nước ngoài đều có giấy phép hợp lệ.
                    </p>
                </div>

                <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {permitImages.map((src, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <DialogTrigger asChild onClick={() => setSelectedImage(src)}>
                                        <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                                            <AspectRatio ratio={3 / 4}>
                                                <Image
                                                    src={src}
                                                    alt=""
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Eye className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                                </div>
                                            </AspectRatio>
                                        </div>
                                    </DialogTrigger>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                    </Carousel>

                    {selectedImage && (
                        <DialogContent className="max-w-3xl p-0 bg-transparent border-0">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Xem chi tiết Giấy phép lao động</DialogTitle>
                                <DialogDescription>
                                    Hình ảnh chi tiết giấy phép lao động của giáo viên tại A&U English.
                                </DialogDescription>
                            </DialogHeader>
                            <Image
                                src={selectedImage}
                                alt="Xem chi tiết giấy phép lao động"
                                width={800}
                                height={1100}
                                className="object-contain w-full h-full rounded-lg"
                            />
                        </DialogContent>
                    )}
                </Dialog>
            </div>
        </section>
    );
}

export default WorkPermitsSection;