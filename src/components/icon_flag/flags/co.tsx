
import type { SVGProps } from "react";

function SvgCo(props: SVGProps<SVGSVGElement>) {
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
                fill="#ffe800"
            />
            <path
                d="M0 256h512v256H0z"
                fill="#00148e"
            />
            <path
                d="M0 384h512v128H0z"
                fill="#da0010"
            />
        </g>
    </svg>
}
export default SvgCo;
