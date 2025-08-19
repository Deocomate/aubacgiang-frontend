import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const resources = [
    { title: 'Góc luyện tập online', description: 'Luyện đọc tiếng Anh online cùng con với Oxford Reading Club.', icon: <Image src="/assets/images/icon.jpeg" alt="Góc luyện tập online icon" width={32} height={32} className="h-8 w-8 rounded-full object-cover"/>, href: 'https://dashboard.oxfordreadingclub.com/' },
    { title: 'Tài liệu học tập', description: 'Tải về flashcards, bài tập giúp bé học tiếng Anh hiệu quả hơn', icon: <Download className="h-8 w-8 text-blue-500" />, href: '#downloads' },
    { title: 'Làm bài tập tại nhà', description: 'Truy cập hệ thống bài tập về nhà online English Hub của Oxford.', icon: <MessageSquare className="h-8 w-8 text-purple-500" />, href: 'https://englishhub.oup.com/' },
];

function KeyResourcesSection() {
    return (
        <section className="bg-gray-50 py-20 px-4 md:px-0">
            <div className="container mx-auto px-0 lg:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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