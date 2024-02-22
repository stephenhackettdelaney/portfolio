import type { ReactNode, SVGProps } from 'react';
import Link from "next/link"
import { DM_Sans } from "next/font/google"

import { Content, SectionHeading } from ".."

import EmailIcon from '../../../public/icons/contact/EmailIcon';
import LinkedInIcon from '../../../public/icons/contact/LinkedInIcon';

const dm_sans = DM_Sans({
    subsets: ['latin'],
})

export default function ContactMe(): ReactNode {
    return (
        <Content className='h-screen'>
            <SectionHeading>Contact Me</SectionHeading>
            <section className="flex gap-4">
                {CONTACT_LINKS.map(({ className, href, icon: Icon }, index: number) => (
                    <Link key={index} href={href} target='_blank'>
                        <Icon className={`w-9 h-9 ${className}`} />
                    </Link>
                )
                )}
            </section>
            <p className={`${dm_sans.className} text-[12px] mt-[64px]`}>© 2024. All rights reserved</p>
        </Content>
    )
}

type ContactLinks = {
    className: string,
    href: string,
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}

const CONTACT_LINKS: ContactLinks[] = [
    {
        className: "hover:text-sky-600",
        href: "https://www.linkedin.com/in/stephen-hd/",
        icon: LinkedInIcon
    },
    {
        className: "hover:text-rose-500",
        href: "mailto:stephen@comediadesign.com",
        icon: EmailIcon
    },
]