
import type { SVGProps } from "react";

function SvgGw(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <path
            d="M0 0h160v512H0z"
            fill="#ce1126"
        />
        <path
            d="M160 0h352v256H160z"
            fill="#fcd116"
        />
        <path
            d="M160 256h352v256H160z"
            fill="#009e49"
        />
        <g transform="translate(-46.2 72.8) scale(.7886)">
            <g
                id="gw_svg__b"
                transform="matrix(80 0 0 80 160 240)"
            >
                <path
                    d="M0-1v1h.5"
                    id="gw_svg__a"
                    transform="rotate(18 0 -1)"
                />
                <use
                    height="100%"
                    transform="scale(-1 1)"
                    width="100%"
                    xlinkHref="#gw_svg__a"
                />
            </g>
            <use
                height="100%"
                transform="rotate(72 160 240)"
                width="100%"
                xlinkHref="#gw_svg__b"
            />
            <use
                height="100%"
                transform="rotate(144 160 240)"
                width="100%"
                xlinkHref="#gw_svg__b"
            />
            <use
                height="100%"
                transform="rotate(-144 160 240)"
                width="100%"
                xlinkHref="#gw_svg__b"
            />
            <use
                height="100%"
                transform="rotate(-72 160 240)"
                width="100%"
                xlinkHref="#gw_svg__b"
            />
        </g>
    </svg>
}
export default SvgGw;
