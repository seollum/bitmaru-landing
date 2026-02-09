'use client';

import { siteConfig, heroContent } from '@/config/landing';
import { handleCTAClick } from '@/lib/tracking';

// 아이콘 컴포넌트 (번들 가볍게)
const icons = {
    Target: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    ),
    CheckCircle: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    FileText: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
};

export default function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* 헤드라인 */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    {heroContent.headline}
                </h1>

                {/* 서브헤드라인 */}
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    {heroContent.subheadline}
                </p>

                {/* 베네핏 3개 */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10">
                    {heroContent.benefits.map((benefit, index) => {
                        const IconComponent = icons[benefit.icon as keyof typeof icons];
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100"
                            >
                                <span className="text-blue-600">
                                    <IconComponent />
                                </span>
                                <span className="text-sm md:text-base text-gray-700 font-medium">
                                    {benefit.text}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* CTA 버튼 */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'buy', 'hero')}
                        className="px-8 py-4 bg-blue-600 text-white text-base md:text-lg font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {siteConfig.cta.buy}
                    </button>
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'inquiry', 'hero')}
                        className="px-8 py-4 bg-white text-blue-600 text-base md:text-lg font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all"
                    >
                        {siteConfig.cta.inquiry}
                    </button>
                </div>
            </div>
        </section>
    );
}
