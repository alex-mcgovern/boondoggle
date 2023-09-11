
import type { SVGProps } from "react";

function SvgBw(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 0h512v512H0z"
                fill="#00cbff"
            />
            <path
                d="M0 192h512v128H0z"
                fill="#fff"
            />
            <path d="M0 212.7h512V299H0z" />
        </g>
    </svg>
}
export default SvgBw;
