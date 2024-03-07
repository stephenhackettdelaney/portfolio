import { ReactNode } from "react";

import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ["400"],
})

type AnimatedButtonProps = {
    className: "danger" | "go"
    onClick: () => void,
    verb: string,
}

export default function AnimatedButton({ className = "danger", onClick, verb }: AnimatedButtonProps): ReactNode {

    const { borderClassName, textClassName, underlayClassName } = styles[className]

    return (
        <button
            onClick={onClick}
            className={`group relative h-10 w-28 pointer-events-auto overflow-hidden border-2 ${borderClassName}`}
        >
            <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 transition duration-500 flex justify-center items-center">
                <h2 className={`${dm_sans.className} text-sm ${textClassName} transition-color duration-500`}>{verb}</h2>
            </div>
            <section className={`${underlayClassName} w-full h-full -translate-y-[102%] transform transition duration-300 hover-hover:group-hover:translate-y-[0%]`} />
        </button>
    )
}

const styles = {
    danger: {
        borderClassName: "border-rose-500",
        textClassName: "text-rose-500 hover-hover:group-hover:text-rose-900",
        underlayClassName: "bg-rose-100/80"
    },
    go: {
        borderClassName: "border-emerald-500",
        textClassName: "text-emerald-500 hover-hover:group-hover:text-emerald-900",
        underlayClassName: "bg-emerald-100/80"
    },
}

