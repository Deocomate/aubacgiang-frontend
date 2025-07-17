import { notFound } from 'next/navigation';
import { NEWS_ARTICLES } from '@/lib/news-data';
import NewsDetailPage from '@/pages/News/Detail/NewsDetailPage';

export async function generateStaticParams() {
    // Hàm này không thay đổi, vẫn giữ nguyên
    return NEWS_ARTICLES.map(article => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    // FIX: Thêm await và destructuring params
    const { slug } = await params;
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
    // FIX: Thêm await và destructuring params
    const { slug } = await params;
    const article = NEWS_ARTICLES.find(p => p.slug === slug);

    if (!article) {
        notFound();
    }
    
    const recentArticles = NEWS_ARTICLES
        .filter(p => p.slug !== slug)
        .slice(0, 5);

    return <NewsDetailPage article={article} recentArticles={recentArticles} />;
}