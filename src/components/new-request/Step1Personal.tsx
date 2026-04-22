import { useFormContext } from "react-hook-form";
import { FormInput } from "@/components/form/FormInput";

export const Step1Personal = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-green-800 border-b pb-2">المعلومات الشخصية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormInput
                    label="الاسم"
                    {...register("firstName")}
                    error={errors.firstName?.message as string | undefined}
                />
                <FormInput
                    label="اللقب"
                    {...register("lastName")}
                    error={errors.lastName?.message as string | undefined}
                />
                <FormInput
                    type="date"
                    label="تاريخ الميلاد"
                    {...register("birthDate")}
                    error={errors.birthDate?.message as string | undefined}
                />
                <FormInput
                    label="مكان الميلاد"
                    {...register("birthPlace")}
                    error={errors.birthPlace?.message as string | undefined}
                />
                <FormInput
                    label="العنوان"
                    {...register("address")}
                    error={errors.address?.message as string | undefined}
                />
                <FormInput
                    label="البلدية (محل الإقامة)"
                    {...register("residenceCommuneId")}
                    error={errors.residenceCommuneId?.message as string | undefined}
                />
                <FormInput
                    label="اسم الأب"
                    {...register("fatherName")}
                    error={errors.fatherName?.message as string | undefined}
                />
                <FormInput
                    label="اسم الأم"
                    {...register("motherFirstName")}
                    error={errors.motherFirstName?.message as string | undefined}
                />
                <FormInput
                    label="لقب الأم"
                    {...register("motherLastName")}
                    error={errors.motherLastName?.message as string | undefined}
                />
            </div>
        </div>
    );
};
