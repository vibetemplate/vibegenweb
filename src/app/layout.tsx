import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeGen - AI原生开发工具",
  description: "下一代AI原生开发工具，将模糊想法转化为高质量Web应用",
  keywords: ["AI开发工具", "代码生成", "Next.js", "开发效率"],
  authors: [{ name: "VibeGen Team" }],
  openGraph: {
    title: "VibeGen - AI原生开发工具",
    description: "下一代AI原生开发工具，将模糊想法转化为高质量Web应用",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  );
}