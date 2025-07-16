import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

function RegistrationCta() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Sẵn sàng để bắt đầu?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
                        Đăng ký ngay để nhận tư vấn chi tiết về lộ trình học và kiểm tra trình độ miễn phí tại A&U English.
                    </p>
                    {/* FIX: Thêm flex-col và sm:flex-row để xử lý responsive */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 transition-transform hover:scale-105">
                            <Link href="/contact">
                                Đăng ký khoá học
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-white transition-transform hover:scale-105">
                            <Link href="/training">
                                Khám phá khóa học khác <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegistrationCta;