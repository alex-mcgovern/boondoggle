
import type { SVGProps } from "react";

function SvgMk(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#d20000"
        />
        <path
            d="M0 0h86.8L256 246.9 425.2 0H512L0 512h86.8L256 265.1 425.2 512H512zm512 204.8v102.4L0 204.8v102.4zM204.8 0 256 219.4 307.2 0zm0 512L256 292.6 307.2 512z"
            fill="#ffe600"
        />
        <circle
            cx={256}
            cy={256}
            fill="#ffe600"
            r={82.3}
            stroke="#d20000"
            strokeWidth={18.3}
        />
    </svg>
}
export default SvgMk;
