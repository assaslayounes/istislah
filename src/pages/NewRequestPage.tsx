import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
    step1Schema,
    step2Schema,
    step3Schema,
    step4Schema,
    type RequestFormValues
} from "@/schemas/requestSchemas";

import { Stepper } from "@/components/new-request/Stepper";
import { Step1Personal } from "@/components/new-request/Step1Personal";
import { Step2NationalId } from "@/components/new-request/Step2NationalId";
import { Step3LandInfo } from "@/components/new-request/Step3LandInfo";
import { Step4Attachments } from "@/components/new-request/Step4Attachments";

const steps = [
    { title: "المعلومات الشخصية", schema: step1Schema },
    { title: "الهوية الوطنية", schema: step2Schema },
    { title: "قطعة الأرض", schema: step3Schema },
    { title: "المرفقات", schema: step4Schema },
];

export default function NewRequestPage() {
    const [currentStep, setCurrentStep] = useState(0);

    const methods = useForm<RequestFormValues>({
        resolver: zodResolver(steps[currentStep].schema) as any,
        mode: "onTouched",
    });

    const { trigger, handleSubmit } = methods;

    const onNext = async () => {
        const isValid = await trigger();
        if (!isValid) {
            toast.error("يرجى التأكد من صحة المعلومات المدخلة.");
            return;
        }

        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
            window.scrollTo(0, 0);
        } else {
            handleSubmit(onSubmit)();
        }
    };

    const onPrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const onSubmit = (data: RequestFormValues) => {
        console.log("Form Submitted:", data);
        toast.success("تم إرسال الطلب بنجاح!");
        // Here you would make your API call
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10" dir="rtl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-green-900 mb-3">
                        طلب استصلاح الأراضي الزراعية
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        يرجى تعبئة النموذج التالي بدقة لتقديم طلب استصلاح الأراضي. تأكد من إرفاق جميع الوثائق المطلوبة في المرحلة الأخيرة.
                    </p>
                </div>

                {/* Stepper */}
                <Stepper currentStep={currentStep} steps={steps.map(s => s.title)} />

                {/* Form Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-10 mb-8">
                    <FormProvider {...methods}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            {currentStep === 0 && <Step1Personal />}
                            {currentStep === 1 && <Step2NationalId />}
                            {currentStep === 2 && <Step3LandInfo />}
                            {currentStep === 3 && <Step4Attachments />}
                        </form>
                    </FormProvider>
                </div>

                {/* Actions Navigation */}
                <div className="flex items-center justify-between mt-8">
                    <button
                        type="button"
                        onClick={onPrev}
                        disabled={currentStep === 0}
                        className="px-6 py-3 rounded-xl font-medium transition-colors border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        السابق
                    </button>

                    <button
                        type="button"
                        onClick={onNext}
                        className="px-8 py-3 rounded-xl font-bold transition-all bg-green-700 text-white hover:bg-green-800 shadow-sm hover:shadow active:scale-95"
                    >
                        {currentStep === steps.length - 1 ? "إرسال الطلب" : "التالي"}
                    </button>
                </div>
            </div>
        </div>
    );
}
