/* src/pages/News/NewsPage.jsx */
"use client";

import React, { useState } from 'react';
import { NEWS_ARTICLES, NEWS_CATEGORIES } from '@/lib/news-data';
import ArticleItem from '@/pages/News/components/ArticleItem';
import NewsSidebar from '@/pages/News/components/NewsSidebar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 10;

// FIX: Nhận 'articles' như một prop, nếu không có thì dùng mặc định là NEWS_ARTICLES
function NewsPage({ articles: initialArticles }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Sử dụng danh sách bài viết được truyền vào hoặc danh sách đầy đủ
    const articles = initialArticles || NEWS_ARTICLES;

    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentArticles = articles.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <main className="lg:col-span-3">
                        {/* FIX: Hiển thị thông báo nếu không có bài viết nào */}
                        {currentArticles.length > 0 ? (
                            <div className="flex flex-col">
                                {currentArticles.map(article => (
                                    <ArticleItem key={article.id} article={article} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h2 className="text-2xl font-bold text-gray-800">Không có bài viết nào.</h2>
                                <p className="text-gray-600 mt-2">Hiện tại chưa có bài viết nào trong danh mục này. Vui lòng quay lại sau.</p>
                            </div>
                        )}
                        
                        {/* Chỉ hiển thị pagination nếu có nhiều hơn 1 trang */}
                        {totalPages > 1 && (
                            <div className="mt-16">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious 
                                                href="#" 
                                                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} 
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
                                                    href="#" 
                                                    onClick={(e) => { e.preventDefault(); handlePageChange(number); }}
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
                                                href="#" 
                                                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
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
                        <NewsSidebar categories={NEWS_CATEGORIES} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;