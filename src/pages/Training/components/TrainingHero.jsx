import React from 'react';
import Image from 'next/image';

function TrainingHero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <Image
                src="/assets/images/R5AT4178.jpg"
                alt="Chương trình đào tạo tại A&U English"
                fill
                className="object-cover"
                quality={90}
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
                    Chương Trình Đào Tạo
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    A&U Bắc Giang cung cấp lộ trình học tập toàn diện, được thiết kế chuyên biệt để đáp ứng nhu cầu phát triển Anh ngữ ở mọi lứa tuổi và trình độ.
                </p>
            </div>
        </section>
    );
}

export default TrainingHero;