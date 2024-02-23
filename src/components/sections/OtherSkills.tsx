import type { ReactNode, SVGProps } from "react";
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

const aleo = Aleo({ subsets: ['latin'] })

type Values = {
    title: string,
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}

export default function OtherSkills() {
    return (

        <div className="bg-[#474747] py-[120px]">
            <section className={`flex flex-col gap-[120px] w-full max-w-[962px] m-auto`}>
                <section className="flex flex-col gap-9">
                    <SectionHeading className="text-[#F2F2F2]">Soft Skills</SectionHeading>
                    <Grid>
                        {SOFT_SKILLS.map((values: Values, index: number): ReactNode => (
                            <Card key={index} className="bg-transparent text-[#F2F2F2]" {...values} />
                        ))}
                    </Grid>
                </section>
                <section className="flex flex-col gap-9">
                    <SectionHeading className="text-[#F2F2F2]">Interests</SectionHeading>
                    <Grid>
                        {INTERESTS.map((values: Values, index: number): ReactNode => (
                            <Card key={index} className="bg-transparent text-[#F2F2F2]" {...values} />
                        ))}
                    </Grid>
                </section>
            </section>
        </div>
    )
}

function Card({ className, title, icon: Icon }: { className?: string } & Values) {
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