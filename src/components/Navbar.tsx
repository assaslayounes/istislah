import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Accessibility,
  Settings,
  Sprout,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'النشاطات', path: '/activities' },
  { label: 'إحصائيات', path: '/statistics' },
  { label: 'إتصل بنا', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-900 shadow-lg">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
              <Sprout className="w-5 h-5 text-primary-200" />
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-white leading-tight">
                البوابة الوطنية لاستصلاح الأراضي
              </p>
              <p className="text-xs text-primary-300 leading-tight">
                وزارة الفلاحة والتنمية الريفية
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 no-underline',
                      isActive
                        ? 'text-white bg-white/15'
                        : 'text-primary-200 hover:text-white hover:bg-white/10'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-primary-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="إعدادات الوصول"
            >
              <Accessibility className="w-[18px] h-[18px]" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-primary-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="الإعدادات"
            >
              <Settings className="w-[18px] h-[18px]" />
            </button>

            <div className="hidden sm:block mx-2 w-px h-6 bg-white/20" />


            <Link
              to="/register"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors no-underline"
            >
              تسجيل
            </Link>
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors no-underline"
            >
              دخول
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-primary-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary-950',
          mobileMenuOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'
        )}
      >
        <div className="section-container py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium transition-colors no-underline',
                  isActive
                    ? 'text-white bg-white/15'
                    : 'text-primary-200 hover:text-white hover:bg-white/10'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/register"
            className="block text-center mt-3 px-4 py-2.5 text-sm font-semibold text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors no-underline"
          >
            تسجيل
          </Link>
          <Link
            to="/login"
            className="block text-center mt-3 px-4 py-2.5 text-sm font-semibold text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors no-underline"
          >
            دخول
          </Link>
        </div>
      </div>
    </header>
  );
}
