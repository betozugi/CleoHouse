import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cle'O House - Spa Trị Mụn & Sẹo Tại Nhà",
  description: "Trị mụn chuẩn phác đồ cá nhân hóa tại Cle'O House. Lấy nhân mụn bằng tăm bông vô khuẩn, hiệu quả cải thiện rõ rệt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
