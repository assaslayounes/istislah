import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Sprout,
} from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

const contactItems: ContactInfo[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'المقر الرئيسي',
    lines: [
      'وزارة الفلاحة والتنمية الريفية',
      '12 شارع الفقيد عبدالرحمن، الجزائر العاصمة',
    ],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'مركز الاتصال',
    lines: [
      'الرقم الأخضر: 10 30',
      'الهاتف: 213+ (0) 89 67 45 23',
    ],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'الدعم التقني',
    lines: [
      'contact@madr.gov.dz',
      'support@mise-en-valeur@gov.dz',
    ],
  },
];

const footerLinks = [
  { label: 'شروط الإستخدام', href: '#' },
  { label: 'سياسة الخصوصية', href: '#' },
  { label: 'دليل المستخدم', href: '#' },
  { label: 'الدعم الفني', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Contact Strip */}
      <div className="bg-primary-800/50 border-b border-white/10">
        <div className="section-container py-10 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item) => (
              <ContactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="section-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
              <Sprout className="w-4 h-4 text-primary-200" />
            </div>
            <span className="text-sm font-semibold text-primary-200">
              استصلاح
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-primary-300 hover:text-white transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-primary-400">
            © 2024 الجمهورية الجزائرية الديمقراطية الشعبية | وزارة الفلاحة والتنمية الريفية
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactCard({ item }: { item: ContactInfo }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-primary-200 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
        {item.icon}
      </div>
      <h4 className="text-base font-bold text-white mb-2">
        {item.title}
      </h4>
      {item.lines.map((line) => (
        <p key={line} className="text-sm text-primary-300 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  );
}
