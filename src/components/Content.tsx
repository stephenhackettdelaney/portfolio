import type { ReactNode } from "react"

export default function Content({ className = "", gap = "gap-9", id, children }: { className?: string, gap?: string, id?: string, children: ReactNode }): ReactNode {
    return (
        <section id={id} className={`${className} py-[120px]`}>
            <section className={`flex flex-col w-full max-w-[962px] m-auto px-6 ${gap}`}>
                {children}
            </section>
        </section>
    )
}