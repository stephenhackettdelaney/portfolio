import type { ReactNode } from "react"
import Link from "next/link"
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ["400"],
})

type AnimatedLinkProps = {
    className: "link",
    href: string,
    verb?: string,
}

export default function AnimatedLink({ className = "link", href, verb = "Visit site" }: AnimatedLinkProps): ReactNode {

    const { borderClassName, textClassName, underlayClassName } = styles[className]

    return (
        <Link
            href={href} target='_blank'
            className={`group relative h-10 w-28 pointer-events-auto overflow-hidden border-2 ${borderClassName}`}
        >
            <div className="absolute top-0 right-0 -left-0 bottom-0 z-10  transition duration-500 flex justify-center items-center">
                <h2 className={`${dm_sans.className} text-sm ${textClassName} transition-color duration-500`}>{verb}</h2>
            </div>
            <div className={`${underlayClassName} w-full h-full -translate-y-[102%] transform transition duration-300 hover-hover:group-hover:translate-y-[0%]`} />
        </Link>
    )
}

const styles = {
    link: {
        borderClassName: "border-blue-500",
        textClassName: "text-blue-600 hover-hover:group-hover:text-blue-900",
        underlayClassName: "bg-blue-100/80"
    },
}