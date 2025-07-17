import "@/assets/css/globals.css";
import MainFooter from "@/components/layouts/MainFooter";
import MainHeader from "@/components/layouts/MainHeader";
// THÊM: Import Toaster
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "A & U Bắc Giang",
  description: "A & U Bắc Giang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
        {/* THÊM: Component Toaster để hiển thị thông báo */}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}