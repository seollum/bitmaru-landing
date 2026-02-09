'use client';

import { siteConfig } from '@/config/landing';
import { handleCTAClick } from '@/lib/tracking';

export default function MobileBottomCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg p-3">
            <div className="flex gap-3 max-w-lg mx-auto">
                <button
                    onClick={() => handleCTAClick(siteConfig.kmongUrl, 'buy', 'mobile-bottom')}
                    className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                    구매
                </button>
                <button
                    onClick={() => handleCTAClick(siteConfig.kmongUrl, 'inquiry', 'mobile-bottom')}
                    className="flex-1 py-3 bg-white text-blue-600 font-bold rounded-xl text-sm border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                    문의
                </button>
            </div>
        </div>
    );
}
