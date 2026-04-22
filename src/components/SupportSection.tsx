import { Headphones, Landmark, Podcast } from 'lucide-react';
import type { ReactNode } from 'react';

interface SupportFeature {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const features: SupportFeature[] = [
  {
    icon: <Headphones className="w-5 h-5" />,
    title: 'مرافقة تقنية',
    description: 'توجيه ميداني من طرف خبراء الولاية لضمان نجاح مشروعك الاستثماري',
    iconBg: 'bg-primary-100 text-primary-700',
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: 'تحفيزات مالية',
    description: 'الوصول إلى التمويل المؤسساتي والاستفادة الخدمات من طرف الدولة',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: <Podcast className="w-5 h-5" />,
    title: 'دراسات تفاعلية',
    description: 'تحديد دقيق لمشاريعك وتطبيقاتك والاستفادة من النماذج عبر الأقمار الصناعية',
    iconBg: 'bg-blue-100 text-blue-700',
  },
];

export default function SupportSection() {
  return (
    <section id="support" className="py-16 lg:py-24 bg-section-light">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Right side (RTL) - Image Grid */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Top-left large image */}
              <div className="col-span-1 row-span-2">
                <img
                  src="/farmer-field.png"
                  alt="مزارع في الحقل"
                  className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
              {/* Top-right */}
              <div>
                <img
                  src="/wheat-close.png"
                  alt="حقول القمح"
                  className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
              {/* Bottom-right */}
              <div>
                <img
                  src="/irrigation.png"
                  alt="نظام الري الحديث"
                  className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Left side (RTL) - Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-4">
              خدماتنا
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-neutral-800 leading-snug mb-6">
              دعم مستمر للمستثمرين
              <br />
              <span className="text-primary-600">الفلاحين</span>
            </h2>

            {/* Feature List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <FeatureItem key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, index }: { feature: SupportFeature; index: number }) {
  return (
    <div
      className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200/80 hover:border-primary-300 hover:shadow-card transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${feature.iconBg} transition-transform group-hover:scale-110 duration-200`}
      >
        {feature.icon}
      </div>
      <div>
        <h4 className="text-base font-bold text-neutral-800 mb-1">
          {feature.title}
        </h4>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
