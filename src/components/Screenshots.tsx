"use client";

import Image from "next/image";
import { useState } from "react";

const screenshots = [
  {
    id: "chart-detail",
    label: "입원 차트",
    src: "/screenshots/chart-detail.png",
    alt: "시간대별 바이탈/투약/수액 기록 차트",
    description: "AM/PM 시간대별로 체온, 심박수, 혈압, 투약, 수액, 검사를 한 화면에서 관리합니다.",
  },
  {
    id: "tasks",
    label: "업무 목록",
    src: "/screenshots/tasks.png",
    alt: "업무 관리 화면",
    description: "지연/현재/예정/완료로 분류된 업무를 시간대별, 동물별로 확인하고 체크합니다.",
  },
  {
    id: "chart-search",
    label: "차트 검색",
    src: "/screenshots/chart-search.png",
    alt: "차트 검색 화면",
    description: "환자명, 보호자명으로 빠르게 검색. 담당 수의사와 진단명을 한눈에 확인합니다.",
  },
  {
    id: "drug-calculator",
    label: "약물 계산기",
    src: "/screenshots/drug-calculator.png",
    alt: "약물 용량 계산기 화면",
    description: "체중 기반 자동 약물 용량 계산. 자주 쓰는 약물을 프리셋으로 등록하여 빠르게 사용합니다.",
  },
  {
    id: "patients",
    label: "환자 관리",
    src: "/screenshots/patients.png",
    alt: "환자/보호자 관리 화면",
    description: "종, 품종, 나이, 성별, 보호자 정보를 체계적으로 관리합니다.",
  },
  {
    id: "board",
    label: "게시판",
    src: "/screenshots/board.png",
    alt: "원내 게시판 화면",
    description: "당직 변경, 약품 재고, 교육 일정 등 원내 소통을 위한 게시판입니다.",
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Screenshots
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            직관적이고 깔끔한 인터페이스
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            복잡한 입원 데이터를 심플하게. 실무에서 바로 쓸 수 있는 UI를 제공합니다.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {screenshots.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === idx
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-muted hover:bg-primary-50 hover:text-primary border border-border"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="mt-10">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-xl">
            <div className="flex items-center gap-2 border-b border-border/60 bg-surface px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <Image
              src={screenshots[active].src}
              alt={screenshots[active].alt}
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
          <p className="mt-6 text-center text-base text-muted">
            {screenshots[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
