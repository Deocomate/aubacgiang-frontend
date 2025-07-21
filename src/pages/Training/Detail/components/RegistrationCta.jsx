"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RegistrationDialog from '@/components/shared/RegistrationDialog';

function RegistrationCta({ courseTitle, courseId }) {
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
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <RegistrationDialog courseId={courseId} courseTitle={courseTitle}>
                            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 transition-transform hover:scale-105 cursor-pointer w-full sm:w-auto sm:min-w-[280px]">
                                Đăng ký khoá học
                            </Button>
                        </RegistrationDialog>
                        <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-white transition-transform hover:scale-105 w-full sm:w-auto sm:min-w-[280px]">
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