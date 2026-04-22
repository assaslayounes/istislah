import { FileUpload } from "@/components/ui/FileUpload";

export const Step4Attachments = () => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-green-800 border-b pb-2">المرفقات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FileUpload
                    name="biometricIdCard"
                    label="بطاقة التعريف البيومترية"
                />
                <FileUpload
                    name="residenceCard"
                    label="بطاقة الإقامة"
                />
                <FileUpload
                    name="landContract"
                    label="عقد ملكية الأرض"
                />
            </div>
        </div>
    );
};
