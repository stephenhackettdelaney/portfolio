import * as React from "react"
import { SVGProps } from "react"

const DogsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M24.219 3.125h-3.125l-.35-.699a1.562 1.562 0 0 0-1.397-.864h-2.619L15.396.23a.781.781 0 0 0-1.334.553v7.316l6.25 2.232V8.594h1.563A3.125 3.125 0 0 0 25 5.469V3.906a.781.781 0 0 0-.781-.781ZM18.75 5.469a.781.781 0 1 1 0-1.562.781.781 0 0 1 0 1.562ZM4.687 9.375a1.565 1.565 0 0 1-1.562-1.563 1.563 1.563 0 0 0-3.125 0c0 2.035 1.31 3.753 3.125 4.4v10.444c0 .432.35.781.781.781h3.125c.432 0 .782-.35.782-.78v-5.47h7.812v5.47c0 .43.35.78.781.78h3.125c.432 0 .782-.35.782-.78V11.99L12.99 9.375H4.688Z"
        />
    </svg>
)
export default DogsIcon
