"use client"
// src/components/layouts/MainHeader.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/about' },
    { label: 'Chương trình học', href: '/programs' },
    { label: 'Đội ngũ giáo viên', href: '/teachers' },
    { label: 'Thư viện', href: '/gallery' },
    { label: 'Liên hệ', href: '/contact' },
];

function MainHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            // **FIX:** Luôn có nền trắng, đổ bóng và hiệu ứng transition mượt mà
            className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* **FIX:** Tăng padding cho header */}
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/images/logo-au.png"
                            alt="Trung tâm Anh ngữ A&U"
                            width={50} // **FIX:** Điều chỉnh kích thước logo
                            height={50}
                            className="object-contain"
                        />
                        <span className="font-bold text-2xl text-gray-800">
                            A&U English
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                // **FIX:** Tăng kích thước chữ, hiệu ứng hover mượt mà
                                className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-md ${pathname === item.href
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                                    }`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-orange-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold ml-4 transition-transform hover:scale-105">
                            Đăng ký ngay
                        </Button>
                    </nav>

                    {/* Mobile Navigation Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden text-gray-800">
                        {isMobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-lg font-medium transition-colors duration-200 ${pathname === item.href ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                                    }`}
                                onClick={toggleMobileMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-48 mt-4">
                            Đăng ký ngay
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default MainHeader;