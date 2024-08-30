import Link from "next/link"
import { SeeMoreArrow } from "@/assets/icons"
// import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google"

type AnimatedLinkIconProps = {
    className?: string,
    href: string,
}

export default function AnimatedLinkIcon({ className, href }: AnimatedLinkIconProps) {

    const data = {
        event: "dlv-scroll-link",
        value: href

    }

    return (
        <Link
            href={href}
            className={`group relative h-12 w-12 pointer-events-auto overflow-hidden ${className}`}

        >
            <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-black flex justify-center items-center">
                <SeeMoreArrow className='hover-hover:group-hover:text-white transition-color duration-500 w-10 h-10' />
            </div>
            <div className="w-full h-full bg-black -translate-y-[102%] transform transition duration-300 hover-hover:group-hover:translate-y-[0%]" />
        </Link>
    )
}
