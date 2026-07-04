import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import PageTransition from "@/components/layout/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李知烨 | 个人网站",
  description: "李知烨的个人网站 - 杭州师范大学阿里巴巴商学院电子商务专业。探寻自我，连接他人，成长中的ICF职业教练。",
  openGraph: {
    title: "李知烨 | 个人网站",
    description: "杭州师范大学阿里巴巴商学院电子商务专业。探寻自我，连接他人，成长中的ICF职业教练。",
    url: "https://your-domain.com",
    siteName: "李知烨",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning style={{ colorScheme: "light dark" }}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var h=(new Date()).getHours(),m=(new Date()).getMinutes(),t=h*60+m;if(t>=1290||t<450)document.documentElement.classList.add("dark")})()`,
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
