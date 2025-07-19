"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { HeartHandshake, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

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

function useInView(ref) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return isInView;
}


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

const icons = [
    <HeartHandshake className="h-16 w-16 text-white" />,
    <GraduationCap className="h-16 w-16 text-white" />,
];

function StatsSection({ stats }) {
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
                    {stats.map((stat, index) => (
                        <AnimatedStat
                            key={index}
                            value={parseInt(stat.value, 10)}
                            suffix={'+'}
                            icon={icons[index % icons.length]}
                            description={stat.description}
                            imageSrc={stat.images}
                            altText={stat.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;