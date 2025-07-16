import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Star } from 'lucide-react';
import Link from 'next/link';

const downloadItems = [
    { title: 'Bộ flashcards từ vựng theo chủ đề (Mẫu giáo)', icon: <FileText className="h-5 w-5 text-orange-500" />, href: '#' },
    { title: 'Bài tập cuối tuần (Tiểu học - Unit 3)', icon: <FileText className="h-5 w-5 text-blue-500" />, href: '#' },
    { title: '5 truyện tranh song ngữ hay cho bé', icon: <FileText className="h-5 w-5 text-green-500" />, href: '#' },
    { title: 'Gợi ý các ứng dụng học tiếng Anh miễn phí', icon: <Star className="h-5 w-5 text-purple-500" />, href: '#' },
];

function DownloadsSection() {
    return (
        <section id="downloads" className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Tài Nguyên Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Tài Liệu Tải Về
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        {downloadItems.map((item) => (
                            <li key={item.title} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-md transition-colors hover:bg-gray-50">
                                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                    {item.icon}
                                    <span className="font-medium text-gray-800">{item.title}</span>
                                </div>
                                <Button asChild>
                                    <Link href={item.href}>
                                        <Download className="mr-2 h-4 w-4" /> Tải về
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default DownloadsSection;