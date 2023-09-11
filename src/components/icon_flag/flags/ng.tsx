
import type { SVGProps } from "react";

function SvgNg(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g
            fillRule="evenodd"
            strokeWidth="1pt"
        >
            <path
                d="M0 0h512v512H0z"
                fill="#fff"
            />
            <path
                d="M341.3 0H512v512H341.3zM0 0h170.7v512H0z"
                fill="#008753"
            />
        </g>
    </svg>
}
export default SvgNg;
