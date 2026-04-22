// components/steps/Step2NationalId.tsx
import { useFormContext } from "react-hook-form";
import { FormField } from "../form/FormField";

export const Step2NationalId = () => {
    const { register } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-4 bg-green-50 p-10 rounded-xl">
            <FormField
                label="الرقم التعريفي الوطني"
                name="nationalIdentificationNumber"
                register={register}
            />
            <FormField
                label="رقم البطاقة"
                name="idCardNumber"
                register={register}
            />
            <FormField
                label="تاريخ الإصدار"
                name="releaseDate"
                register={register}
                type="date"
            />
            <FormField
                label="جهة الإصدار"
                name="issuingAuthority"
                register={register}
            />
        </div>
    );
};