
import type { SVGProps } from "react";

function SvgMu(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 384h512v128H0z"
                fill="#009f4d"
            />
            <path
                d="M0 128h512v128H0z"
                fill="#151f6d"
            />
            <path
                d="M0 0h512v128H0z"
                fill="#ee2737"
            />
            <path
                d="M0 256h512v128H0z"
                fill="#ffcd00"
            />
        </g>
    </svg>
}
export default SvgMu;
