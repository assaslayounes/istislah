import type { ReactNode } from "react";

type Props = {
    title: string;
    subtitle: string;
    children: ReactNode;
};

export const AuthLayout = ({ title, subtitle, children }: Props) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200 p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md space-y-6 sm:space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-green-800">{title}</h1>
                    <p className="text-sm sm:text-base text-gray-500">{subtitle}</p>
                </div>

                {children}
            </div>
        </div>
    );
};