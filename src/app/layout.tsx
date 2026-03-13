import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vet-Sync | 동물병원 입원 환자 관리 시스템",
  description:
    "입원 차트, 업무 관리, 약물 계산까지. 동물병원 입원 환자 관리를 하나의 플랫폼에서. Vet-Sync로 진료에만 집중하세요.",
  keywords: ["동물병원", "수의사", "입원관리", "전자차트", "Vet-Sync"],
  openGraph: {
    title: "Vet-Sync | 동물병원 입원 환자 관리 시스템",
    description:
      "입원 차트, 업무 관리, 약물 계산까지. 동물병원 입원 환자 관리를 하나의 플랫폼에서.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
