import type { SVGProps } from "react";

export type CardValues = {
    title: string,
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
} 