import React from 'react';
import Image from 'next/image';

function PhilosophySection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="prose prose-lg max-w-none text-center lg:text-left">
                        <h2 className="text-base font-semibold leading-7 text-orange-500">Triết Lý Giảng Dạy</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Không Chỉ Dạy, Mà Là Huấn Luyện
                        </p>
                        <p className="mt-6 leading-8 text-gray-600">
                            Một trong những yếu tố quan trọng nhất - quyết định thành công của người học tiếng Anh, chính là đội ngũ Giáo Viên. Tại A&U Bắc Giang, triết lý giảng dạy của đội ngũ Giáo Viên chính là <strong className="text-orange-600">"We don't teach - We coach"</strong>.
                        </p>
                        <p className="mt-4 leading-8 text-gray-600">
                            Với triết lý đó, Giáo Viên của A&U Bắc Giang không phải những người thầy, người cô như bình thường, mà là những huấn luyện viên tâm huyết, những người bạn sẵn sàng đồng hành bất kể ngày đêm trên con đường chinh phục tiếng Anh của học viên.
                        </p>
                    </div>
                    <div className="w-full h-[500px] relative">
                        <Image
                            src="/assets/images/R5AT4240.jpg" // Ảnh bà Minh Nguyệt
                            alt="Giáo viên A&U - người bạn đồng hành"
                            fill
                            className="rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PhilosophySection;