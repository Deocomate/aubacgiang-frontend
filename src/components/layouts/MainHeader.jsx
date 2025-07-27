/* FILE: src/components/layouts/MainHeader.jsx */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import RegistrationForm from '@/components/shared/RegistrationForm';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef(({ className, title, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href || '#'}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem"

function MainHeader({ navigation = [] }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getLinkHref = (item, parentUrl = '') => {
        if (!item.url) return '/';
        if (parentUrl) {
            if (parentUrl === 'news') return `/category/${item.url}`;
            if (parentUrl === 'training') return `/training/${item.url}`;
        }
        return `/${item.url}`;
    }

    return (
        <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
            <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/assets/images/logo-au.png"
                                alt="Trung tâm Anh ngữ A&U"
                                width={45}
                                height={45}
                                className="object-contain"
                            />
                            <span className="font-extrabold text-xl lg:text-2xl text-gray-800">
                                A&U English
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center flex-1 justify-end">
                            <NavigationMenu viewport={false}>
                                <NavigationMenuList className="gap-1">
                                    {navigation.map((item) => (
                                        <NavigationMenuItem key={item.id}>
                                            {item.children && item.children.length > 0 ? (
                                                <>
                                                    <NavigationMenuTrigger
                                                        className={cn("bg-transparent px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold data-[state=open]:text-orange-500", {
                                                            "text-orange-500": pathname.startsWith(getLinkHref(item)) && item.url !== null,
                                                            "text-gray-700 hover:text-orange-500": !pathname.startsWith(getLinkHref(item))
                                                        })}
                                                    >
                                                        <Link href={getLinkHref(item)} className="flex items-center">
                                                            {item.name}
                                                        </Link>
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent className="bg-white">
                                                        <ul className="grid gap-1 p-2 w-[200px] lg:w-[220px]">
                                                            {item.children.map((child) => (
                                                                <ListItem
                                                                    key={child.id}
                                                                    title={child.name}
                                                                    href={getLinkHref(child, item.url)}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={getLinkHref(item)}
                                                        className={cn(navigationMenuTriggerStyle(), "bg-transparent px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold", {
                                                            "text-orange-500": pathname === getLinkHref(item),
                                                            "text-gray-700 hover:text-orange-500": pathname !== getLinkHref(item)
                                                        })}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="ml-2 xl:ml-4">
                                <DialogTrigger asChild>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 lg:px-4 text-sm xl:text-base">
                                        Đăng ký tư vấn
                                    </Button>
                                </DialogTrigger>
                            </div>
                        </div>

                        <button onClick={toggleMobileMenu} className="lg:hidden text-gray-800">
                            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                        <nav className="flex flex-col items-center space-y-4 py-6 px-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.id}
                                    href={getLinkHref(item)}
                                    className={`text-lg font-semibold transition-colors duration-200 ${pathname === getLinkHref(item) ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
                                    onClick={toggleMobileMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-6 w-full pt-4 border-t">
                                <DialogTrigger asChild>
                                    <Button onClick={() => setIsMobileMenuOpen(false)} className="bg-orange-500 hover:bg-orange-600 w-full text-white font-bold">
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