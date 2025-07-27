import React from 'react';
import Image from 'next/image';

function PhilosophySection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="prose prose-lg max-w-none text-center lg:text-left prose-p:font-medium">
                        <h2 className="text-base font-semibold leading-7 text-orange-500">Đội ngũ giáo viên chất lượng</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
                            Yếu tố cốt lõi tạo nên sự khác biệt tại AU
                        </p>
                        <p className="mt-6 leading-8 text-gray-600">
                            AU đặc biệt chú trọng đến chất lượng nhân sự trong công tác giảng dạy. Giáo viên nước ngoài tại trung tâm là người bản ngữ đến từ các quốc gia như Anh, Mỹ, sở hữu đầy đủ bằng cấp và chứng chỉ giảng dạy tiếng Anh quốc tế. Giáo viên  được tuyển chọn kỹ lưỡng, đào tạo bài bản và cam kết làm việc lâu dài tại AU, góp phần tạo nên sự ổn định và hiệu quả trong quá trình học tập của học viên.
                        </p>
                        <p className="mt-4 leading-8 text-gray-600">
                            Bên cạnh đó, đội ngũ giáo viên Việt Nam đều tốt nghiệp chuyên ngành Sư phạm tiếng Anh, có chuyên môn vững vàng, đồng thời luôn mang đến nguồn năng lượng tích cực và tâm huyết với nghề – trở thành người bạn đồng hành đáng tin cậy của học sinh trong mỗi giờ học
                        </p>
                    </div>
                    <div className="w-full h-[500px] relative">
                        <Image
                            src="/assets/images/R5AT4240.jpg"
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