/* ===== src\pages\News\NewsPage.jsx ===== */
"use client";

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ArticleItem from '@/pages/News/components/ArticleItem';
import NewsSidebar from '@/pages/News/components/NewsSidebar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

function NewsPage({ newsData, categories, categoryInfo }) {
    const { data: articles, currentPage, totalPages } = newsData;

    const pathname = usePathname();
    const searchParams = useSearchParams();
    // SỬA: Lấy search term để hiển thị thông báo
    const searchTerm = searchParams.get('search');

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                {categoryInfo && (
                    <div className="mb-8 border-b pb-4">
                        <h1 className="text-3xl font-bold">Danh mục: {categoryInfo.name}</h1>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <main className="lg:col-span-3">
                        {articles && articles.length > 0 ? (
                            <div className="flex flex-col">
                                {articles.map(article => (
                                    <ArticleItem key={article.id} article={article} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                {/* SỬA: Hiển thị thông báo tùy theo có tìm kiếm hay không */}
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {searchTerm ? `Không tìm thấy kết quả cho "${searchTerm}"` : "Không có bài viết nào."}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {searchTerm ? "Vui lòng thử với từ khóa khác." : "Hiện tại chưa có bài viết nào trong danh mục này."}
                                </p>
                            </div>
                        )}
                        
                        {totalPages > 1 && (
                            <div className="mt-16">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious 
                                                href={createPageURL(currentPage - 1)}
                                                className={cn(
                                                    currentPage === 1 
                                                    ? 'pointer-events-none opacity-50' 
                                                    : 'hover:bg-orange-100 hover:text-orange-600'
                                                )}
                                            />
                                        </PaginationItem>
                                        
                                        {pageNumbers.map(number => (
                                            <PaginationItem key={number}>
                                                <PaginationLink 
                                                    href={createPageURL(number)}
                                                    isActive={currentPage === number}
                                                    className={cn(
                                                        "hover:bg-orange-500 hover:text-white",
                                                        currentPage === number && "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
                                                    )}
                                                >
                                                    {number}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}

                                        <PaginationItem>
                                            <PaginationNext 
                                                href={createPageURL(currentPage + 1)}
                                                className={cn(
                                                    currentPage === totalPages
                                                    ? 'pointer-events-none opacity-50'
                                                    : 'hover:bg-orange-100 hover:text-orange-600'
                                                )}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </main>

                    <aside className="lg:col-span-1">
                        <NewsSidebar categories={categories} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;