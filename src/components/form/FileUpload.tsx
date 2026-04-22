// components/form/FileUpload.tsx
import { Upload } from "lucide-react";

export const FileUpload = ({ label, onChange }: any) => (
    <div className="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer">
        <Upload className="mx-auto mb-2" />
        <p>{label}</p>
        <input type="file" className="hidden" onChange={onChange} />
    </div>
);