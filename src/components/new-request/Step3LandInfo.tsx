import { useFormContext } from "react-hook-form";
import { FormInput } from "@/components/form/FormInput";

export const Step3LandInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-green-800 border-b pb-2">معلومات قطعة الأرض</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput
                    label="البلدية"
                    {...register("commune")}
                    error={errors.commune?.message as string | undefined}
                />
                <FormInput
                    label="تسمية المحيط"
                    {...register("oceanNaming")}
                    error={errors.oceanNaming?.message as string | undefined}
                />
                <FormInput
                    type="number"
                    step="any"
                    label="المساحة (هكتار)"
                    {...register("area", { valueAsNumber: true })}
                    error={errors.area?.message as string | undefined}
                />
            </div>
        </div>
    );
};
