import type { SVGProps } from "react";

function SvgSl(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <clipPath id="sl_svg__a">
                    <rect
                        height={512}
                        rx={4.6}
                        ry={7.6}
                        width={384}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#sl_svg__a)"
                fillRule="evenodd"
                transform="scale(1.33333 1)"
            >
                <path
                    d="M0 341.7h512V512H0z"
                    fill="#0000cd"
                />
                <path
                    d="M0 171.4h512v170.3H0z"
                    fill="#fff"
                />
                <path
                    d="M0 0h512v171.4H0z"
                    fill="#00cd00"
                />
            </g>
        </svg>
    );
}
export default SvgSl;
