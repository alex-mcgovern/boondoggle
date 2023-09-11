
import type { SVGProps } from "react";

function SvgCr(props: SVGProps<SVGSVGElement>) {
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
                fill="#0000b4"
            />
            <path
                d="M0 80.5h512v343.7H0z"
                fill="#fff"
            />
            <path
                d="M0 168.2h512v168.2H0z"
                fill="#d90000"
            />
        </g>
    </svg>
}
export default SvgCr;
