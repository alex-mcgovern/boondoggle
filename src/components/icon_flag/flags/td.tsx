
import type { SVGProps } from "react";

function SvgTd(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 0h171.2v512H0z"
                fill="#002664"
            />
            <path
                d="M340.8 0H512v512H340.8z"
                fill="#c60c30"
            />
            <path
                d="M171.2 0h169.6v512H171.2z"
                fill="#fecb00"
            />
        </g>
    </svg>
}
export default SvgTd;
