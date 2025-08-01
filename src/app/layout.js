// src/app/layout.js
import {Raleway} from 'next/font/google';
import "@/assets/css/globals.css";
import MainFooter from "@/components/layouts/MainFooter";
import MainHeader from "@/components/layouts/MainHeader";
import {Toaster} from "@/components/ui/sonner";
import {getMenus} from '@/services/menuService';
// THÊM: Import service và component mới
import {getContactInfo} from '@/services/contactService';
import FloatingSocials from '@/components/shared/FloatingSocials';

const raleway = Raleway({
    subsets: ['latin', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-raleway',
});

export const metadata = {
    title: "A & U Bắc Giang", description: "A & U Bắc Giang",
};

export default async function RootLayout({children}) {
    // SỬA: Lấy đồng thời cả menu và thông tin liên hệ
    const [menuData, contactData] = await Promise.all([getMenus(), getContactInfo()]);

    return (<html lang="vi" className={raleway.variable}>
    <body>
    <MainHeader navigation={menuData}/>
    {children}
    <MainFooter/>
    <FloatingSocials contactInfo={contactData}/>
    <Toaster richColors position="top-center"/>
    </body>
    </html>);
}