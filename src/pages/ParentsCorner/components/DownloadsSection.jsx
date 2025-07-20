/* src/pages/ParentsCorner/components/DownloadsSection.jsx */
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // THÊM: Import cn utility

// THÊM: Mảng màu sắc cho icon
const iconColors = [
    'text-orange-500',
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-red-500',
    'text-teal-500',
];

// SỬA: Component nhận props `documents`
function DownloadsSection({ documents }) {
    // THÊM: Xử lý trường hợp không có tài liệu
    if (!documents || documents.length === 0) {
        return null;
    }

    return (
        <section id="downloads" className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Tài Nguyên Học Tập</h2>
                    <p className="mt-2 text-4xl md-text-5xl font-extrabold tracking-tight text-gray-800">
                        Tài Liệu Tải Về
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        {/* SỬA: Map qua dữ liệu động từ API */}
                        {documents.map((item, index) => (
                            <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-md transition-colors hover:bg-gray-50">
                                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                    <FileText className={cn("h-5 w-5", iconColors[index % iconColors.length])} />
                                    <span className="font-medium text-gray-800">{item.name}</span>
                                </div>
                                <Button asChild>
                                    {/* SỬA: Link tải về trỏ đến `item.src` */}
                                    <Link href={item.src} target="_blank" rel="noopener noreferrer" download>
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