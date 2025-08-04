// src/components/layouts/MainFooter.jsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức và sự kiện', href: '/news' },
    { label: 'Chương trình học', href: '/training' },
    { label: 'Đội ngũ giáo viên', href: '/teachers' },
    { label: 'Thư viện AU', href: '/parents-corner' },
    { label: 'Liên hệ', href: '/contact' },
];

function MainFooter({ contactInfo = {} }) {
    const { address = [], phone = '', email = '', facebook = '' } = contactInfo;

    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: facebook || '#' },
        { icon: <Instagram className="h-5 w-5" />, href: '#' },
        { icon: <Youtube className="h-5 w-5" />, href: '#' },
    ];

    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <Image
                                src="/assets/images/logo-au.png"
                                alt="Trung tâm Anh ngữ A&U"
                                width={100}
                                height={50}
                                className="mr-2"
                            />
                            <span className="font-extrabold text-xl text-gray-800">A&U English</span>
                        </Link>
                        <p className="text-gray-600 text-sm font-medium">
                            Trung tâm Anh ngữ hàng đầu tại Bắc Giang, mang đến môi trường học tập chuyên nghiệp và hiệu quả.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-700 mb-3">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-700 mb-3">Thông tin liên hệ</h3>
                        {address[0]?.address && (
                            <p className="text-gray-600 text-sm font-medium flex items-start mb-2">
                                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" /> {address[0].address}
                            </p>
                        )}
                        {phone && (
                            <p className="text-gray-600 text-sm font-medium flex items-center mb-2">
                                <Phone className="h-4 w-4 mr-2" /> {phone}
                            </p>
                        )}
                        {email && (
                            <p className="text-gray-600 text-sm font-medium flex items-center">
                                <Mail className="h-4 w-4 mr-2" /> {email}
                            </p>
                        )}
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-700 mb-3">Mạng xã hội</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href} className="text-gray-600 hover:text-orange-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 text-center text-gray-500 text-xs font-medium">
                    © {new Date().getFullYear()} Trung tâm Anh ngữ A&U. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;