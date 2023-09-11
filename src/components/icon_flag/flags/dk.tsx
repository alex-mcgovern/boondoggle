
import type { SVGProps } from "react";

function SvgDk(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512.1v512H0z"
            fill="#c8102e"
        />
        <path
            d="M144 0h73.1v512H144z"
            fill="#fff"
        />
        <path
            d="M0 219.4h512.1v73.2H0z"
            fill="#fff"
        />
    </svg>
}
export default SvgDk;
