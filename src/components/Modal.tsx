"use client"
import React, { useState, useEffect } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'
import { Besley, DM_Sans, Aleo, DM_Serif_Text } from 'next/font/google'
import cns from 'classnames'

import MatchCards from '../../public/modal/psykick/MatchCards'
import MatchCard from '../../public/modal/psykick/MatchCard'
import Dashboard from '../../public/modal/psykick/Dashboard'

import WelcomeFC from '../../public/modal/futureCards/WelcomeFC'

const besley = Besley({
    subsets: ['latin'],
    variable: '--font-besley',
    weight: ["400", "700"],
})

const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ["400"],
})

const dm_serif_text = DM_Serif_Text({
    subsets: ['latin'],
    weight: ["400"],
})

const aleo = Aleo({ subsets: ['latin'] })

export function Modal({ selectedProject, setSelectedProject }: { selectedProject: string, setSelectedProject: Dispatch<SetStateAction<string>> }) {
    useEffect(() => {
        // Add event listener to handle scroll behavior when modal is open
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            return () => {
                // Clean up event listener when modal is closed
                document.body.style.overflow = 'auto';
            }
        }
    }, [selectedProject]);

    return (
        <AnimatePresence>
            {!!selectedProject && (
                <motion.div
                    className='fixed top-0 left-0 w-screen h-screen bg-zinc-900/90'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className='absolute top-10 bottom-10 left-[50%] -translate-x-[50%] w-full max-w-[800px] bg-white rounded-xl p-4 md:p-[44px] overflow-y-scroll space-y-8'>
                        <CompanyDetails
                            title={PROJECTS[`${selectedProject}`].title}
                            description={PROJECTS[`${selectedProject}`].description}
                            href={PROJECTS[`${selectedProject}`].href}
                            setSelectedProject={setSelectedProject}
                        />
                        <ProjectContainer>
                            {PROJECTS[`${selectedProject}`].projects.map(({ title, description, stack, images, radius }, index: number) => {
                                return (
                                    <section key={index}>
                                        <ProjectDetails key={index} title={title} description={description} stack={stack} />
                                        <ProjectSlider images={images} radius={radius} />
                                    </section>
                                )
                            })}
                        </ProjectContainer>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function CompanyDetails({ title, description, href, setSelectedProject }: { title: string, description: string, href?: string, setSelectedProject: Dispatch<SetStateAction<string>> }) {
    return (
        <section className='flex flex-col'>
            <div className='flex justify-between'>
                <h2 className={`${dm_serif_text.className} text-[32px]`}>{title}</h2>
                <button className={`${dm_sans.className} text-[14px] text-[#F25555]`} onClick={() => setSelectedProject("")}>Close</button>
            </div>
            <p className={`${dm_sans.className} text-[14px] text-[#555555] leading-[24px] max-w-[640px]`}>{description}</p>
            {href && (
                <Link href={href} target='_blank'>
                    <div className='group hover:bg-zinc-800 group-hover:border-blue-400 inline-block border-2 border-blue-800 rounded mt-4 py-1 px-4 '>
                        <h2 className={`${dm_sans.className} text-blue-800 text-[16px] group-hover:underline group-hover:text-blue-400`}>visit site</h2>
                    </div>
                </Link>
            )}
        </section>
    )
}

function ProjectContainer({ children }: { children: ReactNode }): ReactNode {
    return (
        <section className='space-y-8'>{children}</section>
    )
}

function ProjectDetails({ title, description, href, stack }: { title: string, description: string, href?: string | undefined, stack: string[] }) {
    return (
        <section>
            <h2 className={`${dm_serif_text.className} text-[22px]`}>{title}</h2>
            <p className={`${dm_sans.className} text-[14px] text-[#555555] leading-[24px] max-w-[640px]`}>{description}</p>
            <ul className={`${aleo.className} flex gap-x-4 text-[14px]`}>
                {stack.map((value: string, index: number): ReactNode => {
                    const isLast = index === stack.length - 1
                    return (
                        <section key={index} className='flex items-center gap-x-4'>
                            <li key={index}>{value}</li>
                            {!isLast && <div className='w-1 h-1 bg-zinc-900 rounded-full' />}
                        </section>
                    )
                })}
            </ul>
        </section>
    )
}

type ProjectImage = {
    src: string,
    description: string,
    alt: string,
}

function ProjectSlider({ images, radius }: { images: ProjectImage[], radius?: string | undefined }): ReactNode {
    return (
        <div className='relative flex gap-x-5 h-full w-full pb-4 overflow-x-scroll mt-4'>
            {images.map((value: ProjectImage, index: number): ReactNode => <ProjectImage key={index} radius={radius} {...value} />)}
        </div>
    )
}

function ProjectImage({ className = "bg-zinc-400", src, description, alt, radius }: { className?: string | undefined, src: string, description: string, alt: string, radius?: string | undefined }) {
    return (
        <div className='flex flex-col gap-y-4 h-full'>
            {src.includes(".mov") ? <video src={src} playsInline loop muted autoPlay /> :
                // <div className='w-full h-auto'>
                //     <WelcomeFC style={{ width: '100%', height: '100%' }} />
                // </div>
                <div className={cns(`relative flex items-center justify-center w-[352px] h-[261px] mx-auto`, className, radius)}>
                    <Image src={src} className='w-full rounded-xl' sizes='max-width(350px), 350px' fill={true} alt={alt} />
                </div>
            }
            <p className={`${dm_sans.className} text-[14px] text-[#555555] leading-[24px] w-full text-center`}>{description}</p>
        </div>
    )
}

type Projects = {
    [key: string]: {
        title: string,
        description: string,
        href?: string,
        projects: {
            title: string,
            description: string,
            stack: string[],
            radius?: string,
            images: {
                className?: string,
                src: string,
                description: string,
                alt: string,
            }[]
        }[]
    }
}

const PROJECTS: Projects = {
    winnebago: {
        title: 'Winnebago Electric RV',
        description: 'Mobile applications for route managment, vehicle status & load tutorials',
        projects: [
            {

                title: 'Aventura',
                description: '',
                stack: ['react native', 'expo', 'mapbox', 'tomorrow.io'],
                radius: "rounded-lg",
                images: [
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/av_image_1.png', description: 'Route creation with animated drawer', alt: 'Route creation with animated drawer.' },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/av_image_2.png', description: "Weather alerts pertaining to user's alert settings", alt: "Weather alerts pertaining to user's alert settings." },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/av_image_3.png', description: 'Vehicle selection and weather alerts status', alt: 'Vehicle selection and weather alerts status.' },
                ]
            },
            {
                title: 'Tahoe',
                description: '',
                stack: ['react native', 'expo'],
                radius: "rounded-lg",
                images: [
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/product.png', description: 'Home screen', alt: 'Home screen' },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/climate.png', description: 'Climate screen', alt: 'Climate screen' },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/alerts.png', description: 'Status screen', alt: 'Status screen' },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/tanks.png', description: 'Tanks screen', alt: 'Tanks screen' },
                ]
            },
            {

                title: 'Weight Distribution',
                description: '',
                stack: ['react native', 'expo'],
                radius: "rounded-lg",
                images: [
                    { src: '/modal/winnebago/wd_image_1.png', description: 'Weight tutorials with load packing visuals', alt: 'Weight tutorials with load packing visuals' },
                    { src: '/modal/winnebago/wd_image_2.png', description: 'Sensors screen', alt: 'Sensors screen' },
                    { className: "bg-[#001B2E]", src: '/modal/winnebago/wd_image_3.png', description: 'Find dealership and settings screens', alt: 'Find dealership and settings screens' },
                ]
            },
        ]
    },
    futureCards: {
        title: 'Future Cards',
        description: 'AI powered re-branding web application',
        href: "https://future.cards/",
        projects: [
            {
                title: 'Landing Page',
                description: '',
                stack: ['react', 'framer motion', 'html', 'tailwindcss'],
                images: [
                    { src: '/modal/futureCards/future_cards.mov', description: 'Landing page', alt: 'Landing page' },
                ]
            },
            {
                title: 'Application',
                description: '',
                stack: ['react', 'node.js', 'openAI', 'remix.run', 'tailwindcss'],
                images: [
                    { src: '/modal/futureCards/welcome.png', description: 'React tour welcome screen', alt: 'React tour welcome screen' },
                    { src: '/modal/futureCards/add.png', description: 'React tour add first project screen', alt: 'React tour add first project screen' },
                    { src: '/modal/futureCards/question.png', description: 'Brand overview question', alt: 'Brand overview question' },
                    { src: '/modal/futureCards/cards.png', description: 'Brand cards dashboard', alt: 'Brand cards dashboard' },
                    { src: '/modal/futureCards/tip.png', description: "Question's helpful tip UI", alt: "Question's helpful tip UI" },
                    { src: '/modal/futureCards/overview.png', description: "AI generated re-branding analysis from user's answers", alt: "AI generated re-branding analysis from user's answers" },
                ]
            },
        ]
    },
    psykick: {
        title: 'Psykick',
        description: 'A sports predictor application',
        href: "https://psykick.app/auth/login",
        projects: [
            {
                title: 'Matches & Predictions',
                description: '',
                stack: ['react', 'remix.run', 'framer motion', 'tailwindcss'],
                images: [
                    { src: '/modal/psykick/match_1.png', description: 'Dashboard', alt: 'Dashboard' },
                    { src: '/modal/psykick/match_2.png', description: 'Match prediction cards', alt: 'Match prediction cards' },
                    { src: '/modal/psykick/match_3.png', description: 'Match modal with game stats & player predictions', alt: 'Match modal with game stats & player predictions' },
                ]
            },
            {
                title: 'Leagues',
                description: '',
                stack: [''],
                images: [
                    { src: '/modal/psykick/leagues_1.png', description: "Leagues which the user participates in", alt: 'Leagues which the user participates in' },
                    { src: '/modal/psykick/leagues_2.png', description: 'League table with player stats', alt: 'League table with player stats' },
                ]
            },
            {
                title: 'Additional',
                description: '',
                stack: [''],
                images: [
                    { src: '/modal/psykick/optimized.png', description: 'Mobile optimized', alt: 'Mobile optimized' },
                    { src: '/modal/psykick/rules.png', description: 'How to play', alt: 'How to play' },
                ]
            },
        ]
    },
    risingTeam: {
        title: 'Rising Team',
        description: 'Mobile & web kits to equip managers to easily run awesome team development sessions',
        href: "https://risingteam.com/",
        projects: [
            {
                title: 'First Concert',
                description: 'Mini kit series',
                stack: ['react', 'python', 'es6 javascript', 'styled-components'],
                radius: "rounded-lg",
                images: [
                    { src: '/modal/risingTeam/rt_quiz_product.png', description: 'Mini kit series mobile game', alt: 'Mini kit series mobile game' },
                    { src: '/modal/risingTeam/rt_transparent_1.png', description: 'First concert data input', alt: 'First concert data input' },
                    { src: '/modal/risingTeam/rt_quiz_two.png', description: 'Quiz display with countdown timer', alt: 'Quiz display with countdown timer' },
                    { src: '/modal/risingTeam/rt_quiz_three.png', description: 'Randomized player selection inputs', alt: 'Randomized player selection inputs' },
                    { src: '/modal/risingTeam/rt_quiz_four.png', description: 'Quiz results', alt: 'Quiz results' },
                    { src: '/modal/risingTeam/rt_quiz_five.png', description: 'Results share out', alt: 'Results share out' },
                ]
            },
            {
                title: 'Team Norms',
                description: 'Full kit series',
                stack: ['react', 'python', 'es6 javascript', 'styled-components'],
                images: [
                    { src: '/modal/risingTeam/brain_storming.png', description: 'Team norms sticky note brainstorming', alt: 'Team norms sticky note brainstorming' },
                    { src: '/modal/risingTeam/three_user_favorites.png', description: 'User selects 3 from their list of team norms', alt: 'User selects 3 from their list of team norms' },
                    { src: '/modal/risingTeam/team_favorites.png', description: "User selects 5 from team's list of team norms", alt: "User selects 5 from team's list of team norms" },
                    { src: '/modal/risingTeam/group_discussion.png', description: 'Group disussion - team lead selects 5 norms for team', alt: 'Group disussion - team lead selects 5 norms for team' },
                    { src: '/modal/risingTeam/team_norms.png', description: 'Team lead norm adds additional info to 5 team norms', alt: 'Team norm adds additional info to 5 team norms' },
                ]
            },
        ]
    },
}

export default Modal