import type { ReactNode } from "react"

export default function Content({ className = "", id, children }: { className?: string, id?: string, children: ReactNode }) {
    return (
        <section id={id} className={`py-[72px] px-6 ${className}`}>
            <section className="flex flex-col gap-9 max-w-[962px] m-auto">
                {children}
            </section>
        </section>
    )
}