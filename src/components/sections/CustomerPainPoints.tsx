import { customerPainPoints } from '@/config/landing';

export default function CustomerPainPoints() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
                    {customerPainPoints.title}
                </h2>

                <div className="space-y-3 mb-8">
                    {customerPainPoints.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100"
                        >
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                                {index + 1}
                            </span>
                            <p className="text-gray-700 text-sm md:text-base">
                                "{item}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* 결론 */}
                <div className="text-center bg-blue-600 text-white rounded-xl p-6">
                    <p className="text-lg md:text-xl font-bold">
                        {customerPainPoints.conclusion}
                    </p>
                </div>
            </div>
        </section>
    );
}
