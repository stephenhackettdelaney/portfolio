"use client"
import React, { useEffect } from 'react'
import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'
import { Besley, DM_Sans, Aleo, DM_Serif_Text } from 'next/font/google'
import cns from 'classnames'

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

export function Modal({ selectedProject, closeModal }: { selectedProject: string, closeModal: () => void }) {
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
        <div className='relative'>
            <AnimatePresence>
                {!!selectedProject && (
                    <motion.div
                        className='fixed top-0 left-0 w-screen h-screen bg-zinc-900/90'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='absolute z-10 top-10 bottom-10 left-[50%] -translate-x-[50%] w-[95%] m-auto lg:w-full max-w-[800px] max-h-[90%] sm:max-h-[900px] p-4 md:p-[44px] bg-white rounded-xl overflow-y-scroll space-y-8'>
                            <CompanyDetails
                                closeModal={closeModal}
                                {...PROJECTS[`${selectedProject}`]} />
                            <ProjectContainer>
                                {PROJECTS[`${selectedProject}`].projects.map(({ title, description, stack, images, radius }, index: number) => {
                                    return (
                                        <section key={index}>
                                            <ProjectDetails key={index} title={title} description={description} stack={stack} />
                                            <ProjectSlider images={images} radius={radius} />
                                        </section>
                                    )
                                })}
                                <footer className='flex justify-end gap-4'>
                                    {PROJECTS[`${selectedProject}`]?.href ? (
                                        <Link
                                            href={PROJECTS[`${selectedProject}`]?.href!} target='_blank'
                                            className="group relative h-10 w-28 pointer-events-auto overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-blue-500 transition duration-500 hover:border-blue-600 flex justify-center items-center gap-1">
                                                <h2 className={`${dm_sans.className} text-sm text-blue-600 group-hover:text-black transition-color duration-500`}>Visit site</h2>
                                            </div>
                                            <div className="w-full h-full bg-blue-100 -translate-y-[102%] transform transition duration-300 lg:group-hover:translate-y-[0%]" />
                                        </Link>
                                    ) : null}
                                    <button
                                        onClick={closeModal}
                                        className="group relative h-10 w-28 pointer-events-auto overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-rose-500 transition duration-500 hover:border-rose-600 flex justify-center items-center gap-1">
                                            <h2 className={`${dm_sans.className} text-sm text-[#F25555] group-hover:text-black transition-color duration-500`}>close</h2>
                                        </div>
                                        <div className="w-full h-full bg-rose-100 -translate-y-[102%] transform transition duration-300 lg:group-hover:translate-y-[0%]" />
                                    </button>
                                </footer>
                            </ProjectContainer>
                        </div>
                        <button onClick={closeModal} className='absolute top-0 right-0 bottom-0 left-0 cursor-zoom-out' />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function CompanyDetails({ title, description, overview, href, closeModal }: { title: string, description: string, overview: { description: string, achievements: string[] }[], href?: string, closeModal: () => void }) {
    return (
        <header className='bg-white flex flex-col gap-4 z-50'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h2 className={`${dm_serif_text.className} text-2xl md:text-3xl`}>{title}</h2>
                    <p className={`${dm_sans.className} text-sm text-[#555555] leading-[24px] pr-12`}>{description}</p>
                </div>
                <button className={`${dm_sans.className} text-sm text-[#F25555] w-14 h-14 rounded-full hover:underline`} onClick={closeModal}>Close</button>
            </div>
            {href && (
                <Link
                    href={href} target='_blank'
                    className="group relative h-10 w-28 pointer-events-auto overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-blue-500 transition duration-500 hover:border-blue-600 flex justify-center items-center gap-1">
                        <h2 className={`${dm_sans.className} text-sm text-blue-600 group-hover:text-black transition-color duration-500`}>Visit site</h2>
                    </div>
                    <div className="w-full h-full bg-blue-100 -translate-y-[102%] transform transition duration-300 lg:group-hover:translate-y-[0%]" />
                </Link>
            )}
            <section className='flex flex-col gap-2 border-t-[12px] border-2 border-zinc-200 bg-white p-5 pt-3 rounded my-8'>
                <h2 className={`${besley.className} text-lg`}>Overview & Achievements</h2>
                {overview.map(({ description, achievements }, index: number) => {
                    return (
                        <section className='flex flex-col gap-4' key={index}>
                            <p className={`${dm_sans.className} text-sm leading-[24px] border-b-2 py-6 pt-0 border-zinc-300`}>{description}</p>
                            <ul className={`${dm_sans.className} flex flex-col gap-4 text-sm list-disc pt-4`}>
                                {achievements.map((value: string, index: number) => <li key={index} className='ml-4 leading-[22px]'>{value}</li>)}
                            </ul>
                        </section>
                    )
                })}
            </section>
        </header>
    )
}

function ProjectContainer({ children }: { children: ReactNode }): ReactNode {
    return (
        <section className='space-y-8'>{children}</section>
    )
}

function ProjectDetails({ title, description, stack }: { title: string, description: string, stack: string[] }) {
    return (
        <section>
            <h2 className={`${dm_serif_text.className} text-xl`}>{title}</h2>
            <p className={`${dm_sans.className} text-[14px] text-[#555555] leading-[24px] max-w-[640px]`}>{description}</p>
            <ul className={`${aleo.className} flex flex-col sm:flex-row gap-x-4 text-[14px]`}>
                {stack.map((value: string, index: number): ReactNode => <li key={index}>{value}</li>)}
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
                <div className={cns(`relative flex items-center justify-center w-[280px] sm:w-[400px] md:w-[520px] mx-auto`, className, radius)}>
                    <Image src={src} width={0} sizes="100vw" height={0} alt="display of winnebago products" style={{ width: '100%', height: 'auto' }} priority />
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
        overview: {
            description: string,
            achievements: string[]
        }[],
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
        overview: [
            {
                description: "Created three mobile applications - Aventura, Weight Distribution and Tahoe - for Winnebago Electric RV. The challenges faced included route creation, weather alerts, vehicle specific recommended routes, vehicle status and RV weight distribution tutorials.",
                achievements: [
                    "Provided detailed weather conditions along routes, offering users additional information to enhance safety decision-making tailored to their settings, vehicle specifications, and route progress.",
                    "Established a user-centric environment featuring animated drawers for easy access to key features and fixed link icons for navigating deeply nested routes.",
                    "Coordinated with design and client to rapidly build each application. Implemented app navigation, UI/UX animation, data change notifications, route screens and asset/icon management for each.",
                    "Crafted robust solution with embedded Mapbox web-app to communicate with overlay of front-end features.",
                    "Transformed user convenience by implementing QR code library for VIN number vehicle matching.",
                ],
            },
        ],
        projects: [
            {

                title: 'Aventura Project',
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
                title: 'Tahoe Project',
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

                title: 'Weight Distribution Project',
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
        overview: [
            {
                description: "Developed an AI powered re-branding web application, decreasing ideation time. Conducted team meetings, code reviews, collaborated with design and directed ticket creation/completion.",
                achievements: [
                    "Increased user engagement during re-branding exercises, combating prolonged inactivity by introducing informative, highlighted next step nudges.",
                    "Outlined application’s features and capabilities, providing a graphic demonstration to new users by implementing a guided React Tour.",
                    "Improved wait-list sign up by 35% with a highly choreographed marketing website. Worked closely with design to create a visual statement of cutting edge re-branding technology.",
                    "Acted as liaison between multiple teams, including developers, designers and product managers to deliver cohesive solutions.",
                    "Effectively directed numerous aspects of the project simultaneously, prioritizing tasks and meeting tight deadlines consistently.",
                ],
            },
        ],
        href: "https://future.cards/",
        projects: [
            {
                title: 'Landing Page',
                description: '',
                stack: ['react', 'framer motion', 'html', 'tailwindcss'],
                images: [
                    { src: '/modal/futureCards/fc_landingPage.mov', description: 'Landing page', alt: 'Landing page' },
                    // { src: '/modal/futureCards/future_cards.mov', description: 'Landing page', alt: 'Landing page' },
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
        description: 'A sports prediction application optimized for mobile and web',
        overview: [
            {
                description: "Psykick, a sports prediction startup provides a thrilling environment for sports enthusiasts. Adding significance to each outcome. Users accumulate points and compete for pole position on the leader-board.",
                achievements: [
                    "Designed postgresSQL database for data storage. Oversaw data migrations using Prisma.",
                    "Devised seed data and testing files for fixture and user prediction results. Proofed application’s features and system mechanisms.",
                    "Devised enriched user experience with a league table page -  displaying a  user’s statistics such as table position, points, wins, losses and perfects.",
                    "Assisted lead developer with UI components, animated features and route creation.",
                    "Implemented react query for global state managment.",
                ]
            }
        ],
        href: "https://psykick.app/auth/login",
        projects: [
            {
                title: 'Matches & Predictions',
                description: '',
                stack: ['react', 'remix.run', 'framer motion', 'tailwindcss'],
                images: [
                    { src: '/modal/psykick/matches_1.png', description: 'Dashboard', alt: 'Dashboard' },
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
        overview: [
            {
                description: "Engineered two new management kits. Conducted code reviews, designed feature implementation, created decision/hand-off documentation, responsible for testing and debugging code.",
                achievements: [
                    "Facilitated cohesive communication pertaining to work culture between managers and teams by spear-heading a multi-user note creation & favoriting system, consistent across multiple devices.",
                    "Enabled meaningful team connection for in-person and remote workers with a self-timed, multi-user, multi-choice image quiz for the new mini kit series release.",
                    "Achieved enhanced user experience by implementing new animated features such as a CountdownTimer with progress bar component - complete with traffic light color states, visually alerting the user of the quiz’s time constraints.",
                    "Delivered project early by articulating ideas, goals and methodologies resulting in seamless interdepartmental collaboration.",
                    "Initiated a strong relationship with the client through active listening and seeking feedback, prioritizing client satisfaction and project success throughout.",
                ],
            },
        ],
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