import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagTl({
    className,
}: {
    /**
     * CSS classname applied to the icon
     */
    className: string;
}) {
    return (
        <svg
            className={clsx(className, "icon-flag")}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="tl_svg__a">
                    <path
                        d="M0 0h496v496H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#tl_svg__a)"
                fillRule="evenodd"
                transform="scale(1.0321)"
            >
                <path
                    d="M0 0h999v496H0z"
                    fill="#cb000f"
                />
                <path
                    d="M0 0c3.1 0 496 248.7 496 248.7L0 496.1V0z"
                    fill="#f8c00c"
                />
                <path d="M0 0c2 0 330 248.7 330 248.7L0 496.1V0z" />
                <path
                    d="m181.9 288.9-59-13L93 327l-5-57.8-58.8-13 53.1-24-3.2-57.5 39 42 53.6-24.4-28 52.2 38 44.4z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
