import React from 'react';
import Image from 'next/image';

function TeachersHero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white">
            <Image
                src="/assets/images/R5AT4246.jpg"
                alt="Đội ngũ giáo viên tại A&U English"
                fill
                className="object-cover"
                quality={90}
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
                    Đội Ngũ Giáo Viên Tâm Huyết
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    Nền tảng cho sự thành công của mỗi học viên bắt nguồn từ những người thầy cô tận tâm và chuyên môn cao.
                </p>
            </div>
        </section>
    );
}

export default TeachersHero;