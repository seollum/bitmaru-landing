import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "Bitmaru - High-Impact Blog Marketing",
  description: "철저한 키워드 전략과 100% 수작업으로 죽어가는 블로그를 살려냅니다. 크몽 만족도 99%의 검증된 블로그 마케팅 서비스.",
  openGraph: {
    title: "Bitmaru - High-Impact Blog Marketing",
    description: "철저한 키워드 전략과 100% 수작업으로 죽어가는 블로그를 살려냅니다.",
    url: "https://bitmaru.com",
    siteName: "Bitmaru",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bitmaru - High-Impact Blog Marketing",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitmaru - High-Impact Blog Marketing",
    description: "철저한 키워드 전략과 100% 수작업으로 죽어가는 블로그를 살려냅니다.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${notoSansKR.variable} font-sans antialiased bg-[#f6f6f8] text-[#0e111b] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
