'use client';

import { siteConfig, finalCTA } from '@/config/landing';
import { handleCTAClick } from '@/lib/tracking';

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-2xl mx-auto px-4 text-center">
                {/* 메시지 */}
                <div className="mb-10">
                    <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {finalCTA.line1}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-blue-600">
                        {finalCTA.line2}
                    </p>
                </div>

                {/* CTA 버튼 */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'buy', 'final-cta')}
                        className="px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {siteConfig.cta.buy}
                    </button>
                    <button
                        onClick={() => handleCTAClick(siteConfig.kmongUrl, 'inquiry', 'final-cta')}
                        className="px-10 py-4 bg-white text-blue-600 text-lg font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all"
                    >
                        {siteConfig.cta.inquiry}
                    </button>
                </div>

                {/* 안내 문구 */}
                <p className="text-xs text-gray-500">
                    {finalCTA.note}
                </p>
            </div>
        </section>
    );
}
