
import type { SVGProps } from "react";

function SvgYe(props: SVGProps<SVGSVGElement>) {
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
                d="M0 0h512v504.3H0z"
                fill="#fff"
            />
            <path
                d="M0 0h512v167.9H0z"
                fill="#f10600"
            />
            <path d="M0 344.1h512V512H0z" />
        </g>
    </svg>
}
export default SvgYe;
