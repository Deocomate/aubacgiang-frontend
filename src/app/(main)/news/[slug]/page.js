// src/app/(main)/news/[slug]/page.js
import { notFound } from 'next/navigation';
import { NEWS_ARTICLES } from '@/lib/news-data';
import NewsDetailPage from '@/pages/News/Detail/NewsDetailPage';

export async function generateStaticParams() {
    return NEWS_ARTICLES.map(article => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params; // SỬA: Thêm await
    const article = NEWS_ARTICLES.find(p => p.slug === slug);

    if (!article) {
        return {
            title: "Không tìm thấy bài viết"
        };
    }
    return {
        title: `${article.title} - A&U English`,
        description: article.excerpt,
    };
}

export default async function NewsDetail({ params }) {
    const { slug } = await params; // SỬA: Thêm await
    const article = NEWS_ARTICLES.find(p => p.slug === slug);

    if (!article) {
        notFound();
    }
    
    const recentArticles = NEWS_ARTICLES
        .filter(p => p.slug !== slug)
        .slice(0, 5);

    return <NewsDetailPage article={article} recentArticles={recentArticles} />;
}