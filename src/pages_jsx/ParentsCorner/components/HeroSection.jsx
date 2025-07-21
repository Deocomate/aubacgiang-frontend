import React from 'react';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center text-white">
            <Image
                src="/assets/images/R5AT3907.jpg" // Chọn ảnh phụ huynh và con hoặc giáo viên và phụ huynh
                alt="Phụ huynh và học viên tại A&U English"
                fill
                className="object-cover"
                quality={90}
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
                    Đồng hành cùng con chinh phục tiếng Anh
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    A&U tin rằng sự hợp tác chặt chẽ giữa gia đình và nhà trường là chìa khóa cho sự thành công của trẻ.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;