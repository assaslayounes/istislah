// components/form/FormField.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
    label: string;
    name: string;
    register: any;
    type?: string;
}

export const FormField = ({ label, name, register, type = "text" }: Props) => (
    <div className="space-y-2">
        <Label>{label}</Label>
        <Input type={type} {...register(name)} />
    </div>
);