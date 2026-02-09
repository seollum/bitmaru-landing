'use client';

import { packages, siteConfig } from '@/config/landing';
import { handlePackageClick } from '@/lib/tracking';

export default function Packages() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
                    {packages.title}
                </h2>
                <p className="text-sm text-gray-500 text-center mb-10">
                    {packages.note}
                </p>

                {/* 패키지 카드 */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {packages.items.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all hover:shadow-lg ${index === 1 ? 'border-blue-500 shadow-md' : 'border-gray-200'
                                }`}
                        >
                            {/* 헤더 */}
                            <div className={`px-6 py-4 ${index === 1 ? 'bg-blue-600 text-white' : 'bg-gray-50'}`}>
                                <h3 className={`text-lg font-bold ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                                    {pkg.name}
                                </h3>
                                <p className={`text-2xl font-bold ${index === 1 ? 'text-white' : 'text-blue-600'}`}>
                                    {pkg.price}
                                </p>
                            </div>

                            {/* 사양 */}
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">블로그 등급</span>
                                    <span className="text-gray-900 font-medium">{pkg.blogGrade}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">글자수</span>
                                    <span className="text-gray-900 font-medium">{pkg.charCount}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">작업일</span>
                                    <span className="text-gray-900 font-medium">{pkg.workDays}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">수정 횟수</span>
                                    <span className="text-gray-900 font-medium">{pkg.revisions}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">유지 기간</span>
                                    <span className="text-gray-900 font-medium">{pkg.maintenance}</span>
                                </div>

                                {/* 추천 상황 */}
                                <div className="pt-3 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1">이럴 때 추천</p>
                                    <p className="text-sm text-gray-700">{pkg.recommendation}</p>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => handlePackageClick(siteConfig.kmongUrl, pkg.name, 'packages')}
                                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors mt-4 ${index === 1
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    이 패키지로 크몽에서 구매
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 추가 옵션 */}
                <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-sm">추가 옵션 (별도 문의)</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {packages.additionalOptions.map((option, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
                                <p className="font-medium text-gray-900 text-sm">{option.name}</p>
                                <p className="text-blue-600 font-bold">{option.price}</p>
                                <p className="text-xs text-gray-500 mt-1">{option.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
