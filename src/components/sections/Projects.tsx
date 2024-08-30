import type { Dispatch, ReactNode, SetStateAction } from 'react';
import Image from "next/image";
import { DM_Sans, Aleo, DM_Serif_Text } from 'next/font/google'

import { Content, SectionHeading } from '..';

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
        <Content id="projects" containerClassName='bg-[#F8F8F8]'>
            <SectionHeading>Projects</SectionHeading>
            <section className="flex flex-col gap-[32px] md:gap-[72px]">
                {PROJECTS.map(({ name, ...values }, index) => (
                    <button id={name} key={index} className='hover:cursor-zoom-in' onClick={() => setSelectedProject(name)}>
                        <Project {...values} />
                    </button>
                ))}
            </section>
        </Content>
    )
}

type Project = {
    title: string,
    description: string,
}

function Project({ image, alt = "", stack, ...rest }:
    Project & { image: string, alt: string, stack: string[] }
) {
    return (
        <Card>
            <Image src={image} width={0} sizes="100vw" height={0} alt={alt} style={{ width: '100%', height: 'auto' }} priority />
            <section className="flex flex-col gap-4 justify-center m-6 md:m-4 lg:ml-8 text-left">
                <Details {...rest} />
                <Stack stack={stack} />
            </section>
        </Card>
    )
}

function Card({ children }: { children: ReactNode }): ReactNode {
    return (
        <div className="relative grid sm:grid-cols-[2fr,1fr] bg-white shadow-lg">
            {children}
        </div>
    )
}

function Details({ title, description }: Project) {
    return (
        <section className='flex flex-col gap-2'>
            <h2 className={`${dm_serif_text.className} font-normal text-xl lg:text-2xl`}>{title}</h2>
            <p className={`${dm_sans.className} text-xs md:text-sm text-[#4F4F4F]`}>{description}</p>
        </section>
    )
}

function Stack({ stack }: { stack: string[] }) {
    return (
        <section className='flex flex-col space-y-2'>
            <h2 className='underline text-sm'>Tech Stack:</h2>
            <ul className={`${aleo.className} flex lg:flex-col flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm lg:space-x-0`}>
                {stack.map((value: string, index: number) => <li key={index}>{value}</li>)}
            </ul>
        </section>
    )
}

type Projects = {
    name: string,
    title: string,
    description: string,
    image: string,
    alt: string,
    stack: string[]
}[]

const PROJECTS: Projects = [
    {
        name: "winnebago",
        title: 'Winnebago Electric RV',
        description: 'Mobile applications for route managment, vehicle status & load tutorials',
        image: "/projects/winnebago_display.png",
        alt: "Winnebago project",
        stack: ['react-native', 'expo', 'mapbox', 'tomorrow.io'],
    },
    {
        name: "futureCards",
        title: 'Future Cards',
        description: 'An AI powered re-branding web application, that helps users reduce ideation time',
        image: "/projects/fc_square.png",
        alt: "Psykick project",
        stack: ['react', 'node.js', 'openAI', 'remix.run', 'tailwindcss'],
    },

    {
        name: "psykick",
        title: 'Psykick',
        description: 'A sports prediction startup which provides a thrilling environment for sports enthusiasts',
        image: "/projects/psykick_square.png",
        alt: "Psykick project",
        stack: ['react', 'framer-motion', 'tailwindcss'],
    },
    {
        name: "risingTeam",
        title: 'Rising Team ',
        description: 'Web and mobile applications which equip managers to easily run awesome team development sessions',
        image: "/projects/rt_mobile_orange.png",
        alt: "Rising Team project",
        stack: ['react', 'python', 'es6', 'styled-components'],
    },
]

