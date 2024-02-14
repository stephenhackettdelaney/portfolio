import * as React from "react"
import { SVGProps } from "react"

const AttentionToDetailIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="m34.524 30.265-6.816-6.816a1.64 1.64 0 0 0-1.162-.479h-1.114a14.15 14.15 0 0 0 3.008-8.75C28.44 6.365 22.075 0 14.22 0S0 6.365 0 14.22s6.365 14.22 14.22 14.22a14.15 14.15 0 0 0 8.75-3.009v1.115c0 .437.171.854.479 1.162l6.816 6.816a1.634 1.634 0 0 0 2.318 0l1.934-1.935a1.648 1.648 0 0 0 .007-2.324ZM14.22 22.97a8.746 8.746 0 0 1-8.75-8.75c0-4.834 3.91-8.75 8.75-8.75 4.833 0 8.75 3.91 8.75 8.75 0 4.833-3.91 8.75-8.75 8.75Z"
        />
    </svg>
)
export default AttentionToDetailIcon
