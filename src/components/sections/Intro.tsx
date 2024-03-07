import type { ReactNode } from "react"
import { Besley, DM_Sans } from "next/font/google"

import { Content, AnimatedLinkIcon } from ".."


const besley = Besley({
    subsets: ['latin'],
    variable: '--font-besley',
    weight: ["400", "700"],
})

const dm_sans = DM_Sans({
    subsets: ['latin'],
})

export default function Intro(): ReactNode {
    return (
        <Content containerClassName="h-screen flex flex-col items-center w-full" contentClassName="gap-0">
            <div>
                <h1 className={`${besley.className} font-sans font-bold text-2xl sm:text-4xl`}>Stephen Hackett-Delaney</h1>
                <p className={`${dm_sans.className} text-xs sm:text-sm text-[#707070] mt-2`}>Permanent resident, Vancouver, BC</p>
            </div>
            <h2 className={`${besley.className} font-sans font-light text-xl sm:text-2xl mt-[36px]`}>Software Engineer</h2>
            <p className={`${besley.className} sm:max-w-[480px] text-base leading-[200%] sm:text-[18px] mt-[56px]`}>5+ years experience building production-ready web & mobile applications. Passion for creating user-centric experiences, performance optimization and delivering in a timely manner. Thrive in environments with inter-departmental collaboration. Comfortable leading or assisting projects. Highly proficient in React, JavaScript, Node.js, Prisma & TailwindCSS.</p>
            <AnimatedLinkIcon className="mt-[100px]" href="#projects" />
        </Content>
    )
}