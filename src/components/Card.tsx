import type { ReactNode, SVGProps } from "react";
import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ['latin'] })

type Values = {
    title: string,
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}

export default function Card({ className, title, icon: Icon }: { className?: string } & Values) {
    return (
        <div className={`flex flex-col gap-y-4 justify-center items-center border-2 py-6 w-full ${className}`}>
            <Icon />
            <p className={`${aleo.className}`}>{title}</p>
        </div>
    )
}