import "@/assets/css/globals.css";

export const metadata = {
  title: "A & U Bắc Giang",
  description: "A & U Bắc Giang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
