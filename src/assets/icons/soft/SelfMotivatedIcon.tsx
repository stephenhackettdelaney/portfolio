import * as React from "react"
import { SVGProps } from "react"

const SelfMotivatedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M.453 21.46A18.398 18.398 0 0 1 0 17.446C0 7.812 7.797 0 17.43 0c1.297 0 2.601.156 3.851.43C11.641 4.102 4.055 11.797.453 21.46ZM31.148 6.68a17.253 17.253 0 0 0-3.734-3.54C15.727 6.603 6.61 15.806 3.22 27.517c.976 1.414 2.187 2.78 3.531 3.828 3.367-11.82 12.594-21.227 24.398-24.664Zm1.235 19.742a17.226 17.226 0 0 0 2.304-6.469c-6.203 3.352-11.328 8.64-14.656 14.867a17.308 17.308 0 0 0 6.61-2.445A82.9 82.9 0 0 0 35 35c-.727-2.852-1.594-5.82-2.617-8.578Zm2.32-11.367a16.595 16.595 0 0 0-1.234-4.438c-10.774 3.578-19.25 12.235-22.758 23.055 1.414.594 2.89.976 4.422 1.187 3.617-8.914 10.687-16.156 19.57-19.804Z"
        />
    </svg>
)
export default SelfMotivatedIcon
