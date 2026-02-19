"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

function useCounter(end: number, duration = 2000, start = 0) {
  const [value, setValue] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const step = (end - start) / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setValue(end); clearInterval(timer); }
      else setValue(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, start, duration]);

  return { value, ref };
}

export default function Home() {
  const [ctaVisible, setCtaVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // CTA bar visibility on scroll
  useEffect(() => {
    const handleScroll = () => setCtaVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const timer = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollCarousel = useCallback((dir: number) => {
    carouselRef.current?.scrollBy({ left: dir * 350, behavior: "smooth" });
  }, []);

  // Counters
  const counter1 = useCounter(500, 2000);
  const counter2 = useCounter(99, 1500);
  const counter3 = useCounter(3200, 2500);
  const counter4 = useCounter(124, 2000);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8eaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="text-[#1d4cd7] w-6 h-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px] font-bold">rocket_launch</span>
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">빛마루</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-semibold text-slate-600 hover:text-[#1d4cd7] transition-colors" href="#process">프로세스</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-[#1d4cd7] transition-colors" href="#reviews">후기</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-[#1d4cd7] transition-colors" href="#faq">자주 묻는 질문</a>
            </nav>
            <div className="flex items-center">
              <a className="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-[#1d4cd7] hover:bg-blue-700 text-white text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5" href="https://kmong.com/gig/638867" target="_blank" rel="noopener noreferrer">
                크몽에서 확인하기
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full relative px-4 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)' }}>
          {/* Background Pattern - Dot Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #1d4cd7 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#1d4cd7]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/50 to-transparent rounded-full"></div>

          <div className="max-w-[1100px] mx-auto text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-slate-900 text-xs font-bold tracking-wider mb-8 shadow-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              전문 블로그 마케팅 솔루션
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.15] tracking-tight mb-6 break-keep">
              <span className="text-slate-900 block">블로그 마케팅,</span>
              <span className="text-[#1d4cd7] block">매출로 이어지고 있나요?</span>
            </h1>


            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 text-slate-700 text-sm font-medium">
                <span className="material-symbols-outlined text-[#1d4cd7] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                철저한 키워드 분석
              </div>
              <div className="inline-flex items-center gap-2 text-slate-700 text-sm font-medium">
                <span className="material-symbols-outlined text-[#1d4cd7] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                전문 작가의 스토리텔링
              </div>
              <div className="inline-flex items-center gap-2 text-slate-700 text-sm font-medium">
                <span className="material-symbols-outlined text-[#1d4cd7] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                확실한 성과 보고
              </div>
            </div>

            {/* Infographic Formula Box */}
            <div className="w-full max-w-4xl mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200/50">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

                  {/* 노출 - Highlighted */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-yellow-50 border-2 border-yellow-300 shadow-lg shadow-yellow-500/20 transform hover:scale-105 transition-transform">
                    <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-[#0056FF]">노출</span>
                    <span className="text-xs text-slate-500 font-medium">노출수</span>
                  </div>

                  <span className="text-3xl md:text-4xl font-bold text-slate-400">×</span>

                  {/* 전환율 */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#1d4cd7] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-[#1d4cd7]">전환율</span>
                    <span className="text-xs text-slate-500 font-medium">전환율</span>
                  </div>

                  <span className="text-3xl md:text-4xl font-bold text-slate-400">×</span>

                  {/* 객단가 */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#1d4cd7] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>sell</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-[#1d4cd7]">객단가</span>
                    <span className="text-xs text-slate-500 font-medium">1인당 결제액</span>
                  </div>

                  <span className="text-3xl md:text-4xl font-bold text-slate-400 hidden md:block">=</span>
                  <span className="text-3xl md:text-4xl font-bold text-slate-400 md:hidden">=</span>

                  {/* 매출 - Result */}
                  <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-400 shadow-lg shadow-green-500/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-green-600">매출</span>
                    <span className="text-xs text-green-700 font-medium">총 매출</span>
                  </div>
                </div>

                {/* Supporting Text */}
                <p className="text-center text-slate-500 text-sm mt-6 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                    빛마루는 <span className="text-[#0056FF] font-bold">유입 전략</span>에 집중합니다
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a className="flex items-center justify-center h-14 px-8 rounded-xl bg-[#1d4cd7] hover:bg-blue-700 text-white text-lg font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto" href="https://kmong.com/gig/638867" target="_blank" rel="noopener noreferrer">
                블로그 기자단 신청하기
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
              <a className="flex items-center justify-center h-14 px-8 rounded-xl bg-white border-2 border-slate-200 hover:border-[#1d4cd7]/50 text-slate-900 text-lg font-bold transition-all w-full sm:w-auto" href="https://link.inpock.co.kr/koreaautoweb" target="_blank" rel="noopener noreferrer">
                블로그 관리대행 상담하기
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                <Image alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4P3gefM01oDjSwpGiHezarauKCCwdN24IYnZHs2E8bq3Gi3FT2gbuxC5hMCGqwzqjl6tQSg2eGCiXETH2F2arNjr4_IiAT1YvpUnlx0_YCMzw89MJKw4izZ9TXneHiHFUTcgd2NUbRnmzO5ZhY-sBk68QvjdV2OWVtd9DDDgaJyeWYyC9ZLVsfWP5xofiYLV9_xV3G5Keb48zy9QQBlcgJajF-U8l98PDa8QMx-pVVuqnuxuvCwOaLipdMC3XgKcvOahgNlGEXyCe" width={32} height={32} />
                <Image alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPmIy6aH31xlpaVp6YS1d4QohEIsGb_dU2cM-2wPm-hW1IoHpQI0pQosOskyLfunwYfu3BpPOXoQZM9bdmCa2oIKJqp0KNBQwDcFdHMY2bdw-zJ3YUgFxXVliE1W18W1wPyj3Bw9cOqY09fmsmcIdar_uS_fLz66zptjF5EmOpVjIhqlVSynep8Rm-HHR7XnLE4Vkht91pHO2cUnv6Y4WtXIpPP5E3_UflEW5uTml8qaUEtwtEnx8Lm9b89AQVFzRcr4U0448oD0Tu" width={32} height={32} />
                <Image alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeMv_O-xI3pQTD94t8pN09uugZfeMxF10j5nMc4VPe4K4XSx64CHwQsK4DMeN5P62yZyfDdqT6p9JJqnRGsyLY-I3RVJJEuSN_wpSXbKowuzrp6qTfbomt9Z4R7oOAtAk3Wbi5XN3Nv6IY67GdPdaPs8kLXH4PgKZw3VnTAlwD8wRIGGBzBkSEwRIphdT-w3_rd_EYRluPzm7jqeOuIfRyS_uHgPGYgTNumvGURP8bEDTqLYGnW-bicZ_HPDcldKj3ItbW0uD1FeT" width={32} height={32} />
              </div>
              <p>500명 이상의 블로거가 신뢰합니다</p>
            </div>
          </div>
        </section>

        {/* Agency Pain Points Section */}
        <section className="w-full px-4 py-16 bg-gradient-to-b from-slate-50 to-white reveal">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                대행사에 맡겼는데
              </h2>
              <h2 className="text-3xl md:text-4xl font-black text-[#1d4cd7] mb-4">
                왜 효과가 없을까요?
              </h2>
              <p className="text-slate-500 text-lg">
                많은 대표님들이 겪고 계신 블로그 마케팅의 고질적인 문제점들입니다.
              </p>
            </div>


            {/* Pain Point Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm card-hover reveal reveal-delay-1">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-red-500 text-2xl">sentiment_dissatisfied</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">공장형 원고</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  어디서 본 듯한 뻔한 내용, 복사 붙여넣기 식의 글로는 소비자의 마음을 움직일 수 없습니다. 브랜드의 색깔이 전혀 드러나지 않습니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm card-hover reveal reveal-delay-2">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-orange-500 text-2xl">person_off</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">전략 없는 키워드</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  아무리 글을 잘 써도 검색되지 않으면 소용없습니다. 데이터 분석 없는 무작위 포스팅은 시간과 비용 낭비일 뿐입니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm card-hover reveal reveal-delay-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-slate-500 text-2xl">payments</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">불투명한 비용</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  기본적인 수정이나 이미지 추가에 붙는 숨은 비용들. 처음 견적과 달라지는 청구서에 당황하셨던 경험이 있으신가요?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section - Dark */}
        <section className="w-full px-4 py-20 bg-[#0a1628] reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">문제점</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                혹시 이런 고민을 하고 계신가요?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700">
                <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-400 text-3xl">trending_down</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">광고비는 나가는데<br />문의가 없다</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  매달 마케팅 예산은 지출되지만 실질적인 매출 전환이나 문의로 이어지지 않아 답답하신가요?
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700">
                <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-400 text-3xl">headset_off</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">관리대행 소통 부재<br />및 저품질</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  피드백은 느리고, 올라오는 콘텐츠의 퀄리티는 떨어져서 오히려 브랜드 이미지를 해치고 있지는 않나요?
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700">
                <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-400 text-3xl">record_voice_over</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">말만 번지르르한<br />대행사에 지쳤다</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  계약 전에는 뭐든 다 해줄 것처럼 말하지만, 막상 계약 후에는 태도가 돌변하는 대행사에 지치셨나요?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10-Second Summary Section */}
        <section className="w-full px-4 py-16 bg-white border-y border-slate-200 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                빛마루만의 차별점
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-[#f6f6f8] p-8 rounded-2xl border-2 border-slate-200 hover:border-[#1d4cd7] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 text-[#1d4cd7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">edit_note</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">전문가 직접 작성 & 검수</h3>
                <p className="text-slate-600 leading-relaxed">
                  자동 대량 생성에 의존하지 않고, 사람이 작성·검수합니다.<br />문장 톤과 흐름을 맞춰 완성도를 올립니다.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group bg-[#f6f6f8] p-8 rounded-2xl border-2 border-slate-200 hover:border-[#1d4cd7] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 text-[#1d4cd7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">target</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">최적화 키워드 설계</h3>
                <p className="text-slate-600 leading-relaxed">
                  업종·지역·목적에 맞춰 구조와 키워드를 먼저 설계합니다.<br />광고 느낌은 줄이고, 읽히는 글로 정리합니다.
                </p>
              </div>
              {/* Card 3 */}
              <div className="group bg-[#f6f6f8] p-8 rounded-2xl border-2 border-slate-200 hover:border-[#1d4cd7] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 text-[#1d4cd7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">speed</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">신속한 초안 및 명확한 수정</h3>
                <p className="text-slate-600 leading-relaxed">
                  초안 공유와 피드백 흐름을 빠르게 가져갑니다.<br />수정 기준을 명확히 해 진행이 끊기지 않게 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Process Section - 7 Steps */}
        <section className="w-full px-4 py-20 bg-[#0a1628] text-white" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">빛마루 7단계 프로세스</h2>
              <p className="text-blue-300/80 text-lg">체계적인 프로세스로 확실한 결과를 만듭니다</p>
            </div>

            {/* Desktop Layout - 2 Rows */}
            <div className="hidden md:block">
              {/* Row 1: Steps 01-04 */}
              <div className="relative mb-16">
                {/* Connecting Line */}
                <div className="absolute top-11 left-[12%] right-[12%] h-[2px] bg-white/15"></div>

                <div className="grid grid-cols-4 gap-6">
                  {/* Step 01 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">01</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">상담</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      업종·지역·목표를 짧게 정리합니다.<br />진행 범위와 일정이 바로 잡힙니다.
                    </p>
                  </div>

                  {/* Step 02 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">02</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">가이드 전송</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      톤·구성·필수 요소 기준을 먼저 맞춥니다.<br />작가가 흔들리지 않게 틀을 세웁니다.
                    </p>
                  </div>

                  {/* Step 03 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">03</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">전략 구축</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      키워드 방향과 콘텐츠 구조를 설계합니다.<br />목적 없는 글을 줄이고 흐름을 만듭니다.
                    </p>
                  </div>

                  {/* Step 04 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">04</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">원고 작성</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      수작업 기반으로 문장 톤과 가독성을 다듬습니다.<br />초안을 공유하고 빠르게 반영합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Steps 05-07 */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-11 left-[16%] right-[16%] h-[2px] bg-white/15"></div>

                <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {/* Step 05 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">05</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">발행</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      최종 점검 후 가장 적절한 형태로 발행합니다.<br />제목·구성·필수 문구를 마지막으로 확인합니다.
                    </p>
                  </div>

                  {/* Step 06 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">06</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">수정</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      수정 기준을 명확히 안내하고 반영합니다.<br />진행이 늘어지지 않게 깔끔히 정리합니다.
                    </p>
                  </div>

                  {/* Step 07 */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-[88px] h-[88px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 border-4 border-white/20 step-circle">
                      <span className="text-[28px] font-black">07</span>
                    </div>
                    <h3 className="text-[24px] font-bold mb-3">유입전략 도입</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-[200px]">
                      발행 후 유입 동선과 확산 포인트를 붙입니다.<br />포스팅이 자산처럼 이어지게 운영합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* Step 01 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">01</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">상담</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    업종·지역·목표를 짧게 정리합니다.<br />진행 범위와 일정이 바로 잡힙니다.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">02</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">가이드 전송</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    톤·구성·필수 요소 기준을 먼저 맞춥니다.<br />작가가 흔들리지 않게 틀을 세웁니다.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">03</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">전략 구축</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    키워드 방향과 콘텐츠 구조를 설계합니다.<br />목적 없는 글을 줄이고 흐름을 만듭니다.
                  </p>
                </div>

                {/* Step 04 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">04</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">원고 작성</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    수작업 기반으로 문장 톤과 가독성을 다듬습니다.<br />초안을 공유하고 빠르게 반영합니다.
                  </p>
                </div>

                {/* Step 05 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">05</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">발행</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    최종 점검 후 가장 적절한 형태로 발행합니다.<br />제목·구성·필수 문구를 마지막으로 확인합니다.
                  </p>
                </div>

                {/* Step 06 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">06</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">수정</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    수정 기준을 명확히 안내하고 반영합니다.<br />진행이 늘어지지 않게 깔끔히 정리합니다.
                  </p>
                </div>

                {/* Step 07 */}
                <div className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-white text-[#0a1628] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4 border-4 border-white/20">
                    <span className="text-[24px] font-black">07</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">유입전략 도입</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    발행 후 유입 동선과 확산 포인트를 붙입니다.<br />포스팅이 자산처럼 이어지게 운영합니다.
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-white/40 mt-2">← 옆으로 스크롤 →</p>
            </div>

          </div>
        </section>

        {/* Strategy Section - External Influx */}
        <section className="w-full px-4 py-20 bg-[#f6f6f8] reveal">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#1d4cd7] text-white text-xs font-bold uppercase tracking-wider mb-4">
                  전략 01
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  기다리지 않는 마케팅,<br />
                  <span className="text-[#1d4cd7]">외부 유입 전략</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  블로그 상위노출에만 묶이지 마세요. 빛마루는 고품질 블로그 콘텐츠와 커뮤니티/SNS 확산 전략을 결합하여, 잠재 고객이 있는 곳으로 직접 찾아가 트래픽을 끌어옵니다.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1d4cd7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">고품질 콘텐츠 생산</h4>
                      <p className="text-slate-500 text-sm">SEO 최적화 및 구매 전환을 유도하는 전문 원고 작성</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1d4cd7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">커뮤니티 시딩 (Seeding)</h4>
                      <p className="text-slate-500 text-sm">관련성 높은 대형 커뮤니티 타겟 배포</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1d4cd7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">트래픽 퍼널링</h4>
                      <p className="text-slate-500 text-sm">고관여 유저를 SNS를 통해서 외부 유입</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Chart Visualization */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="mb-6">
                  <p className="text-sm text-slate-500 mb-1">총 방문자 수</p>
                  <p className="text-3xl font-black text-slate-900">데이터 개요</p>
                </div>

                {/* Chart Bars */}
                <div className="flex items-end justify-between gap-2 h-[180px] mb-4 border-b border-slate-200 pb-4">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '30px' }}></div>
                    <span className="text-xs text-slate-400">1</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '50px' }}></div>
                    <span className="text-xs text-slate-400">2</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '40px' }}></div>
                    <span className="text-xs text-slate-400">3</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '70px' }}></div>
                    <span className="text-xs text-slate-400">4</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '55px' }}></div>
                    <span className="text-xs text-slate-400">5</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '85px' }}></div>
                    <span className="text-xs text-slate-400">6</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-slate-200 rounded-t-md" style={{ height: '75px' }}></div>
                    <span className="text-xs text-slate-400">7</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-[#1d4cd7] rounded-t-md" style={{ height: '120px' }}></div>
                    <span className="text-xs text-slate-400">8</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-[#1d4cd7] rounded-t-md" style={{ height: '140px' }}></div>
                    <span className="text-xs text-slate-400">9</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full bg-[#22c55e] rounded-t-md" style={{ height: '180px' }}></div>
                    <span className="text-xs text-slate-400">10</span>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#22c55e] text-2xl">trending_up</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">방문자 증가율</p>
                    <p className="text-2xl font-black text-[#22c55e]">+124%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Total Marketing Solutions Section */}
        <section className="w-full px-4 py-20 bg-[#0a1628] reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                토탈 마케팅 솔루션
              </h2>
              <p className="text-slate-400 text-lg">
                비즈니스 단계에 꼭 필요한 서비스만 선택하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - 블로그 브랜딩·관리대행 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">블로그 브랜딩·관리대행</h3>
                  <span className="px-3 py-1 rounded-md bg-yellow-400 text-slate-900 text-xs font-black uppercase tracking-wider">프리미엄</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  단순 관리가 아닌 브랜드의 팬을 만드는 과정입니다. 키워드 장악부터 잠재 고객 관리까지, 장기적인 매출 파이프라인을 구축합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">브랜드 스토리텔링 및 디자인</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">메인 키워드 상위노출 전략</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">이웃 관리 및 블로그 활성화 작업</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - 블로그 포스팅 (기자단/배포) */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-2">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">블로그 포스팅 (기자단/배포)</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  실제 활동 중인 최적화 블로거들이 직접 작성합니다. 고품질 원고와 이미지를 통해 자연스러운 바이럴 효과와 노출을 극대화합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">검증된 상위 블로거 섭외</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">고퀄리티 원고 작성 및 검수</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">키워드 검색 노출 최적화</span>
                  </div>
                </div>
              </div>

              {/* Card 3 - 단순 배포형 서비스 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-3">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">단순 배포형 서비스</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  합리적인 비용으로 브랜드 인지도를 넓히고 싶다면 추천합니다. 다량의 콘텐츠 배포를 통해 검색 점유율을 높입니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">가성비 높은 대량 배포</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">브랜드명 검색 시 도배 효과</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">신속한 작업 진행</span>
                  </div>
                </div>
              </div>

              {/* Card 4 - 네이버 플레이스 최적화 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-4">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">네이버 플레이스 최적화</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  오프라인 매장의 필수 전략입니다. 방문과 예약으로 직결되는 지도 순위 관리와 리뷰, 트래픽을 체계적으로 관리합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">플레이스 순위 상승 로직 적용</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">영수증 리뷰 및 예약자 관리</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#60a5fa] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    <span className="text-white/80 text-sm">실시간 유입 및 클릭 분석</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Proof Section */}
        <section className="w-full px-4 py-20 bg-gradient-to-b from-white to-slate-50 reveal" id="proof">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                데이터가 증명하는 압도적 성과
              </h2>
              <p className="text-slate-500 text-lg">
                단순한 약속이 아닌, 실제 클라이언트의 데이터로 증명합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div ref={counter1.ref} className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm card-hover reveal reveal-delay-1">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#1d4cd7] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
                <p className="text-4xl md:text-5xl font-black text-[#1d4cd7] counter-number mb-1">{counter1.value}+</p>
                <p className="text-slate-500 text-sm font-medium">누적 클라이언트</p>
              </div>

              {/* Stat 2 */}
              <div ref={counter2.ref} className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm card-hover reveal reveal-delay-2">
                <div className="w-14 h-14 mx-auto rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-yellow-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-4xl md:text-5xl font-black text-yellow-500 counter-number mb-1">{counter2.value}%</p>
                <p className="text-slate-500 text-sm font-medium">크몽 만족도</p>
              </div>

              {/* Stat 3 */}
              <div ref={counter3.ref} className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm card-hover reveal reveal-delay-3">
                <div className="w-14 h-14 mx-auto rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-green-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
                </div>
                <p className="text-4xl md:text-5xl font-black text-green-500 counter-number mb-1">{counter3.value.toLocaleString()}+</p>
                <p className="text-slate-500 text-sm font-medium">누적 포스팅</p>
              </div>

              {/* Stat 4 */}
              <div ref={counter4.ref} className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm card-hover reveal reveal-delay-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-purple-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </div>
                <p className="text-4xl md:text-5xl font-black text-purple-500 counter-number mb-1">{counter4.value}%</p>
                <p className="text-slate-500 text-sm font-medium">평균 유입 증가</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Case Study Section */}
        <section className="w-full px-4 py-20 bg-[#0a1628] reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#60a5fa] text-sm font-bold uppercase tracking-widest mb-4">CASE STUDIES</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                실제 성과로 말합니다
              </h2>
              <p className="text-slate-400 text-lg">업종별 Before & After 결과입니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case 1 - 병원/의료 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-1">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">병원 / 의료</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">S 피부과의원</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  블로그 관리대행 + 외부 유입 전략 도입 후 3개월간의 변화
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">월 블로그 방문자</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">1,200</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">4,800</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">+300% 증가</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">월 상담 문의</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">8건</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">32건</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">+300% 증가</p>
                  </div>
                </div>
              </div>

              {/* Case 2 - 맛집/외식 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-2">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold">맛집 / 외식</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">H 한식레스토랑</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  블로그 기자단 + 커뮤니티 시딩 2개월 진행 결과
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">네이버 검색 순위</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">미노출</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">TOP 3</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">&ldquo;강남 한식&rdquo; 키워드 기준</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">예약 전환율</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">2.1%</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">8.7%</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">+314% 증가</p>
                  </div>
                </div>
              </div>

              {/* Case 3 - 교육/학원 */}
              <div className="bg-[#1a2a42] rounded-2xl p-8 border border-slate-700 card-hover reveal reveal-delay-3">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">교육 / 학원</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">M 영어학원</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  블로그 관리대행 4개월 운영 후 변화
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">월 문의 전환</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">5건</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">28건</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">+460% 증가</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">블로그 일평균 방문</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold text-lg line-through">45명</span>
                      <span className="material-symbols-outlined text-green-400">arrow_forward</span>
                      <span className="text-green-400 font-black text-2xl">210명</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold mt-1">+367% 증가</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Reviews - Carousel */}
        <section className="w-full px-4 py-20 bg-white reveal" id="reviews">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                크몽 만족도 99%
              </h2>
              <p className="text-slate-500 mt-2">실제 고객님들의 생생한 후기입니다.</p>
            </div>

            {/* Carousel Container */}
            <div className="relative group">
              {/* Navigation Arrows */}
              <button
                onClick={() => scrollCarousel(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:bg-[#1d4cd7] hover:text-white transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-x-6"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:bg-[#1d4cd7] hover:text-white transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-6"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Scrollable Reviews */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Review 1 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.12.18</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;아주만족합니다 다음에 또이용할거에요&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#1d4cd7] font-bold text-sm">고</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">고마******* 님</p>
                      <p className="text-xs text-[#1d4cd7]">재구매 고객</p>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.11.11</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;글 자연스럽게 적어주셔서 너무 만족합니다 노출관련도 잘 반영된거 같아 좋네요 다음에 또 이용 할것같습니다!!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">K</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">K6******* 님</p>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.10.22</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;정성글 감사합니다.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">커</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">커디**** 님</p>
                      <p className="text-xs text-[#1d4cd7]">Biz 기업</p>
                    </div>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.10.02</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;퀄리티높은 작업 정말 감사합니다. 항상 맡기고있는데 매번 만족하고있네요, 고생많으셨습니다!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">삼</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">삼굥*** 님</p>
                      <p className="text-xs text-[#1d4cd7]">재구매 고객</p>
                    </div>
                  </div>
                </div>

                {/* Review 5 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.07.23</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;항상 잘 이용하고 있습니다. 감사합니다.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">향</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">향군******* 님</p>
                      <p className="text-xs text-[#1d4cd7]">Biz 기업 · 재구매</p>
                    </div>
                  </div>
                </div>

                {/* Review 6 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.07.21</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;꼼꼼하게 상담해주시고 작업물도 충분히만족합니다&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">베</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">베이***** 님</p>
                    </div>
                  </div>
                </div>

                {/* Review 7 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.06.30</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;원하던 퀄리티로 아주 빠르게, 작업해주셨습니다.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">향</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">향군******* 님</p>
                      <p className="text-xs text-slate-500">학원/교육</p>
                    </div>
                  </div>
                </div>

                {/* Review 8 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.06.14</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;작업 속도도 빠르시고 결과물도 만족스럽습니다!! 다음에도 또 요청드릴게요!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">G</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">G***** 님</p>
                    </div>
                  </div>
                </div>

                {/* Review 9 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.06.02</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;원하는 날짜까지 정확하게 모든 게시물 올려주셨습니다. 저희 업종상 기자단을 많이 이용해야 하는데 여기로 정착하려구요!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-sm">바</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">바이*** 님</p>
                      <p className="text-xs text-slate-500">IT 솔루션</p>
                    </div>
                  </div>
                </div>

                {/* Review 10 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.05.29</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;작업물 수시로 누락건있는지 체크해주시고 수정도 빠르게해주셔서 너무 만족했습니다! 다음에도 또 사용하겠습니다!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">동</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">동작* 님</p>
                    </div>
                  </div>
                </div>

                {/* Review 11 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.05.20</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;꼼꼼하게 작성해주셨습니다&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold text-sm">준</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">준바******* 님</p>
                      <p className="text-xs text-slate-500">학원/교육</p>
                    </div>
                  </div>
                </div>

                {/* Review 12 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.05.19</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;잘 해주셨니다~~~&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">해</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">해양****** 님</p>
                      <p className="text-xs text-[#1d4cd7]">재구매 고객</p>
                    </div>
                  </div>
                </div>

                {/* Review 13 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.05.15</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;신경써주는 블로그들 써주십니다!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-sm">선</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">선릉******** 님</p>
                      <p className="text-xs text-[#1d4cd7]">재구매 고객</p>
                    </div>
                  </div>
                </div>

                {/* Review 14 */}
                <div className="flex-shrink-0 w-[320px] bg-[#f6f6f8] p-6 rounded-2xl snap-start">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">2025.05.15</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 leading-relaxed min-h-[80px]">
                    &ldquo;너무 마음에 듭니다 감사합니다~!&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">E</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">EE**** 님</p>
                      <p className="text-xs text-[#1d4cd7]">재구매 고객</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <p className="text-center text-sm text-slate-400 mt-4">← 옆으로 스크롤하여 더 많은 후기를 확인하세요 →</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-24 bg-slate-900 text-white relative overflow-hidden reveal">
          {/* BG Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#1d4cd7 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              고민하는 순간에도<br />경쟁자는 앞서갑니다.
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              지금 바로 전문가에게 브랜딩을 맡기고, <br className="sm:hidden" />본업에 집중하세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://kmong.com/gig/638867" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-16 px-10 rounded-xl bg-[#1d4cd7] hover:bg-blue-600 text-white text-xl font-bold shadow-lg shadow-blue-500/40 transition-all transform hover:-translate-y-1">
                <span className="mr-2">서비스 신청하기</span>
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 py-20 bg-white reveal" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-12">
              자주 묻는 질문
            </h2>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group border-b border-slate-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900">어떤 업종이든 가능한가요?</h3>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  네, 가능합니다. 병원, 법률, 맛집, 뷰티, IT 등 다양한 업종의 포트폴리오를 보유하고 있으며, 각 산업군에 맞는 톤앤매너와 전문 지식을 바탕으로 원고를 작성해 드립니다.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group border-b border-slate-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900">원고 수정은 몇 번까지 가능한가요?</h3>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  디럭스 패키지 이상부터는 포스팅 발행 전까지 무제한 수정을 원칙으로 합니다. 단, 전체적인 기획 방향이 완전히 바뀌는 경우에는 별도 협의가 필요할 수 있습니다.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group border-b border-slate-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900">결제는 어떻게 진행되나요?</h3>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  모든 결제는 안전한 거래를 위해 크몽(Kmong) 플랫폼을 통해 진행됩니다. 크몽의 에스크로 시스템을 통해 작업물이 완료된 후 대금이 전달되므로 안심하실 수 있습니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#f6f6f8] py-12 px-4 border-t border-slate-200 pb-28">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="text-slate-400 w-6 h-6 flex items-center justify-center">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <span className="text-lg font-bold text-slate-700">Bitmaru</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2025 Bitmaru Marketing. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-[#1d4cd7] transition-colors" href="#">Terms</a>
              <a className="text-slate-400 hover:text-[#1d4cd7] transition-colors" href="#">Privacy</a>
              <a className="text-slate-400 hover:text-[#1d4cd7] transition-colors" href="#">Contact</a>
            </div>
          </div>
        </footer>
      </main>

      {/* 하단 고정 CTA 바 */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white py-5 px-4 shadow-2xl cta-bar ${ctaVisible ? "visible" : ""}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg sm:text-2xl font-semibold text-center sm:text-left">
            <span className="text-[#60a5fa]">소량으로 가능합니다.</span> 먼저 무료상담부터 받아보세요!
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://link.inpock.co.kr/koreaautoweb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 rounded-full bg-[#1d4cd7] hover:bg-blue-600 text-white text-lg font-bold transition-all"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

