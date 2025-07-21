import React from 'react';
import Image from 'next/image';
import {Eye, Rocket, Users } from 'lucide-react';

function AboutSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
                    <div className="prose prose-lg max-w-none h-auto md:h-[600px] flex flex-col justify-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-base font-semibold leading-7 text-orange-500">Về Chúng Tôi</h2>
                            <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                Chào mừng đến với A&U English
                            </h3>
                            <p className="mt-6 leading-8 text-gray-600">
                                "Trung tâm Ngoại ngữ A&U là đơn vị đào tạo tiếng Anh uy tín tại Bắc Giang, chuyên cung cấp các chương trình học chất lượng cao dành cho mọi lứa tuổi. Với đội ngũ giáo viên giàu kinh nghiệm, cơ sở vật chất hiện đại và giáo trình chuẩn quốc tế, AU cam kết mang đến môi trường học tập chuyên nghiệp, hiệu quả và truyền cảm hứng. Chúng tôi thiết kế các khóa học đa dạng, bao gồm tiếng Anh trẻ em, giao tiếp, luyện thi IELTS, TOEIC, và chương trình tiếng Anh tích hợp theo sách giáo khoa. AU không chỉ chú trọng phát triển kỹ năng ngôn ngữ toàn diện mà còn đồng hành cùng học viên trên hành trình hội nhập và phát triển bản thân trong môi trường quốc tế."
                            </p>
                            <p className="mt-4 leading-8 text-gray-600">
                                Tại A&U, chúng tôi tự hào có đội ngũ giáo viên giàu kinh nghiệm, tâm huyết và sáng tạo, luôn sẵn sàng tạo ra môi trường học tập thú vị. A&U không chỉ đơn thuần là nơi học, mà còn là một cộng đồng, nơi mọi người có cơ hội giao lưu, trao đổi kiến thức và trải nghiệm văn hóa đa dạng.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[400px] md:h-[600px] flex items-center">
                        <Image
                            src="/assets/images/R5AT3979.jpg"
                            alt="Giáo viên và học viên tại A&U English"
                            width={600}
                            height={700}
                            className="rounded-xl shadow-2xl object-cover w-full h-full md:h-[580px] transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="w-full h-[400px] md:h-[500px] flex items-center order-last md:order-first">
                        <Image
                            src="/assets/images/R5AT4121.jpg"
                            alt="Môi trường học tập chuyên nghiệp tại A&U"
                            width={600}
                            height={600}
                            className="rounded-xl shadow-2xl object-cover w-full h-full md:h-[480px] transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none h-auto md:h-[500px] flex flex-col justify-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-base font-semibold leading-7 text-orange-500">Định Hướng Phát Triển</h2>
                            <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                Tầm Nhìn & Sứ Mệnh
                            </h3>
                            <p className="mt-6 leading-8 text-gray-600">
                                Chúng tôi mơ ước về một thế giới nơi mà mọi cá nhân đều có khả năng giao tiếp một cách tự tin, hiệu quả và chân thành qua ngôn ngữ.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Rocket className="absolute left-1 top-1 h-5 w-5 text-orange-500" />
                                        Tầm nhìn.
                                    </dt>
                                    <dd className="inline"> Chúng tôi hình dung một cộng đồng toàn cầu đan xen với sự đa dạng về ngôn ngữ và văn hóa, nơi mà ngôn ngữ không chỉ là công cụ truyền đạt thông tin mà còn là cầu nối gắn kết con người  </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Eye className="absolute left-1 top-1 h-5 w-5 text-orange-500" />
                                        Sứ mệnh.
                                    </dt>
                                    <dd className="inline"> Nâng tầm chất lượng đào tạo Ngoại Ngữ , A&U  luôn hướng tới mục tiêu giúp sức học viên hình thành và phát triển năng lực tiếng Anh một cách toàn diện, từ đó sẵn sàng và tự tin vươn tới những thành công mới, không chỉ trên con đường học tập, sự nghiệp mà còn trong tất cả các lĩnh vực trong cuộc sống và tại bất cứ nơi đâu.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;