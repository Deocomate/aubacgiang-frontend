"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import RegistrationForm from '@/components/shared/RegistrationForm';

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
    const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
            <header
                className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300"
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
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

                        <div className="hidden md:flex items-center">
                            <nav className="flex items-center gap-1 xl:gap-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-2 py-2 text-sm xl:text-base font-medium transition-colors duration-300 rounded-md ${pathname === item.href
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
                            <div className="ml-4">
                                <DialogTrigger asChild>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                                        Đăng ký tư vấn
                                    </Button>
                                </DialogTrigger>
                            </div>
                        </div>

                        <button onClick={toggleMobileMenu} className="md:hidden text-gray-800">
                            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                        <nav className="flex flex-col items-center space-y-4 py-6 px-4">
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
                            <div className="mt-6 w-full pt-4 border-t">
                                <DialogTrigger asChild>
                                    <Button onClick={() => setIsMobileMenuOpen(false)} className="bg-orange-500 hover:bg-orange-600 w-full text-white font-semibold">
                                        Đăng ký tư vấn
                                    </Button>
                                </DialogTrigger>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            <DialogContent className="sm:max-w-2xl bg-white p-8">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">Đăng ký tư vấn</DialogTitle>
                    <DialogDescription>
                        Vui lòng điền đầy đủ thông tin bên dưới. A&U sẽ liên hệ với bạn để tư vấn chi tiết.
                    </DialogDescription>
                </DialogHeader>
                <RegistrationForm onFormSubmitSuccess={() => setIsRegisterDialogOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}

export default MainHeader;