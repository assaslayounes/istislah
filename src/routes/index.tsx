import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import NewRequestPage from "@/pages/NewRequestPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* Future routes go here */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activities" element={<div className="section-container py-20 text-center">صفحة النشاطات - قريباً</div>} />
        <Route path="/statistics" element={<div className="section-container py-20 text-center">صفحة الإحصائيات - قريباً</div>} />
        <Route path="/contact" element={<div className="section-container py-20 text-center">صفحة اتصل بنا - قريباً</div>} />
        <Route path="/new-request" element={<NewRequestPage />} />
      </Route>
    </Routes>
  );
}
