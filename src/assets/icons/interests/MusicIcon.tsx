import * as React from "react"
import { SVGProps } from "react"

const MusicIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M22.968.072 7.344 4.686a1.562 1.562 0 0 0-1.094 1.49V18.94a6.788 6.788 0 0 0-1.563-.192C2.1 18.748 0 20.148 0 21.873c0 1.726 2.1 3.125 4.688 3.125 2.587 0 4.687-1.399 4.687-3.125v-11.41l12.5-3.662v9.014a6.76 6.76 0 0 0-1.563-.191c-2.587 0-4.687 1.399-4.687 3.124 0 1.726 2.1 3.125 4.688 3.125 2.587 0 4.687-1.398 4.687-3.125V1.561A1.562 1.562 0 0 0 22.968.072Z"
        />
    </svg>
)
export default MusicIcon