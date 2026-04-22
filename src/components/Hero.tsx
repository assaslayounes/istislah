import { PlusCircle, Search, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { toast } from 'sonner';
import StatsCard from './StatsCard';
import { Link } from 'react-router-dom';

export default function Hero() {
  const handleNewRequest = () => {
    toast.success('سيتم توجيهك لصفحة إيداع طلب جديد', {
      description: 'يرجى تحضير الوثائق المطلوبة',
    });
  };

  const handleTrackRequest = () => {
    toast.info('سيتم توجيهك لصفحة متابعة الطلبات', {
      description: 'أدخل رقم الطلب للمتابعة',
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[540px] lg:min-h-[600px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="حقول زراعية"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary-900/40 via-primary-900/85 to-primary-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Text Content - Right side in RTL */}
          <div className="flex-1 text-center lg:text-right animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold text-primary-100 bg-white/10 backdrop-blur-sm rounded-full border border-white/15">
              الجمهورية الجزائرية الديمقراطية الشعبية
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.3] mb-5">
              مستقبل الفلاحة
              <br />
              <span className="text-primary-200">يبدأ من هنا</span>
            </h1>

            <p className="text-sm sm:text-base text-primary-100/80 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:me-0 mb-8">
              بوابة إلكترونية موحدة مخصصة لطلب استصلاح الأراضي الفلاحية، تهدف إلى
              تسهيل الإجراءات الإدارية ودعم الإستثمار الزراعي في ولاية الوادي
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleNewRequest}
                className="group flex items-center gap-2.5 px-6 py-3 bg-white text-primary-800 font-bold text-sm rounded-[var(--radius-button)] hover:bg-primary-50 transition-all duration-200 shadow-hero hover:shadow-card-hover cursor-pointer"
              >
                <Link to="/new-request">
                  <PlusCircle className="w-[18px] h-[18px] transition-transform group-hover:scale-110" />
                  إيداع طلب جديد
                </Link>
              </button>
              <button
                type="button"
                onClick={handleTrackRequest}
                className="group flex items-center gap-2.5 px-6 py-3 bg-white/10 text-white font-semibold text-sm rounded-[var(--radius-button)] border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <Search className="w-[18px] h-[18px] transition-transform group-hover:scale-110" />
                متابعة طلبي
              </button>
            </div>
          </div>

          {/* Stats Panel - Left side in RTL */}
          <div className="w-full lg:w-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col gap-4 items-center lg:items-end">
              {/* Stats badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15 text-white">
                <BarChart3 className="w-4 h-4 text-primary-200" />
                <span className="text-xs font-semibold">آخر الإحصائيات</span>
              </div>

              {/* Stats cards */}
              <div className="flex flex-row lg:flex-col gap-3">
                <StatsCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  value="+12K"
                  label="طلب قيد المعالجة"
                  delay={0.4}
                />
                <StatsCard
                  icon={<Users className="w-5 h-5" />}
                  value="450"
                  label="مشروع منجز    "
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
