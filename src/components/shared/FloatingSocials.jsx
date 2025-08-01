// src/components/shared/FloatingSocials.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FloatingSocials({contactInfo}) {
    // Chỉ render component nếu có thông tin liên hệ
    if (!contactInfo) {
        return null;
    }

    const {facebook, zalo} = contactInfo;

    return (// SỬA: Chuyển từ "left-5" sang "right-5" và thêm animation xuất hiện
        <div
            className="fixed bottom-5 right-5 z-50 flex flex-col gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 ease-out">
            {facebook && (
                <Link href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook A&U English">
                    {/* SỬA: Bọc trong một div để chứa hiệu ứng và icon */}
                    <div className="relative group w-14 h-14 transition-transform duration-300 hover:scale-110">
                        {/* THÊM: Hiệu ứng tỏa sáng */}
                        <span
                            className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping group-hover:animate-none"></span>
                        {/* Icon */}
                        <div className="relative w-14 h-14">
                            <Image
                                src="/assets/logos/facebook-logo.png"
                                alt="Facebook A&U English"
                                fill
                                sizes="56px"
                                className="object-contain rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                            />
                        </div>
                    </div>
                </Link>)}
            {zalo && (<Link href={zalo} target="_blank" rel="noopener noreferrer" aria-label="Zalo A&U English">
                    <div className="relative group w-14 h-14 transition-transform duration-300 hover:scale-110">
                        {/* THÊM: Hiệu ứng tỏa sáng với độ trễ khác */}
                        <span
                            className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping group-hover:animate-none [animation-delay:-1.5s]"></span>
                        {/* Icon */}
                        <div className="relative w-14 h-14">
                            <Image
                                src="/assets/logos/zalo-logo.png"
                                alt="Zalo A&U English"
                                fill
                                sizes="56px"
                                className="object-contain rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                            />
                        </div>
                    </div>
                </Link>)}
        </div>);
}

export default FloatingSocials;