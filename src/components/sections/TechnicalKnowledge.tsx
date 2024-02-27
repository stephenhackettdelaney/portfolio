import type { ReactNode, SVGProps } from "react";
import { Content, SectionHeading, Grid, Card } from "..";

import {
    ReactIcon,
    JavascriptIcon,
    NodeIcon,
    TypescriptIcon,
    TailwindIcon,
    PrismaIcon,
    PostgresIcon,
    HTMLIcon,
    CSSIcon,
    GithubIcon,
    GitIcon,
} from "@/assets/icons";

import { CardValues } from "@/types";

export default function TechnicalKnowledge(): ReactNode {
    return (
        <Content containerClassName="md:h-screen">
            <SectionHeading>Technical Knowledge</SectionHeading>
            <Grid>
                {TECHNICAL_KNOWLEDGE.map((values: CardValues, index: number): ReactNode => (
                    <Card key={index} className="border-zinc-300" {...values} />
                ))}
            </Grid>
        </Content>
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