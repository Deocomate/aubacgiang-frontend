"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức & Sự kiện', href: '/news' },
    { label: 'Chương trình học', href: '/training' },
    { label: 'Đội ngũ giáo viên', href: '/teachers' },
    { label: 'Góc phụ huynh', href: '/parents-corner' },
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
            className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/images/logo-au.png"
                            alt="Trung tâm Anh ngữ A&U"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <span className="font-bold text-2xl xl:text-3xl text-gray-800">
                            A&U English
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 xl:gap-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                // FIX: Dùng breakpoint 'xl' để phân biệt tablet và desktop
                                className={`relative px-2 xl:px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300 rounded-md ${pathname === item.href
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
                    </nav>
                </div>
            )}
        </header>
    );
}

export default MainHeader;