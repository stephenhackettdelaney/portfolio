import type { ReactNode } from "react"

export default function Content({ className = "", gap = "gap-9", id, children }: { className?: string, gap?: string, id?: string, children: ReactNode }): ReactNode {
    return (
        <section id={id} className={`${className} py-[80px] md:py-[120px]`}>
            <section className={`flex flex-col justify-center w-full max-w-[962px] m-auto px-4 sm:px-8 lg:px-0 ${gap}`}>
                {children}
            </section>
        </section>
    )
}