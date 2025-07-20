/* src/pages/ParentsCorner/components/HandbookSection.jsx */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel';

const ArticleCard = ({ article }) => (
    <Link href={`/knowledge/${article.slug}`} className="block h-full group">
        <Card className="overflow-hidden flex flex-col p-0 h-full cursor-pointer">
            <div className="relative w-full h-72">
                <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardContent className="pb-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 flex-grow transition-colors group-hover:text-orange-600">{article.title}</h3>
                <p className="mt-2 text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="mt-auto self-start text-orange-600 font-medium flex items-center group-hover:text-orange-700 transition-colors">
                    Đọc thêm <ArrowRight className="ml-1 h-4 w-4" />
                </div>
            </CardContent>
        </Card>
    </Link>
);

function HandbookSection({ articles }) {
    if (!articles || articles.length === 0) {
        return null;
    }

    return (
        <section id="handbook" className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Cẩm Nang Cho Phụ Huynh</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Kiến Thức & Kinh Nghiệm
                    </p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                    <div className="md:hidden">
                        <Carousel opts={{ loop: true }} className="w-full max-w-sm mx-auto">
                            <CarouselContent>
                                {articles.map((article) => (
                                    <CarouselItem key={article.id}>
                                        <div className="p-1 h-full">
                                            <ArticleCard article={article} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselDots />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HandbookSection;