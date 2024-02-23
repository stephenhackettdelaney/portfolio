import type { ReactNode } from "react";

export default function Grid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-between gap-[32px]">
            {children}
        </div>
    )
}