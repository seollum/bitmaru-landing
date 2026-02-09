'use client';

import { siteConfig } from '@/config/landing';
import { handleCTAClick } from '@/lib/tracking';

export default function TopStickyBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* 슬로건 */}
                <p className="text-sm md:text-base text-gray-700 font-medium hidden sm:block">
                    {siteConfig.slogan}
                </p>
                <p className="text-xs text-gray-600 sm:hidden truncate max-w-[140px]">
                    {siteConfig.brandName}
                </p>

                {/* CTA 버튼들 */}
                <div className="flex gap-2">
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'buy', 'top-sticky')}
                        className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {siteConfig.cta.buy}
                    </button>
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'inquiry', 'top-sticky')}
                        className="px-3 py-2 md:px-4 md:py-2 bg-white text-blue-600 text-xs md:text-sm font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                        {siteConfig.cta.inquiry}
                    </button>
                </div>
            </div>
        </header>
    );
}
