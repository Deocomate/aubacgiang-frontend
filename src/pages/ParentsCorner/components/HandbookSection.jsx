import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const handbookArticles = [
    { title: '5 cách giúp con ôn từ vựng tại nhà hiệu quả', image: '/assets/images/R5AT4016.jpg', excerpt: 'Biến việc học từ vựng thành trò chơi thú vị mà cả gia đình có thể tham gia...' },
    { title: 'Giải mã phương pháp học qua dự án tại A&U', image: '/assets/images/R5AT4016.jpg', excerpt: 'Tìm hiểu tại sao học qua dự án (Project-based learning) lại giúp con tự tin và chủ động hơn...' },
    { title: 'Cùng con đọc sách tiếng Anh: Bắt đầu từ đâu?', image: '/assets/images/R5AT3943.jpg', excerpt: 'Những đầu sách và phương pháp tuyệt vời để khơi gợi niềm đam mê đọc sách cho trẻ...' },
];

function HandbookSection() {
    return (
        <section id="handbook" className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Cẩm Nang Cho Phụ Huynh</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Kiến Thức & Kinh Nghiệm
                    </p>
                </div>
                {/* FIX: Thêm wrapper để giới hạn chiều rộng của lưới thẻ */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {handbookArticles.map((article) => (
                            <Card key={article.title} className="overflow-hidden flex flex-col group p-0">
                                {/* FIX: Tăng chiều cao ảnh lên h-72 */}
                                <div className="relative w-full h-72">
                                    <Image 
                                        src={article.image} 
                                        alt={article.title} 
                                        fill 
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 flex-grow">{article.title}</h3>
                                    <p className="mt-2 text-gray-600 text-sm mb-4">{article.excerpt}</p>
                                    <Button asChild variant="ghost" className="mt-auto self-start p-0 h-auto text-orange-600 hover:text-orange-700">
                                        <Link href="#">
                                            Đọc thêm <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HandbookSection;