
import type { SVGProps } from "react";

function SvgTn(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#e70013"
        />
        <path
            d="M256 135a1 1 0 0 0-1 240 1 1 0 0 0 0-241zm72 174a90 90 0 1 1 0-107 72 72 0 1 0 0 107zm-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.3-12.2 37.3-12.2v-39.4l23.1 31.9 37.4-12.1-23.1 31.8z"
            fill="#fff"
        />
    </svg>
}
export default SvgTn;
