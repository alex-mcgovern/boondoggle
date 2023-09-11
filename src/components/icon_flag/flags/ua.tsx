
import type { SVGProps } from "react";

function SvgUa(props: SVGProps<SVGSVGElement>) {
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
                fill="gold"
            />
            <path
                d="M0 0h512v256H0z"
                fill="#0057b8"
            />
        </g>
    </svg>
}
export default SvgUa;
