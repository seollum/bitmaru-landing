import { visualEvidence } from '@/config/landing';

export default function VisualEvidence() {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
                    {visualEvidence.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {visualEvidence.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            {/* 카드 헤더 */}
                            <div className="bg-blue-600 text-white px-4 py-3">
                                <h3 className="font-semibold text-sm">{item.title}</h3>
                            </div>

                            {/* 카드 콘텐츠 */}
                            <div className="p-4">
                                {item.type === 'image' && item.placeholder && (
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                                        <div className="text-center text-gray-400">
                                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-xs">이미지 준비 중</p>
                                        </div>
                                    </div>
                                )}

                                {item.type === 'text' && (
                                    <div className="space-y-3 mb-3">
                                        <div className="bg-red-50 border-l-4 border-red-300 p-3 rounded-r">
                                            <p className="text-xs text-red-600 font-medium mb-1">Before</p>
                                            <p className="text-sm text-gray-700">{item.before}</p>
                                        </div>
                                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
                                            <p className="text-xs text-green-600 font-medium mb-1">After</p>
                                            <p className="text-sm text-gray-700">{item.after}</p>
                                        </div>
                                    </div>
                                )}

                                {/* 캡션 */}
                                <p className="text-xs text-gray-500 text-center">{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* placeholder 안내 */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    * 실제 이미지는 README 안내에 따라 교체하세요
                </p>
            </div>
        </section>
    );
}
