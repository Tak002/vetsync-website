import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VetSync - 동물병원 입원환자 종합관리 서비스",
  description:
    "입원환자 차트 디지털화, 약물 자동 계산, 처치 누락 방지, 보험 코드 자동 매핑. 동물병원 입원환자 관리의 모든 것.",
  icons: {
    icon: "/images/logo-192.png",
    apple: "/images/logo-192.png",
  },
  openGraph: {
    title: "VetSync - 동물병원 입원환자 종합관리 서비스",
    description:
      "입원환자 차트 디지털화, 약물 자동 계산, 처치 누락 방지. 동물병원 입원환자 관리의 모든 것.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
