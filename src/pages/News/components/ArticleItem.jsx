import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MessageSquare, User } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';

// FIX: Tạo một map để định kiểu cho từng danh mục
const categoryStyles = {
    'Sự kiện': 'bg-orange-500 text-white',
    'Tin tức': 'bg-blue-500 text-white',
    'Tuyển dụng': 'bg-green-500 text-white',
};

function ArticleItem({ article }) {
    // FIX: Lấy lớp CSS tương ứng hoặc một lớp mặc định
    const badgeClass = categoryStyles[article.category] || 'bg-gray-500 text-white';

    return (
        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b pb-8 mb-8 last:border-b-0 last:mb-0 last:pb-0">
            <div className="md:col-span-1">
                {/* FIX: Thêm class 'relative block' để định vị badge */}
                <Link href={`/news/${article.slug}`} className="relative block group">
                    <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={article.imageSrc}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </AspectRatio>
                    </div>
                    {/* FIX: Thêm badge danh mục */}
                    <div className={cn(
                        "absolute top-3 left-3 z-10 rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider",
                        badgeClass
                    )}>
                        {article.category}
                    </div>
                </Link>
            </div>
            
            <div className="md:col-span-2 flex flex-col h-full">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mt-2 mb-3">
                    <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-orange-500" />
                        BY <span className="font-semibold text-orange-500 uppercase">{article.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" /> {article.comments}
                    </span>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                    {article.excerpt}
                </p>
            </div>
        </article>
    );
}

export default ArticleItem;