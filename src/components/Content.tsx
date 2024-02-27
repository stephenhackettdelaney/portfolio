import type { ReactNode } from "react"

export default function Content({ containerClassName = "", contentClassName = "gap-9", id, children }: { containerClassName?: string, contentClassName?: string, id?: string, children: ReactNode }): ReactNode {
    return (
        <section id={id} className={`py-[80px] md:py-[120px] ${containerClassName}`}>
            <section className={`flex flex-col justify-center w-full max-w-[962px] m-auto px-4 sm:px-8 lg:px-0 ${contentClassName}`}>
                {children}
            </section>
        </section>
    )
}