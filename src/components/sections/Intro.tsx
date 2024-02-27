import type { ReactNode } from "react"
import Link from "next/link"
import { Besley, DM_Sans } from "next/font/google"

import { SeeMoreArrow } from "@/assets/icons"
import { Content } from ".."


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
            <Link
                href="#projects"
                className="group relative h-12 w-12 pointer-events-auto overflow-hidden mt-[100px]"
            >
                <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-black flex justify-center items-center">
                    <SeeMoreArrow className='group-hover:text-white transition-color duration-500 w-10 h-10' />
                </div>
                <div className="w-full h-full bg-black -translate-y-[102%] transform transition duration-300 lg:group-hover:translate-y-[0%]" />
            </Link>
        </Content>
    )
}