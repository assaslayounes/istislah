// components/form/StepWrapper.tsx
import type { ReactNode } from "react";

export const StepWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            {children}
        </div>
    );
};