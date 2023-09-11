
import type { SVGProps } from "react";

function SvgRu(props: SVGProps<SVGSVGElement>) {
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
                d="M0 170.7h512V512H0z"
                fill="#0039a6"
            />
            <path
                d="M0 341.3h512V512H0z"
                fill="#d52b1e"
            />
        </g>
    </svg>
}
export default SvgRu;
