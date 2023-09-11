
import type { SVGProps } from "react";

function SvgEsCt(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#fcdd09"
        />
        <path
            d="M0 90h810m0 120H0m0 120h810m0 120H0"
            stroke="#da121a"
            strokeWidth={60}
            transform="scale(.6321 .94815)"
        />
    </svg>
}
export default SvgEsCt;
