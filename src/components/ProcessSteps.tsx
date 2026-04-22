import { ClipboardCheck, FileSearch, Award } from 'lucide-react';
import type { ReactNode } from 'react';

interface ProcessStep {
  icon: ReactNode;
  phase: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: <ClipboardCheck className="w-7 h-7" />,
    phase: 'المرحلة الأولى',
    title: 'التسجيل والإيداع',
    description: 'قم بإنشاء حسابك وقدم طلبك للاستفادة من الأراضي الفلاحية عبر الخدمة',
  },
  {
    icon: <FileSearch className="w-7 h-7" />,
    phase: 'المرحلة الثانية',
    title: 'الدراسة والتقييم',
    description: 'يتم دراسة طلبك من طرف الخبراء الإقليمية للحصول على صندوق الولائي',
  },
  {
    icon: <Award className="w-7 h-7" />,
    phase: 'المرحلة الثالثة',
    title: 'المصادقة والتسليم',
    description: 'بعد الموافقة تحصل على شهادة الاستصلاح بنشاطات إنتاج الإنتاج',
  },
];

export default function ProcessSteps() {
  return (
    <section id="process-steps" className="py-16 lg:py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full mb-3">
            كيف يعمل النظام
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-800">
            مراحل معالجة الطلب
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessStepCard
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <div
      className="group relative flex flex-col items-center text-center p-8 bg-section-light rounded-[var(--radius-card)] border border-primary-100/60 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Step Number */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary-600 text-white text-[10px] font-bold rounded-full">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {step.icon}
      </div>

      {/* Text */}
      <span className="text-xs font-semibold text-primary-500 mb-1.5">
        {step.phase}
      </span>
      <h3 className="text-lg font-bold text-neutral-800 mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-neutral-500 leading-relaxed">
        {step.description}
      </p>

      {/* Connecting line for desktop */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -left-4 lg:-left-5 w-8 lg:w-10 h-px bg-primary-200" />
      )}
    </div>
  );
}
