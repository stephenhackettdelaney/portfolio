import * as React from "react"
import { SVGProps } from "react"

const CreativityIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={37}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M6.822 32.27c.001.446.133.883.381 1.256l1.214 1.824a2.273 2.273 0 0 0 1.892 1.014h4.383a2.272 2.272 0 0 0 1.892-1.014l1.214-1.824c.247-.373.38-.81.38-1.257l.003-2.723H6.82l.003 2.723ZM0 12.5a12.43 12.43 0 0 0 3.094 8.223c1.173 1.339 3.008 4.136 3.708 6.495l.008.055h11.38l.008-.055c.7-2.36 2.535-5.156 3.708-6.495A12.43 12.43 0 0 0 25 12.5C25 5.583 19.383-.02 12.46 0 5.217.022 0 5.893 0 12.5Zm12.5-5.682A5.688 5.688 0 0 0 6.818 12.5a1.136 1.136 0 1 1-2.273 0c0-4.386 3.569-7.954 7.955-7.954a1.136 1.136 0 1 1 0 2.272Z"
        />
    </svg>
)
export default CreativityIcon
