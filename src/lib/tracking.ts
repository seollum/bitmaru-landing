// 트래킹 유틸리티
// dataLayer 기반 이벤트 기록

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

export function trackCTAClick(cta: 'buy' | 'inquiry', location: string): void {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'cta_click',
            cta,
            location,
            timestamp: new Date().toISOString(),
        });
    }
}

export function trackPackageClick(packageName: string, location: string): void {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'package_click',
            package: packageName,
            location,
            timestamp: new Date().toISOString(),
        });
    }
}

// CTA 클릭 핸들러 (링크 이동 전 이벤트 기록)
export function handleCTAClick(
    url: string,
    cta: 'buy' | 'inquiry',
    location: string
): void {
    trackCTAClick(cta, location);
    // 짧은 딜레이 후 새 탭에서 열기
    setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, 100);
}

export function handlePackageClick(
    url: string,
    packageName: string,
    location: string
): void {
    trackPackageClick(packageName, location);
    setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, 100);
}
