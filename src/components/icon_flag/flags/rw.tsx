
import type { SVGProps } from "react";

function SvgRw(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#20603d"
        />
        <path
            d="M0 0h512v384H0z"
            fill="#fad201"
        />
        <path
            d="M0 0h512v256H0z"
            fill="#00a1de"
        />
        <g transform="translate(374.4 133.8) scale(.7111)">
            <g id="rw_svg__b">
                <path
                    d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
                    fill="#e5be01"
                    id="rw_svg__a"
                />
                <use
                    height="100%"
                    transform="scale(1 -1)"
                    width="100%"
                    xlinkHref="#rw_svg__a"
                />
            </g>
            <use
                height="100%"
                transform="scale(-1 1)"
                width="100%"
                xlinkHref="#rw_svg__b"
            />
            <circle
                fill="#e5be01"
                r={34.3}
                stroke="#00a1de"
                strokeWidth={3.4}
            />
        </g>
    </svg>
}
export default SvgRw;
