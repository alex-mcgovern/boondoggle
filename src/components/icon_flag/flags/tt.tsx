
import type { SVGProps } from "react";

function SvgTt(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#fff"
            style={{
                width: 0,
            }}
        />
        <g fillRule="evenodd">
            <path
                d="M371 512 0 1v510.7l371 .3zM141 0l371 511V.2L141 0z"
                fill="#e00000"
            />
            <path d="M22.2.2h94.9l374.5 511.3h-97.9L22.2.2z" />
        </g>
    </svg>
}
export default SvgTt;
