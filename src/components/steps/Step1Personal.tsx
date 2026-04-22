// components/steps/Step1Personal.tsx

import { useFormContext } from "react-hook-form";
//import { FormField } from "../form/FormField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Step1Personal = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-4 bg-green-50 p-10 rounded-xl">
            {/* First Name */}
            <div className="space-y-2">
                <Label>الاسم</Label>
                <Input {...register("firstName")} />
                {errors.firstName && (
                    <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
                )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
                <Label>اللقب</Label>
                <Input {...register("lastName")} />
                {errors.lastName && (
                    <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
                )}
            </div>

            {/* Birth Date */}
            <div className="space-y-2">
                <Label>تاريخ الميلاد</Label>
                <Input type="date" {...register("birthDate")} />
            </div>

            {/* Birth Place */}
            <div className="space-y-2">
                <Label>مكان الميلاد</Label>
                <Input {...register("birthPlace")} />
            </div>

            {/* Address */}
            <div className="col-span-2 space-y-2">
                <Label>العنوان</Label>
                <Input {...register("address")} />
            </div>

            {/* Commune */}
            <div className="space-y-2">
                <Label>بلدية الإقامة</Label>
                <Input {...register("residenceCommuneId")} />
            </div>

            {/* Father Name */}
            <div className="space-y-2">
                <Label>اسم الأب</Label>
                <Input {...register("fatherName")} />
            </div>

            {/* Mother First Name */}
            <div className="space-y-2">
                <Label>اسم الأم</Label>
                <Input {...register("motherFirstName")} />
            </div>

            {/* Mother Last Name */}
            <div className="space-y-2">
                <Label>لقب الأم</Label>
                <Input {...register("motherLastName")} />
            </div>
        </div>
    );
};