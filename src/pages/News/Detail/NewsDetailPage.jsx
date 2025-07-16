import React from 'react';
import { Calendar, MessageSquare, User } from 'lucide-react';
import RecentPostsSection from '@/pages/News/components/RecentPostsSection';

function NewsDetailPage({ article, recentArticles }) {
    return (
        <main>
            {/* FIX: Tăng padding top để không bị header che, và thêm padding ngang cho mobile */}
            <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto"> 
                        <header className="mb-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mt-4 border-b pb-4">
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
                        </header>
                        
                        <div
                            className="prose prose-lg max-w-none prose-img:rounded-xl prose-h3:text-gray-800"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </div>
            
            <RecentPostsSection articles={recentArticles} />
        </main>
    );
}

export default NewsDetailPage;