import { processSteps } from '@/config/landing';

export default function Process() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-10">
                    {processSteps.title}
                </h2>

                {/* 데스크톱: 가로 배열 */}
                <div className="hidden md:flex items-start justify-between">
                    {processSteps.steps.map((step, index) => (
                        <div key={step.step} className="flex flex-col items-center text-center flex-1">
                            {/* 스텝 번호 */}
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-3">
                                {step.step}
                            </div>

                            {/* 타이틀 */}
                            <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>

                            {/* 설명 */}
                            <p className="text-sm text-gray-600 max-w-[120px]">{step.description}</p>

                            {/* 화살표 (마지막 제외) */}
                            {index < processSteps.steps.length - 1 && (
                                <div className="absolute transform translate-x-[80px] translate-y-5 text-gray-300">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 모바일: 세로 배열 */}
                <div className="md:hidden space-y-4">
                    {processSteps.steps.map((step, index) => (
                        <div key={step.step} className="flex items-start gap-4">
                            {/* 타임라인 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {step.step}
                                </div>
                                {index < processSteps.steps.length - 1 && (
                                    <div className="w-0.5 h-12 bg-blue-200 mt-2" />
                                )}
                            </div>

                            {/* 콘텐츠 */}
                            <div className="flex-1 pb-4">
                                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
