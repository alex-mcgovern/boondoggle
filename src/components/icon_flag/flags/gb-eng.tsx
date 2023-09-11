
import type { SVGProps } from "react";

function SvgGbEng(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#fff"
        />
        <path
            d="M215 0h82v512h-82z"
            fill="#ce1124"
        />
        <path
            d="M0 215h512v82H0z"
            fill="#ce1124"
        />
    </svg>
}
export default SvgGbEng;
