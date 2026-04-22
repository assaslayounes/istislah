import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Props = {
    label: string;
    error?: string;
    icon?: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({
    label,
    error,
    icon: Icon,
    className,
    ...props
}: Props) => {
    return (
        <div className="space-y-2 text-right">
            <label className="text-sm font-medium">{label}</label>

            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                )}

                <Input
                    {...props}
                    className={cn(
                        "pl-10 bg-slate-100 border-none h-12 rounded-xl",
                        className
                    )}
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};