type Props = {
    label: string;
    error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = ({ label, error, ...props }: Props) => {
    return (
        <div className="space-y-2 text-right">
            <label className="text-sm font-medium">{label}</label>

            <select
                {...props}
                className="w-full h-12 rounded-xl bg-slate-100 px-3 border-none"
            >
                <option value="">اختر الدور</option>
                <option value="user">مستخدم</option>
                <option value="admin">مشرف</option>
            </select>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};