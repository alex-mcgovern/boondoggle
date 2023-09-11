
import type { SVGProps } from "react";

function SvgCi(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M341.5 0H512v512H341.5z"
                fill="#00cd00"
            />
            <path
                d="M0 0h170.3v512H0z"
                fill="#ff9a00"
            />
            <path
                d="M170.3 0h171.2v512H170.3z"
                fill="#fff"
            />
        </g>
    </svg>
}
export default SvgCi;
