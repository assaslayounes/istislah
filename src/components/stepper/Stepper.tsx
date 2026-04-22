// components/stepper/Stepper.tsx
const steps = [
    "المعلومات الشخصية",
    "بيانات التعريف",
    "تفاصيل الأرض",
    "المرفقات",
];

export const Stepper = ({ current }: { current: number }) => {
    return (
        <div className="flex justify-between mb-6">
            {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${current === i ? "bg-green-700 text-white" : "bg-gray-200"
                            }`}
                    >
                        {i + 1}
                    </div>
                    <span className="text-sm mt-1">{step}</span>
                </div>
            ))}
        </div>
    );
};