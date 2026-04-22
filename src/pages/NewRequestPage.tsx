// pages/NewRequestPage.tsx
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
    step1Schema,
    step2Schema,
    step3Schema,
    step4Schema,
} from "@/schemas/requestSchemas";

import { Stepper } from "@/components/stepper/Stepper";
import { Step2NationalId } from "@/components/steps/Step2NationalId";
import { Step1Personal } from "@/components/steps/Step1Personal";
// import other steps...

const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];

export default function NewRequestPage() {
    const [step, setStep] = useState(0);

    const methods = useForm({
        resolver: zodResolver(schemas[step]),
        mode: "onChange",
    });

    const onNext = async () => {
        const valid = await methods.trigger();
        if (!valid) {
            toast.error("يرجى التحقق من الحقول");
            return;
        }

        if (step < 3) {
            setStep(step + 1);
        } else {
            toast.success("تم إرسال الطلب بنجاح");
        }
    };

    const onPrev = () => setStep((s) => s - 1);

    return (
        <FormProvider {...methods}>
            <div className="max-w-5xl mx-auto py-10">
                {/* Header */}
                <h1 className="text-3xl font-bold text-green-800 text-center mb-2">
                    طلب استصلاح الأراضي الزراعية
                </h1>

                <Stepper current={step} />

                {/* Content */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Left Panel */}
                    <div className="col-span-1 bg-green-50 p-4 rounded-xl">
                        <h3 className="font-bold mb-2">توجيهات هامة</h3>
                        <ul className="text-sm space-y-2">
                            <li>تأكد من صحة المعلومات</li>
                            <li>الرقم الوطني يجب أن يكون صحيح</li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="col-span-2 bg-white p-6 rounded-xl">
                        {step === 0 && <Step1Personal />}
                        {step === 1 && <Step2NationalId />}
                        {step === 2 && <div>Step3</div>}
                        {step === 3 && <div>Step4</div>}

                        {/* Actions */}
                        <div className="flex justify-between mt-6">
                            {step > 0 && (
                                <button onClick={onPrev} className="btn-secondary">
                                    السابق
                                </button>
                            )}

                            <button onClick={onNext} className="btn-primary">
                                {step === 3 ? "إرسال" : "التالي"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}