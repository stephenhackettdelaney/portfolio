import * as React from "react"
import { SVGProps } from "react"

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={45}
        fill="none"
        {...props}
    >
        <rect width={45} height={45} fill="#474747" rx={8} />
        <path
            fill="#FAFAFA"
            d="M34.615 22.784c0 6.912-4.81 11.831-11.916 11.831-6.813 0-12.314-5.412-12.314-12.115 0-6.702 5.501-12.115 12.314-12.115 3.317 0 6.107 1.197 8.257 3.17l-3.351 3.17C23.22 12.565 15.067 15.69 15.067 22.5c0 4.226 3.431 7.65 7.632 7.65 4.876 0 6.703-3.439 6.99-5.222H22.7v-4.167h11.723c.114.62.194 1.216.194 2.023Z"
        />
    </svg>
)
export default EmailIcon
