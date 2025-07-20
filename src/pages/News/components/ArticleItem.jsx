import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Eye } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const pastelColors = [
    { bg: 'bg-red-100', text: 'text-red-700' },
    { bg: 'bg-orange-100', text: 'text-orange-700' },
    { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    { bg: 'bg-green-100', text: 'text-green-700' },
    { bg: 'bg-teal-100', text: 'text-teal-700' },
    { bg: 'bg-blue-100', text: 'text-blue-700' },
    { bg: 'bg-indigo-100', text: 'text-indigo-700' },
    { bg: 'bg-purple-100', text: 'text-purple-700' },
    { bg: 'bg-pink-100', text: 'text-pink-700' },
    { bg: 'bg-rose-100', text: 'text-rose-700' },
    { bg: 'bg-cyan-100', text: 'text-cyan-700' },
    { bg: 'bg-lime-100', text: 'text-lime-700' },
];

function getPastelColorFromSlug(slug) {
    if (!slug || typeof slug !== 'string' || slug.length === 0) {
        return 'bg-gray-100 text-gray-700';
    }
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % pastelColors.length;
    return `${pastelColors[idx].bg} ${pastelColors[idx].text}`;
}

function ArticleItem({ article, categoryInfo }) {
    const categoryName = article.category_name || categoryInfo?.name;
    const categorySlug = article.category_slug || categoryInfo?.slug;
    
    const badgeClass = getPastelColorFromSlug(categorySlug);
    const formattedDate = format(new Date(article.created_at), 'dd/MM/yyyy');

    return (
        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b pb-8 mb-8 last:border-b-0 last:mb-0 last:pb-0">
            <div className="md:col-span-1">
                <Link href={`/news/${article.slug}`} className="relative block group">
                    <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={article.thumbnail}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </AspectRatio>
                    </div>
                    {categoryName && (
                        <div className={cn(
                            "absolute top-3 left-3 z-10 rounded-md px-2 py-1 text-xs font-semibold tracking-wider",
                            badgeClass
                        )}>
                            {categoryName}
                        </div>
                    )}
                </Link>
            </div>
            
            <div className="md:col-span-2 flex flex-col h-full">
                <h2 className="text-lg md:text-xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-gray-500 mt-2 mb-3">
                    <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-orange-500" />
                        BY <span className="font-semibold text-orange-500 uppercase">{article.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {formattedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4" /> {article.view}
                    </span>
                </div>
                {article.excerpt && (
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {article.excerpt}
                    </p>
                )}
            </div>
        </article>
    );
}

export default ArticleItem;