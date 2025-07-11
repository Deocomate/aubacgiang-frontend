// src/pages/Home/components/StatsSection.jsx
"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { HeartHandshake, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom hook cho hiệu ứng số đếm tăng dần
function useCountUp(end, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const startTime = Date.now();

        const animateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(progress * end);
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animateCount);
    }, [end, duration, isInView]);

    return { count, ref };
}

// Custom hook để kiểm tra element có trong viewport không
function useInView(ref) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isInView;
}


// Component hiển thị số đếm
function AnimatedStat({ value, suffix, icon, description, imageSrc, altText }) {
    const { count, ref } = useCountUp(value);
    const isInView = useInView(ref);

    return (
        <article
            ref={ref}
            className={cn(
                "relative flex flex-col items-center justify-center text-center p-8 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-orange-500/33 z-10" />
            <div className="relative z-20 text-white">
                <div className="mb-4 flex justify-center mx-auto">{icon}</div>
                <div className="text-6xl md:text-7xl font-extrabold tracking-tighter">
                    {count}{suffix}
                </div>
                <p className="mt-4 text-base md:text-lg font-medium leading-7 max-w-xs">
                    {description}
                </p>
            </div>
        </article>
    );
}

// Dữ liệu cho các số liệu thống kê
const statsData = [
    {
        icon: <HeartHandshake className="h-16 w-16 text-white" />,
        value: 300,
        suffix: '+',
        description: 'Phụ huynh đã tin tưởng và lựa chọn A&U Bắc Giang trong năm 2022',
        imageSrc: '/assets/images/R5AT4181.jpg',
        altText: 'Hơn 300 phụ huynh đã chọn A&U Bắc Giang',
    },
    {
        icon: <GraduationCap className="h-16 w-16 text-white" />,
        value: 5000,
        suffix: '+',
        description: 'Học sinh được đào tạo liên kết tại các trường công lập trong thành phố',
        imageSrc: '/assets/images/R5AT4083.jpg',
        altText: 'Hơn 5000 học sinh đào tạo liên kết',
    },
];


function StatsSection() {
    return (
        <section className="bg-slate-50 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <header className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        Những con số biết nói
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Đây là minh chứng cho sự tin tưởng của phụ huynh và học viên, cũng như nỗ lực không ngừng của đội ngũ A&U Bắc Giang.
                    </p>
                </header>

                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {statsData.map((stat, index) => (
                        <AnimatedStat
                            key={index}
                            value={stat.value}
                            suffix={stat.suffix}
                            icon={stat.icon}
                            description={stat.description}
                            imageSrc={stat.imageSrc}
                            altText={stat.altText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;