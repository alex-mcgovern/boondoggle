
import type { SVGProps } from "react";

function SvgSs(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 358.4h512V512H0z"
            fill="#078930"
        />
        <path
            d="M0 153.6h512v204.8H0z"
            fill="#fff"
        />
        <path d="M0 0h512v153.6H0z" />
        <path
            d="M0 179.2h512v153.6H0z"
            fill="#da121a"
        />
        <path
            d="m0 0 433 256L0 512z"
            fill="#0f47af"
        />
        <path
            d="M209 207.8 64.4 256l144.8 48.1-89.5-126v155.8z"
            fill="#fcdd09"
        />
    </svg>
}
export default SvgSs;
