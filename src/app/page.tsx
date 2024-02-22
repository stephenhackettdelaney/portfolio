"use client"
import { useState } from 'react'
import type { ReactNode } from 'react';
import { Besley, DM_Sans, Aleo } from 'next/font/google'
import cns from 'classnames'

import ChessIcon from "../../public/icons/interests/ChessIcon";
import SportsIcon from "../../public/icons/interests/SportsIcon";
import MusicIcon from "../../public/icons/interests/MusicIcon";
import SkiingIcon from "../../public/icons/interests/SkiingIcon";
import DogsIcon from "../../public/icons/interests/DogsIcon";
import SeeMoreArrow from "../../public/icons/interests/SeeMoreArrow";

import ReactIcon from "../../public/icons/technical/ReactIcon";
import JavascriptIcon from "../../public/icons/technical/JavascriptIcon";
import NodeIcon from "../../public/icons/technical/NodeIcon";
import TypescriptIcon from "../../public/icons/technical/TypescriptIcon";

import ProblemSolvingIcon from "../../public/icons/soft/ProblemSolvingIcon";
import CollaborationIcon from "../../public/icons/soft/CollaborationIcon";
import SelfMotivatedIcon from "../../public/icons/soft/SelfMotivatedIcon";
import CreativityIcon from "../../public/icons/soft/CreativityIcon";
import AttentionToDetailIcon from "../../public/icons/soft/AttentionToDetailIcon";
import PrismaIcon from "../../public/icons/technical/PrismaIcon";
import HTMLIcon from "../../public/icons/technical/HTMLIcon";
import CSSIcon from "../../public/icons/technical/CSSIcon";
import GithubIcon from "../../public/icons/technical/GithubIcon";
import TailwindIcon from "../../public/icons/technical/TailwindIcon";
import PostgresIcon from "../../public/icons/technical/PostgresIcon";
import GitIcon from "../../public/icons/technical/GitIcon";
import CatsIcon from '../../public/icons/interests/CatsIcon';
import CompassIcon from '../../public/icons/soft/CompassIcon';

import { Projects, Modal, ContactMe } from "@/components";
import Link from 'next/link';




const besley = Besley({
  subsets: ['latin'],
  variable: '--font-besley',
  weight: ["400", "700"],
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
})

const aleo = Aleo({ subsets: ['latin'] })

export default function Home() {
  const [selectedProject, setSelectedProject] = useState("")

  return (
    <main className='scroll-smooth'>
      <PersonalDetails />
      <Projects setSelectedProject={setSelectedProject} />
      <Modal
        selectedProject={selectedProject}
        closeModal={() => setSelectedProject("")}
      />
      <FullWidthBackground backgroundColor='bg-[#FFF]'>
        <Section
          title="Technical Knowledge"
          data={TECHNICAL_KNOWLEDGE}
          cardType="square"
        />
      </FullWidthBackground>
      <FullWidthBackground backgroundColor='bg-[#474747]'>
        <Section
          titleClassName="text-[#F2F2F2]"
          title="Soft Skills"
          data={SOFT_SKILLS}
          cardType="transparent"
        />
        <Section
          titleClassName="text-[#F2F2F2]"
          title='Interests'
          data={INTERESTS}
          cardType="transparent"
        />
      </FullWidthBackground>
      <ContactMe />
    </main>
  );
}


function PersonalDetails() {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center w-full">
      <section className="flex flex-col max-w-[962px] w-full px-6">
        <div>
          <h1 className={`${besley.className} font-sans font-bold text-xl sm:text-3xl md:text-4xl`}>Stephen Hackett-Delaney</h1>
          <p className={`${dm_sans.className} text-xs sm:text-sm text-[#707070] mt-2`}>Permanent resident, Vancouver, BC</p>
        </div>
        <h2 className={`${besley.className} font-sans font-light text-lg sm:text-2xl mt-[36px]`}>Software Engineer</h2>
        <p className={`${besley.className} sm:max-w-[480px] text-sm leading-[26px] sm:text-[18px] sm:leading-[30px] mt-[56px]`}>5+ years experience building production-ready web & mobile applications. Passion for creating user-centric experiences, performance optimization and delivering in a timely manner. Thrive in environments with inter-departmental collaboration. Comfortable leading or assisting projects. Highly proficient in React, JavaScript, Node.js, Prisma & TailwindCSS.</p>
        <Link
          href="#projects"
          className="group relative h-12 w-12 pointer-events-auto overflow-hidden mt-[100px]"
        >
          <div className="absolute top-0 right-0 -left-0 bottom-0 z-10 border-2 border-black flex justify-center items-center">
            <SeeMoreArrow className='group-hover:text-white transition-color duration-500 w-10 h-10' />
          </div>
          <div className="w-full h-full bg-black -translate-y-[102%] transform transition duration-300 lg:group-hover:translate-y-[0%]" />
        </Link>
      </section>
    </section>
  )
}

function FullWidthBackground({ backgroundColor = "bg-[#F8F8F8]", children }: { backgroundColor: string, children: ReactNode }) {
  return (
    <section className={cns(`${backgroundColor} flex flex-col gap-[120px] py-[120px]`)}>{children}</section>
  )
}

type Values = {
  title: string,
  icon: any
}

function Section({ titleClassName, title, data, cardType = "square" }: { titleClassName?: string, title: string, data: any, cardType: "square" | "transparent" }) {

  const components = {
    square: CardSquare,
    transparent: CardTransparent
  }

  const Component = components[cardType]

  return (
    <Content title={title} titleClassName={titleClassName}>
      {data.map((values: Values, index: number): ReactNode => (
        <Component key={index} {...values} />
      ))}
    </Content>
  )
}

function Content({ titleClassName, title, children }: { titleClassName?: string, title: string, children: ReactNode }) {
  return (
    <section className="flex flex-col w-full max-w-[962px] px-6 lg:px-0 m-auto">
      <h2 className={`${besley.className} font-sans font-bold text-[26px] text-left ${titleClassName}`}>{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-between gap-[32px] mt-[32px]">
        {children}
      </div>
    </section>
  )
}

function CardSquare({ title, icon: Icon }: Values) {
  return (
    <div className="flex flex-col gap-y-[4px] justify-center items-center border-2 border-zinc-300 w-full py-6">
      <Icon />
      <p className={`${aleo.className} text-[#474747] mt-2`}>{title}</p>
    </div>
  )
}

function CardTransparent({ title, icon: Icon }: Values) {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center bg-transparent border-2 py-6">
      <Icon className="text-white" />
      <p className={`${aleo.className} text-white`}>{title}</p>
    </div>
  )
}

const TECHNICAL_KNOWLEDGE = [
  {
    title: "ReactJS",
    icon: ReactIcon,
  },
  {
    title: "React Native",
    icon: ReactIcon,
  },
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "Node.js",
    icon: NodeIcon,
  },
  {
    title: "Typescript",
    icon: TypescriptIcon,
  },
  {
    title: "TailwindCSS",
    icon: TailwindIcon,
  },
  {
    title: "Prisma",
    icon: PrismaIcon,
  },
  {
    title: "PostgresSQL",
    icon: PostgresIcon,
  },
  {
    title: "HTML",
    icon: HTMLIcon,
  },
  {
    title: "CSS",
    icon: CSSIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Git",
    icon: GitIcon,
  },
]

const SOFT_SKILLS = [
  {
    title: "Problem Solving",
    icon: ProblemSolvingIcon,
  },
  {
    title: "Collaboration",
    icon: CollaborationIcon,
  },
  {
    title: "Creativity",
    icon: CreativityIcon,
  },
  {
    title: "Leadership",
    icon: CompassIcon,
  },
  {
    title: "Self-Motivated",
    icon: SelfMotivatedIcon,
  },
  {
    title: "Detail Orientated",
    icon: AttentionToDetailIcon,
  },
]


const INTERESTS = [
  {
    title: "sports",
    icon: SportsIcon,
  },
  {
    title: "music",
    icon: MusicIcon,
  },
  {
    title: "chess",
    icon: ChessIcon,
  },
  {
    title: "skiing",
    icon: SkiingIcon,
  },
  {
    title: "dogs",
    icon: DogsIcon,
  },
  {
    title: "cats",
    icon: CatsIcon,
  },
]