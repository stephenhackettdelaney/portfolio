import * as React from "react"
import { SVGProps } from "react"

const ProblemSolvingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M34.708 7.458a.82.82 0 0 0-1.375-.377l-5.083 5.083-4.64-.773-.774-4.64 5.083-5.083A.822.822 0 0 0 27.532.29a9.838 9.838 0 0 0-9.336 2.593c-2.71 2.71-3.456 6.637-2.328 10.062L1.281 27.532a4.375 4.375 0 0 0 6.187 6.187l14.575-14.575c3.426 1.142 7.346.388 10.074-2.34a9.84 9.84 0 0 0 2.591-9.346ZM4.375 32.265a1.641 1.641 0 1 1 0-3.282 1.641 1.641 0 0 1 0 3.282Z"
        />
    </svg>
)
export default ProblemSolvingIcon
