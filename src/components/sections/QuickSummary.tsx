import { quickSummary } from '@/config/landing';

// 아이콘 매핑
const icons = {
    calendar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    edit: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    ),
    check: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    clock: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

const iconKeys = ['calendar', 'edit', 'check', 'clock'] as const;

export default function QuickSummary() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
                    {quickSummary.title}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickSummary.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 border border-blue-100 text-center"
                        >
                            <div className="flex justify-center mb-3 text-blue-600">
                                {icons[iconKeys[index]]}
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                            <p className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                {item.value}
                            </p>
                            <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
