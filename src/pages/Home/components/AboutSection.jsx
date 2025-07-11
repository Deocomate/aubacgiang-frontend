// src/pages/Home/components/AboutSection.jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Rocket, Users } from 'lucide-react';
import Link from 'next/link';

function AboutSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                {/* Part 1: Introduction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-base font-semibold leading-7 text-orange-500">Về Chúng Tôi</h2>
                        <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Chào mừng đến với A&U English
                        </h3>
                        <p className="mt-6 leading-8 text-gray-600">
                            Với niềm đam mê và cam kết không ngừng, TRUNG TÂM NGOẠI NGỮ A&U BẮC GIANG đã và đang nỗ lực hết mình để trở thành điểm đến hàng đầu cho việc học và hoàn thiện kỹ năng ngôn ngữ. Chúng tôi tin rằng việc học không chỉ là tiếp thu kiến thức, mà còn là hành trình khám phá và truyền cảm hứng.
                        </p>
                        <p className="mt-4 leading-8 text-gray-600">
                            Tại A&U, chúng tôi tự hào có đội ngũ giáo viên giàu kinh nghiệm, tâm huyết và sáng tạo, luôn sẵn sàng tạo ra môi trường học tập thú vị. A&U không chỉ đơn thuần là nơi học, mà còn là một cộng đồng, nơi mọi người có cơ hội giao lưu, trao đổi kiến thức và trải nghiệm văn hóa đa dạng.
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105">
                                <Link href="/about">
                                    Tìm hiểu thêm <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <Image
                            src="/assets/images/R5AT3979.jpg"
                            alt="Giáo viên và học viên tại A&U English"
                            width={600}
                            height={700}
                            className="rounded-xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Part 2: Vision & Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="w-full h-full order-last md:order-first">
                        <Image
                            src="/assets/images/R5AT4121.jpg"
                            alt="Môi trường học tập chuyên nghiệp tại A&U"
                            width={600}
                            height={600}
                            className="rounded-xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-base font-semibold leading-7 text-orange-500">Định Hướng Phát Triển</h2>
                        <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Tầm Nhìn & Sứ Mệnh
                        </h3>
                        <p className="mt-6 leading-8 text-gray-600">
                            Chúng tôi mơ ước về một thế giới nơi mọi cá nhân đều có khả năng giao tiếp một cách tự tin và hiệu quả, và ngôn ngữ là cầu nối gắn kết con người.
                        </p>
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <Rocket className="absolute left-1 top-1 h-5 w-5 text-orange-500" />
                                    Nâng cao kỹ năng.
                                </dt>
                                <dd className="inline"> Cung cấp các khóa học chất lượng để giúp học viên phát triển kỹ năng ngôn ngữ và giao tiếp hiệu quả.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <Eye className="absolute left-1 top-1 h-5 w-5 text-orange-500" />
                                    Khám phá văn hóa.
                                </dt>
                                <dd className="inline"> Khuyến khích học viên tìm hiểu và trải nghiệm văn hóa đa dạng qua ngôn ngữ.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <Users className="absolute left-1 top-1 h-5 w-5 text-orange-500" />
                                    Xây dựng cộng đồng.
                                </dt>
                                <dd className="inline"> Tạo môi trường tương tác, nơi mọi người có cơ hội hợp tác, giao lưu và học hỏi lẫn nhau.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;