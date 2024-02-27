import type { ReactNode } from "react";
import { Aleo } from "next/font/google";

import { Content, SectionHeading, Grid } from "..";

import {
    ProblemSolvingIcon,
    CollaborationIcon,
    CreativityIcon,
    CompassIcon,
    SelfMotivatedIcon,
    DetailOrientatedIcon,
    SportsIcon,
    MusicIcon,
    ChessIcon,
    SkiingIcon,
    DogsIcon,
    CatsIcon,
} from "@/assets/icons";

import { CardValues } from "@/types";

const aleo = Aleo({ subsets: ['latin'] })

export default function OtherSkills(): ReactNode {
    return (
        <Content containerClassName="bg-[#474747]" contentClassName="gap-y-[80px] md:gap-y-[120px]">
            <section className="flex flex-col gap-9">
                <SectionHeading className="text-[#F2F2F2]">Soft Skills</SectionHeading>
                <Grid>
                    {SOFT_SKILLS.map((values: CardValues, index: number): ReactNode => (
                        <Card key={index} className="bg-transparent text-[#F2F2F2]" {...values} />
                    ))}
                </Grid>
            </section>
            <section className="flex flex-col gap-9">
                <SectionHeading className="text-[#F2F2F2]">Interests</SectionHeading>
                <Grid>
                    {INTERESTS.map((values: CardValues, index: number): ReactNode => (
                        <Card key={index} className="bg-transparent text-[#F2F2F2]" {...values} />
                    ))}
                </Grid>
            </section>
        </Content>
    )
}

function Card({ className, title, icon: Icon }: { className?: string } & CardValues) {
    return (
        <div className={`flex flex-col gap-y-4 justify-center items-center  border-2 py-6 w-full ${className}`}>
            <Icon />
            <p className={`${aleo.className}`}>{title}</p>
        </div>
    )
}

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
        icon: DetailOrientatedIcon,
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