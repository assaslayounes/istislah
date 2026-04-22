import { UploadCloud } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FileUploadProps {
    name: string;
    label: string;
}

export const FileUpload = ({ name, label }: FileUploadProps) => {
    const { register, formState: { errors }, watch } = useFormContext();
    const error = errors[name]?.message as string | undefined;
    const value = watch(name);

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>
            <div
                className={cn(
                    "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors",
                    error ? "border-red-500" : "border-slate-300"
                )}
            >
                <label htmlFor={name} className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-3 text-slate-400" />
                        <p className="mb-2 text-sm text-slate-500">
                            <span className="font-semibold">اضغط للرفع</span> أو اسحب وأفلت الملف
                        </p>
                        <p className="text-xs text-slate-500">PDF, JPG, PNG (الحد الأقصى 5 ميجابايت)</p>
                    </div>
                    <input
                        id={name}
                        type="file"
                        className="hidden"
                        {...register(name)}
                    />
                </label>
            </div>
            {value && value.length > 0 && (
                <p className="text-sm text-green-600 font-medium">{value[0].name}</p>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};
