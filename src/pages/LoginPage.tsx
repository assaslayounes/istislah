"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { toast } from "react-hot-toast";

import { loginSchema } from "@/schemas/auth.schema";
import type { LoginFormValues } from "@/schemas/auth.schema";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { FormInput } from "@/components/form/FormInput";
import { FormPassword } from "@/components/form/FormPassword";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
        toast.success("تم تسجيل الدخول بنجاح");
    };

    return (
        <AuthLayout
            title="تسجيل الدخول"
            subtitle="مرحبًا بك في البوابة الوطنية"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormInput
                    label="البريد الإلكتروني"
                    placeholder="name@domain.dz"
                    icon={Mail}
                    {...register("email")}
                    error={errors.email?.message}
                />

                <FormPassword
                    label="كلمة المرور"
                    {...register("password")}
                    error={errors.password?.message}
                />

                <button className="w-full h-12 bg-green-800 text-white rounded-xl hover:bg-green-900 transition">
                    دخول إلى الحساب
                </button>
            </form>
        </AuthLayout>
    );
}