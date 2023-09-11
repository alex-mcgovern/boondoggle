
import type { SVGProps } from "react";

function SvgSr(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#377e3f"
        />
        <path
            d="M0 102.4h512v307.2H0z"
            fill="#fff"
        />
        <path
            d="M0 153.6h512v204.8H0z"
            fill="#b40a2d"
        />
        <path
            d="m255.9 163.4 60.2 185.2-157.6-114.5h194.8L195.7 348.6z"
            fill="#ecc81d"
        />
    </svg>
}
export default SvgSr;
