/* src/pages/News/components/RecentPostsSection.jsx */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, MessageSquare } from 'lucide-react';

function RecentPostsSection({ articles }) {
    if (!articles || articles.length === 0) {
        return null;
    }

    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1, 5);

    return (
        <section className="py-16 sm:py-24 border-t bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-orange-500 inline-block">
                    Bài viết mới
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-12">
                    <div className="flex flex-col">
                        <Link href={`/news/${featuredArticle.slug}`}>
                            <div className="relative rounded-lg overflow-hidden shadow-md mb-4 group">
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src={featuredArticle.imageSrc}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-sm">
                                        {featuredArticle.category.toUpperCase()}
                                    </div>
                                </AspectRatio>
                            </div>
                        </Link>
                        <h3 className="text-2xl font-bold leading-tight text-gray-800 hover:text-orange-600 transition-colors">
                            <Link href={`/news/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 mb-3">
                            <span className="flex items-center gap-1.5">BY <span className="font-medium text-orange-500 uppercase">{featuredArticle.author}</span></span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {featuredArticle.date}</span>
                            <span className="flex items-center gap-1.5"><MessageSquare className="w-3 h-3" /> {featuredArticle.comments}</span>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {featuredArticle.excerpt}
                        </p>
                        <Button asChild variant="outline" className="mt-auto self-start border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500">
                            <Link href={`/news/${featuredArticle.slug}`}>READ MORE</Link>
                        </Button>
                    </div>

                    <div className="flex flex-col space-y-6">
                        {otherArticles.map(article => (
                            <Link key={article.id} href={`/news/${article.slug}`} className="group flex items-center gap-4">
                                <div className="flex-shrink-0 w-32 h-20 rounded-md overflow-hidden shadow-sm">
                                    <Image
                                        src={article.imageSrc}
                                        alt={article.title}
                                        width={128}
                                        height={80}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-semibold leading-tight text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentPostsSection;