import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
    { name: 'Chị Mai Anh', relation: 'Phụ huynh bé Minh Khang', quote: 'Từ ngày học ở A&U, con tự tin hơn hẳn. Về nhà lúc nào cũng líu lo hát tiếng Anh. Cảm ơn các thầy cô rất nhiều!', image: '/assets/images/R5AT4219.jpg' },
    { name: 'Anh Tuấn', relation: 'Phụ huynh bé An Nhiên', quote: 'Điều tôi thích nhất là phương pháp dạy học sáng tạo và sự quan tâm sát sao của giáo viên. Con tôi tiến bộ từng ngày.', image: '/assets/images/R5AT4035.jpg' },
    { name: 'Chị Lan', relation: 'Phụ huynh bé Gia Bảo', quote: 'Cơ sở vật chất hiện đại, chương trình học bài bản. A&U thực sự là lựa chọn đúng đắn của gia đình tôi.', image: '/assets/images/R5AT3945.jpg' },
    { name: 'Anh Hùng', relation: 'Phụ huynh bé Bảo Châu', quote: 'Các hoạt động ngoại khóa rất bổ ích, giúp con không chỉ học tiếng Anh mà còn phát triển nhiều kỹ năng mềm khác.', image: '/assets/images/R5AT3967.jpg' },
];

function TestimonialsSection() {
    return (
        <section id='testimonials' className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Phụ Huynh Nói Về Chúng Tôi</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Câu Chuyện Thành Công
                    </p>
                </div>
                
                {/* FIX: Sử dụng Carousel với nhiều item trên mỗi view */}
                <Carousel 
                    opts={{ align: "start", loop: true }} 
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((item, index) => (
                            // FIX: Các lớp basis responsive để hiển thị 1, 2 hoặc 4 item
                            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                                <div className="p-1 h-full">
                                    {/* FIX: Thêm class để đồng bộ chiều cao và căn giữa */}
                                    <Card className="flex flex-col h-full">
                                        <CardContent className="p-6 text-center flex flex-col flex-grow items-center">
                                            <Avatar className="w-20 h-20 mb-4 mx-auto">
                                                <AvatarImage src={item.image} alt={item.name} />
                                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            {/* FIX: Thêm flex-grow để đẩy nội dung xuống dưới */}
                                            <blockquote className="text-base text-gray-700 italic flex-grow my-4">
                                                "{item.quote}"
                                            </blockquote>
                                            <div>
                                                <p className="font-bold text-gray-900">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.relation}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}

export default TestimonialsSection;