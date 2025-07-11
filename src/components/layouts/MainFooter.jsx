// src/components/MainFooter.jsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';


const quickLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/about' },
    { label: 'Chương trình học', href: '/programs' },
    { label: 'Liên hệ', href: '/contact' },
    { label: 'Điều khoản dịch vụ', href: '/terms' },
    { label: 'Chính sách bảo mật', href: '/privacy' },
];


const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' }, // Thay thế bằng link Facebook thực tế
    { icon: <Instagram className="h-5 w-5" />, href: '#' }, // Thay thế bằng link Instagram thực tế
    { icon: <Youtube className="h-5 w-5" />, href: '#' }, // Thay thế bằng link Youtube thực tế
];


const contactInfo = {
    address: 'Số 123, Đường ABC, Thành phố Bắc Giang, Việt Nam', // Thay thế bằng địa chỉ thực tế
    phone: '1900 1234', // Thay thế bằng số điện thoại thực tế
    email: 'info@auenglish.edu.vn', // Thay thế bằng email thực tế
};


function MainFooter() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Us */}
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <Image
                                src="/assets/images/logo-au.png"
                                alt="Trung tâm Anh ngữ A&U"
                                width={100}
                                height={50}
                                className="mr-2"
                            />
                            <span className="font-bold text-xl text-gray-800">A&U English</span>
                        </Link>
                        <p className="text-gray-600 text-sm">
                            Trung tâm Anh ngữ hàng đầu tại Bắc Giang, mang đến môi trường học tập chuyên nghiệp và hiệu quả.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 text-sm hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Thông tin liên hệ</h3>
                        <p className="text-gray-600 text-sm flex items-center mb-2">
                            <MapPin className="h-4 w-4 mr-2" /> {contactInfo.address}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center mb-2">
                            <Phone className="h-4 w-4 mr-2" /> {contactInfo.phone}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                            <Mail className="h-4 w-4 mr-2" /> {contactInfo.email}
                        </p>
                    </div>


                    {/* Social Media */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Mạng xã hội</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href} className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Copyright */}
                <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} Trung tâm Anh ngữ A&U. All rights reserved.
                </div>
            </div>
        </footer>
    );
}


export default MainFooter;