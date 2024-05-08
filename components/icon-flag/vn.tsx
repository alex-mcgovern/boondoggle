import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagVn({
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
                <clipPath id="vn_svg__a">
                    <path
                        d="M177.2 0h708.6v708.7H177.2z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#vn_svg__a)"
                fillRule="evenodd"
                transform="translate(-128) scale(.72249)"
            >
                <path
                    d="M0 0h1063v708.7H0z"
                    fill="#da251d"
                />
                <path
                    d="m661 527.5-124-92.6-123.3 93.5 45.9-152-123.2-93.8 152.4-1.3L536 129.8 584.3 281l152.4.2-122.5 94.7L661 527.5z"
                    fill="#ff0"
                />
            </g>
        </svg>
    );
}
