import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, CalendarDays, MessageSquare, Milestone, Award  } from 'lucide-react';
import Link from 'next/link';

const resources = [
    { title: 'Cẩm nang cho cha mẹ', description: 'Bài viết và lời khuyên hữu ích dành cho cha, mẹ để giúp con có hành trang học tập tốt hơn', icon: <BookOpen className="h-8 w-8 text-orange-500" />, href: '#handbook' },
    { title: 'Tài liệu học tập', description: 'Tải về flashcards, bài tập giúp bé học tiếng Anh hiệu quả hơn', icon: <Download className="h-8 w-8 text-blue-500" />, href: '#downloads' },
    { title: 'Câu chuyện thành công', description: 'Những đánh giá tích cực của quý phụ huynh đã từng cho con theo học tại A&U', icon: <Award  className="h-8 w-8 text-green-500" />, href: '#testimonials' },
    { title: 'Liên hệ trung tâm', description: 'Trao đổi trực tiếp về tình hình kết quả học tập của con em mình', icon: <MessageSquare className="h-8 w-8 text-purple-500" />, href: '/contact' },
];

function KeyResourcesSection() {
    return (
        <section className="bg-gray-50 py-20 px-4 md:px-0">
            <div className="container mx-auto px-0 lg:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource) => (
                        <Link key={resource.title} href={resource.href}>
                            <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    {resource.icon}
                                    <CardTitle className="mt-4">{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 font-medium">{resource.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyResourcesSection;