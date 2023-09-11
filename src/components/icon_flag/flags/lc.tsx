
import type { SVGProps } from "react";

function SvgLc(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M0 0h512v512H0z"
                fill="#65cfff"
            />
            <path
                d="m254.8 44.8 173.5 421.6-344 1L254.7 44.8z"
                fill="#fff"
            />
            <path d="m255 103 150 362.6-297.5.8L255 103z" />
            <path
                d="m254.8 256.1 173.5 210.8-344 .5 170.5-211.3z"
                fill="#ffce00"
            />
        </g>
    </svg>
}
export default SvgLc;
