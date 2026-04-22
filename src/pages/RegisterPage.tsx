"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { toast } from "react-hot-toast";
import { registerSchema } from "@/schemas/auth.schema";
import type { RegisterFormValues } from "@/schemas/auth.schema";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { FormInput } from "@/components/form/FormInput";
import { FormPassword } from "@/components/form/FormPassword";
import { FormSelect } from "@/components/form/FormSelect";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormValues) => {
        console.log(data);
        toast.success("تم إنشاء الحساب بنجاح");
    };

    return (
        <AuthLayout
            title="إنشاء حساب جديد"
            subtitle="انضم إلى المنصة الرقمية"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormInput
                        label="الاسم"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />

                    <FormInput
                        label="اللقب"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                </div>

                <FormInput
                    label="البريد الإلكتروني"
                    icon={Mail}
                    {...register("email")}
                    error={errors.email?.message}
                />

                <FormPassword
                    label="كلمة المرور"
                    {...register("password")}
                    error={errors.password?.message}
                />

                <FormPassword
                    label="تأكيد كلمة المرور"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                />

                <FormSelect
                    label="الدور"
                    {...register("role")}
                    error={errors.role?.message}
                />

                <button className="w-full h-12 bg-green-800 text-white rounded-xl hover:bg-green-900 transition">
                    إنشاء الحساب
                </button>
            </form>
        </AuthLayout>
    );
}