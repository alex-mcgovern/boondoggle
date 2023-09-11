
import type { SVGProps } from "react";

function SvgTh(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 0h512v512H0z"
                fill="#f4f5f8"
            />
            <path
                d="M0 173.4h512V344H0z"
                fill="#2d2a4a"
            />
            <path
                d="M0 0h512v88H0zm0 426.7h512V512H0z"
                fill="#a51931"
            />
        </g>
    </svg>
}
export default SvgTh;
