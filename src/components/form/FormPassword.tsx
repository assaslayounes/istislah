import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
    label: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormPassword = ({ label, error, ...props }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <div className="space-y-2 text-right">
            <label className="text-sm font-medium">{label}</label>

            <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />

                <Input
                    type={show ? "text" : "password"}
                    {...props}
                    className="pl-10 pr-10 bg-slate-100 border-none h-12 rounded-xl"
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};