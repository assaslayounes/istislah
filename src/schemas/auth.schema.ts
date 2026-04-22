import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "البريد الإلكتروني مطلوب")
        .email("بريد إلكتروني غير صالح"),
    password: z
        .string()
        .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
    .object({
        firstName: z.string().min(2, "الاسم غير صالح"),
        lastName: z.string().min(2, "اللقب غير صالح"),
        email: z
            .string()
            .min(1, "البريد الإلكتروني مطلوب")
            .email("بريد إلكتروني غير صالح"),
        password: z.string().min(6, "كلمة المرور ضعيفة"),
        confirmPassword: z.string(),
        role: z.string().min(1, "الرجاء اختيار الدور"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "كلمتا المرور غير متطابقتين",
        path: ["confirmPassword"],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;