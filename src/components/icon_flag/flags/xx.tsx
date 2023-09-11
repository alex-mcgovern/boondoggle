
import type { SVGProps } from "react";

function SvgXx(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M.5.5h511v511H.5z"
            fill="#fff"
            fillRule="evenodd"
            stroke="#adb5bd"
        />
        <path
            d="m.5.5 511 511m0-511-511 511"
            fill="none"
            stroke="#adb5bd"
        />
    </svg>
}
export default SvgXx;
