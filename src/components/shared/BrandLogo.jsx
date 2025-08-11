"use client";

import Image from "next/image";
import {cn} from "@/lib/utils";

export default function BrandLogo({
                                      imageSize = 45, className = "", topTextClassName = "", bottomTextClassName = "",
                                  }) {
    return (<div className={cn("flex items-center gap-2", className)}>
        <Image
            src="/assets/images/logo-au.png"
            alt="Trung tâm Anh ngữ A&U"
            width={imageSize}
            height={imageSize}
            className="object-contain"
            priority
        />
        <div className="leading-tight">
            <div className={cn("font-extrabold text-gray-800 text-base sm:text-lg lg:text-xl", topTextClassName)}>
                Language
            </div>
            <div
                className={cn("font-medium text-gray-500 -mt-0.5 text-sm sm:text-base lg:text-lg", bottomTextClassName)}>
                Institute
            </div>
        </div>
    </div>);
}