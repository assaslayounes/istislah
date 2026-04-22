import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperProps {
    currentStep: number;
    steps: string[];
}

export const Stepper = ({ currentStep, steps }: StepperProps) => {
    return (
        <div className="w-full py-6 mb-8" dir="rtl">
            <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 right-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0 hidden sm:block" />
                
                {/* Active connecting line (width based on current step) */}
                <div 
                    className="absolute top-1/2 right-0 h-[2px] bg-green-600 -translate-y-1/2 z-0 hidden sm:block transition-all duration-300"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;

                    return (
                        <div key={index} className="relative z-10 flex flex-col items-center group">
                            {/* Circle */}
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-colors duration-300 bg-white",
                                    isCompleted
                                        ? "bg-green-600 border-green-600 text-white"
                                        : isActive
                                        ? "border-green-600 text-green-700 ring-4 ring-green-50"
                                        : "border-slate-300 text-slate-400"
                                )}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
                            </div>
                            
                            {/* Label */}
                            <div
                                className={cn(
                                    "absolute top-14 text-sm font-medium whitespace-nowrap transition-colors duration-300 hidden sm:block",
                                    isActive || isCompleted ? "text-slate-900" : "text-slate-500"
                                )}
                            >
                                {step}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Label */}
            <div className="mt-4 text-center sm:hidden">
                <span className="text-sm font-semibold text-green-700">
                    الخطوة {currentStep + 1} من {steps.length}: 
                </span>
                <span className="text-sm text-slate-600 mr-2">
                    {steps[currentStep]}
                </span>
            </div>
        </div>
    );
};
