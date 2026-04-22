# 📋 مرجع المشروع — istislah (استصلاح)

> **آخر تحديث:** 2026-04-21  
> **الحالة:** 🟡 قيد التطوير — تم إنجاز صفحة Home بالكامل

---

## 1. اسم المشروع ورؤيته

| الحقل | القيمة |
|-------|--------|
| **الاسم** | istislah (استصلاح) |
| **النوع** | بوابة وطنية لاستصلاح الأراضي الفلاحية |
| **الجهة** | وزارة الفلاحة والتنمية الريفية — الجمهورية الجزائرية |
| **الرؤية** | منصة إلكترونية موحدة تُسهّل على المستثمرين الفلاحين تقديم طلبات استصلاح الأراضي، ومتابعة حالتها، والاستفادة من الدعم التقني والمالي |
| **اللغة** | عربية (RTL) |
| **المسار** | `h:\app-react\istislah` |

---

## 2. التقنيات المستخدمة (Tech Stack)

| التقنية | الإصدار | الدور |
|---------|---------|-------|
| **Vite** | v8.0.9 | أداة البناء وخادم التطوير |
| **React** | v19.2.5 | مكتبة واجهة المستخدم |
| **TypeScript** | v6.0.2 | نظام الأنواع و Strong Typing |
| **react-router-dom** | v7.13.0 | التوجيه (Routing) مع Layout متداخل |
| **Tailwind CSS** | v4.1.18 | التنسيق عبر `@theme` design tokens |
| **@tailwindcss/vite** | v4.1.18 | تكامل Tailwind مع Vite |
| **tailwind-merge** | v3.4.0 | دمج فئات Tailwind بأمان (`cn()`) |
| **lucide-react** | v1.8.0 | مكتبة الأيقونات |
| **sonner** | v2.0.7 | إشعارات Toast (RTL) |
| **react-hot-toast** | v2.6.0 | مكتبة toast بديلة (مُثبّت، غير مستخدم حالياً) |
| **@tanstack/react-query** | v5.90.20 | إدارة حالة السيرفر (مُعدّ للاستخدام لاحقاً) |
| **react-hook-form** | v7.71.1 | إدارة النماذج (مُعدّ للاستخدام لاحقاً) |
| **zod** | v4.3.6 | التحقق من البيانات (مُعدّ للاستخدام لاحقاً) |
| **axios** | v1.13.4 | عميل HTTP (مُعدّ للاستخدام لاحقاً) |
| **Google Fonts (Cairo)** | — | خط عربي احترافي |

> **ملاحظة:** shadcn/ui لم يتم تثبيته بعد كمكتبة، لكن بنية المشروع مُعدّة لاستقباله (`lib/utils.ts` + `cn()` جاهزة).

---

## 3. هيكل المشروع (Project Structure)

```
h:\app-react\istislah\
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── hero-bg.png          ← صورة خلفية Hero (AI-generated)
│   ├── wheat-close.png       ← صورة قمح مقرّبة
│   ├── farmer-field.png      ← صورة مزارع في الحقل
│   ├── irrigation.png        ← صورة نظام ري حديث
│   └── desert-farm.png       ← صورة أرض صحراوية زراعية
│
├── src/
│   ├── components/
│   │   ├── common/           ← مكونات عامة مشتركة (فارغ حالياً)
│   │   ├── Navbar.tsx        ← شريط التنقل العلوي + قائمة الموبايل
│   │   ├── Hero.tsx          ← القسم الرئيسي مع خلفية + CTA + إحصائيات
│   │   ├── StatsCard.tsx     ← بطاقة إحصائية بتأثير زجاجي (قابلة لإعادة الاستخدام)
│   │   ├── ProcessSteps.tsx  ← مراحل معالجة الطلب (3 بطاقات)
│   │   ├── SupportSection.tsx ← قسم الدعم مع شبكة صور + قائمة ميزات
│   │   └── Footer.tsx        ← التذييل مع معلومات الاتصال
│   │
│   ├── pages/
│   │   └── HomePage.tsx      ← تجميع أقسام الصفحة الرئيسية
│   │
│   ├── layouts/
│   │   └── MainLayout.tsx    ← Navbar + <Outlet> + Footer
│   │
│   ├── routes/
│   │   └── index.tsx         ← تعريف المسارات مع MainLayout
│   │
│   ├── lib/
│   │   └── utils.ts          ← دالة cn() لدمج فئات Tailwind
│   │
│   ├── api/                  ← (فارغ — مُعدّ لعميل API)
│   ├── hooks/                ← (فارغ — مُعدّ لـ Custom Hooks)
│   ├── schemas/              ← (فارغ — مُعدّ لمخططات Zod)
│   ├── services/             ← (فارغ — مُعدّ لخدمات API)
│   ├── assets/               ← (فارغ — مُعدّ للأصول الثابتة)
│   │
│   ├── index.css             ← Tailwind v4 @theme + animations + base styles
│   ├── App.tsx               ← نقطة دخول التطبيق → AppRoutes
│   ├── App.css               ← (فارغ)
│   └── main.tsx              ← BrowserRouter + Sonner Toaster
│
├── index.html                ← lang="ar" dir="rtl" + Cairo font
├── vite.config.ts            ← @tailwindcss/vite + @ alias
├── tsconfig.app.json         ← paths: @/* → ./src/*
├── package.json
└── package-lock.json
```

---

## 4. ما تم إنجازه ✅

### 4.1 إعداد المشروع
- [x] تهيئة Vite + React + TypeScript
- [x] تكامل Tailwind CSS v4 مع `@tailwindcss/vite`
- [x] إعداد `@` path alias في Vite و TypeScript
- [x] تهيئة `index.html` بـ RTL + خط Cairo + SEO meta tags
- [x] إنشاء هيكل المجلدات القابل للتطوير

### 4.2 نظام التصميم (Design System)
- [x] لوحة ألوان خضراء متكاملة (Primary: 50→950)
- [x] ألوان محايدة (Neutral: 50→900)
- [x] ظلال مخصصة (`shadow-card`, `shadow-card-hover`, `shadow-hero`)
- [x] أنصاف أقطار (`radius-card`, `radius-button`, `radius-badge`)
- [x] رسوم متحركة (`fade-in`, `slide-up`, `slide-right`, `scale-in`, `float`)
- [x] أنماط أساسية + شريط تمرير مخصص

### 4.3 المكونات المنجزة (6 مكونات)
| المكون | الحالة | الوصف |
|--------|--------|-------|
| `Navbar` | ✅ | شريط تنقل أخضر داكن، قائمة موبايل متحركة، أزرار الوصول |
| `Hero` | ✅ | خلفية حقل قمح + تدرج لوني، عنوان عربي، أزرار CTA مع toast |
| `StatsCard` | ✅ | بطاقة إحصائية بتأثير Glassmorphism (قابلة لإعادة الاستخدام) |
| `ProcessSteps` | ✅ | 3 مراحل: تسجيل → دراسة → مصادقة |
| `SupportSection` | ✅ | شبكة صور (2×2) + 3 بطاقات ميزات |
| `Footer` | ✅ | 3 بطاقات اتصال + شريط سفلي بالروابط |

### 4.4 التوجيه (Routing)
- [x] `MainLayout` مع Navbar + Outlet + Footer
- [x] المسار `/` → `HomePage`
- [x] مسارات مؤقتة: `/activities`, `/statistics`, `/contact`

### 4.5 الصور
- [x] توليد 5 صور AI للزراعة الجزائرية
- [x] نسخها إلى مجلد `public/`

---

## 5. الخطوات القادمة 🚀

> **ما كنا سنفعله بالضبط قبل التوقف:**

### 5.1 الأولوية القصوى — تثبيت و تكامل shadcn/ui
- [ ] تثبيت shadcn/ui وتهيئته مع Tailwind v4
- [ ] استبدال الأزرار اليدوية بمكونات `Button` من shadcn
- [ ] إضافة مكونات `Card`, `Badge`, `Dialog` من shadcn حيث مناسب

### 5.2 تحسين الصفحة الرئيسية
- [ ] مراجعة التطابق مع التصميم المرجعي بدقة (Pixel-perfect)
- [ ] تحسين الاستجابة (Responsive) على الموبايل والتابلت
- [ ] إضافة تأثيرات Scroll-based animations (Intersection Observer)
- [ ] تحسين أداء الصور (lazy loading, WebP format)

### 5.3 الصفحات الجديدة
- [ ] صفحة **إيداع طلب جديد** — نموذج متعدد الخطوات (react-hook-form + zod)
- [ ] صفحة **متابعة الطلب** — بحث برقم الطلب
- [ ] صفحة **النشاطات** — عرض النشاطات الأخيرة
- [ ] صفحة **الإحصائيات** — رسوم بيانية
- [ ] صفحة **اتصل بنا** — نموذج اتصال

### 5.4 البنية التحتية
- [ ] إعداد `api/client.ts` باستخدام Axios + interceptors
- [ ] تكامل React Query مع API
- [ ] إنشاء Zod schemas في `schemas/`
- [ ] بناء Custom Hooks في `hooks/`

---

## 6. أوامر التشغيل

```bash
# تشغيل خادم التطوير
cd h:\app-react\istislah
npm run dev
# → http://localhost:5173/

# بناء الإنتاج
npm run build

# معاينة البناء
npm run preview
```

---

## 7. ملاحظات مهمة للجلسة القادمة

1. **Tailwind CSS v4** يستخدم `@theme` بدلاً من `tailwind.config.js` — جميع الـ tokens معرّفة في `src/index.css`
2. **shadcn/ui** غير مُثبّت بعد — يجب تثبيته وتهيئته أول شيء
3. **المجلدات الفارغة** (`api/`, `hooks/`, `schemas/`, `services/`, `components/common/`) مُعدّة مسبقاً للتوسع
4. **الصور** في `public/` هي صور مُولّدة بالذكاء الاصطناعي — يمكن استبدالها بصور حقيقية لاحقاً
5. **`react-hot-toast`** مُثبّت لكن غير مستخدم — نستخدم `sonner` بدلاً منه
