import type { Dispatch, ReactNode, SetStateAction } from 'react';

import Image from "next/image";
import { Besley, DM_Sans, Aleo, DM_Serif_Text } from 'next/font/google'

const besley = Besley({
    subsets: ['latin'],
    variable: '--font-besley',
    weight: ["400", "700"],
})

const dm_sans = DM_Sans({
    subsets: ['latin'],
})

const dm_serif_text = DM_Serif_Text({
    subsets: ['latin'],
    weight: ["400"],
})

const aleo = Aleo({ subsets: ['latin'] })

export default function Projects({ setSelectedProject }: { setSelectedProject: Dispatch<SetStateAction<string>> }) {
    return (
        <section className="bg-[#F8F8F8] py-[72px] px-6">
            <section className="flex flex-col max-w-[962px] m-auto">
                <h2 className={`${besley.className} font-sans font-bold text-[26px] mb-[36px]`}>Projects</h2>
                <section className="flex flex-col space-y-[72px]">
                    {PROJECTS.map(({ name, ...values }, index) => {
                        return (
                            <>
                                <button className='hover:cursor-zoom-in' onClick={() => setSelectedProject(name)}>
                                    <Project key={index} {...values} />
                                </button>
                            </>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

type Project = {
    title: string,
    description: string,
    summary: string,
    role: string,
}

function Project({ image, stack, ...rest }:
    Project & { image: string, stack: string[] }
) {
    return (
        <Card>
            {/* <Image src={image} height={342} width={572} alt="display of winnebago products" /> */}
            <div className='relative'>
                {/* <Image src={image} fill={true} className='absolute left-0 object-contain' alt="display of winnebago products" /> */}
                <Image src={image} width={0} sizes="100vw" height={0} alt="display of winnebago products" style={{ width: '100%', height: 'auto' }} />
            </div>
            <section className="m-8 ml-4 ">
                <Details {...rest} />
                <Stack stack={stack} />
            </section>
        </Card>
    )
}

function Card({ children }: { children: ReactNode }): ReactNode {
    return (
        <div className="relative grid md:grid-cols-[2fr,1fr] lg:grid-cols-[640px,1fr] bg-white max-w-[962px] shadow-lg">
            {/* </div><div className="relative flex flex-col bg-white overflow-hidden shadow-lg"> */}
            {children}
        </div>
    )
}

function Details({ title, description, summary, role }: Project) {
    return (
        <section className='text-left'>
            <h2 className={`${dm_serif_text.className} font-normal text-[22px]`}>{title}</h2>
            <p className={`${dm_sans.className} text-[12px] text-[#4F4F4F] mt-[4px]`}>{description}</p>
            {/* <p className={`${dm_sans.className} text-[14px] leading-[24px] mt-[10px]`}>{summary}</p> */}
            <h2 className={`${dm_sans.className} font-sans font-normal text-[16px] mt-[24px]`}>{role}</h2>
        </section>
    )
}

function Stack({ stack }: { stack: string[] }) {
    return (
        <ul className={`${dm_serif_text.className} font-serif font-normal text-[16px] flex items-center space-x-4 mt-[4px]`}>
            {stack.map((value: string, index: number) => {
                const isLast = index === stack.length - 1
                return (
                    <>
                        <li>{value}</li>
                        {!isLast && <li><div className="w-1 h-1 rounded-full bg-black" /></li>}
                    </>
                )
            })}
        </ul>
    )
}

type Projects = {
    name: string,
    title: string,
    description: string,
    summary: string,
    role: string,
    media: string,
    image: string,
    alt: string,
    stack: string[]
}[]

const PROJECTS: Projects = [
    {
        name: "winnebago",
        title: 'Winnebago Electric RV',
        description: 'Mobile applications for route managment, vehicle status & load tutorials.',
        summary: "Created three mobile applications - Aventura, Weight Distribution and Tahoe - for Winnebago Electric RV.",
        role: 'Int. Software Enginner',
        media: 'image',
        image: "/projects/winnebago_display.png",
        alt: "winnebago products display",
        stack: ["react", "node.js", "openAi", "ES6"]
    },
    {
        name: "futureCards",
        title: 'Future Cards',
        description: 'AI powered re-branding web application.',
        summary: "Developed an AI powered re-branding web application, decreasing ideation time. Conducted team meetings, code reviews, collaborated with design and directed ticket creation/completion.",
        role: 'Sr. Software Enginner',
        media: 'image',
        image: "/projects/fc_square.png",
        alt: "Psykick products display",
        stack: ["react", "node.js", "openAi", "ES6"]
    },

    {
        name: "psykick",
        title: 'Psykick',
        description: 'A sports predictor application.',
        summary: "Psykick, a sports prediction startup provides a thrilling environment for sports enthusiasts.",
        role: 'Int. Software Enginner',
        media: 'image',
        image: "/projects/psykick_square.png",
        alt: "Psykick products display",
        stack: ["react", "node.js", "openAi", "ES6"]
    },
    {
        name: "risingTeam",
        title: 'Rising Team ',
        description: 'Enhance team efficiency application.',
        summary: "Engineered two new management kits. Conducted code reviews, designed feature implementation, created decision/hand-off documentation, responsible for testing and debugging code.",
        role: 'Sr. Software Enginner',
        media: 'image',
        image: "/projects/rt_mobile_orange.png",
        alt: "Rising Team products display",
        stack: ["react", "node.js", "openAi", "ES6"]
    },
]

