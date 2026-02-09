'use client';

import { useState } from 'react';
import { faqItems } from '@/config/landing';

export default function FAQ() {
    const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // 첫 2개 기본 열림

    const toggleFAQ = (index: number) => {
        setOpenIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-10">
                    자주 묻는 질문
                </h2>

                <div className="space-y-3">
                    {faqItems.map((faq, index) => {
                        const isOpen = openIndices.includes(index);
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                            >
                                {/* 질문 헤더 */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">
                                        Q. {faq.question}
                                    </span>
                                    <span className="flex-shrink-0 text-gray-400">
                                        {isOpen ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                {/* 답변 */}
                                {isOpen && (
                                    <div className="px-5 pb-4">
                                        <div className="pt-2 border-t border-gray-200">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-xs text-gray-400 mt-6">
                    * 상세 규정은 크몽 상품 페이지를 참고해 주세요
                </p>
            </div>
        </section>
    );
}
