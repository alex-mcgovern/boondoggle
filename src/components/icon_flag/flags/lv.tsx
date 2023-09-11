
import type { SVGProps } from "react";

function SvgLv(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 0h512v512H0z"
                fill="#fff"
            />
            <path
                d="M0 0h512v204.8H0zm0 307.2h512V512H0z"
                fill="#981e32"
            />
        </g>
    </svg>
}
export default SvgLv;
