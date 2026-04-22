import { useFormContext } from "react-hook-form";
import { FormInput } from "@/components/form/FormInput";

export const Step2NationalId = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-green-800 border-b pb-2">معلومات الهوية الوطنية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput
                    label="الرقم الوطني للتعريف"
                    {...register("nationalIdentificationNumber")}
                    error={errors.nationalIdentificationNumber?.message as string | undefined}
                    placeholder="18 رقم"
                />
                <FormInput
                    label="رقم بطاقة التعريف"
                    {...register("idCardNumber")}
                    error={errors.idCardNumber?.message as string | undefined}
                />
                <FormInput
                    type="date"
                    label="تاريخ الإصدار"
                    {...register("releaseDate")}
                    error={errors.releaseDate?.message as string | undefined}
                />
                <FormInput
                    label="سلطة الإصدار"
                    {...register("issuingAuthority")}
                    error={errors.issuingAuthority?.message as string | undefined}
                />
            </div>
        </div>
    );
};
