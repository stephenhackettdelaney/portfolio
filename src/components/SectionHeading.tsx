import { Besley } from 'next/font/google'

const besley = Besley({
    subsets: ['latin'],
    variable: '--font-besley',
    weight: ["400", "700"],
})

export default function SectionHeading({ className = "", children }: { className?: string, children: string }) {
    return <h2 className={`${besley.className} font-sans font-bold text-2xl ${className}`}>{children}</h2>
}