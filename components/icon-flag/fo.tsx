import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagFo({
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
                <clipPath id="fo_svg__a">
                    <path
                        d="M0 0h512v512H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#fo_svg__a)"
                fillRule="evenodd"
                strokeWidth={0}
            >
                <path
                    d="M-78 0h708.2v512H-78z"
                    fill="#fff"
                />
                <path
                    d="M-75.9 199.1h198.3V0h113.3v199.1h396.6V313H235.7v199H122.4V312.9H-76V199z"
                    fill="#003897"
                />
                <path
                    d="M-75.9 227.6h226.6V0h56.7v227.6h424.9v56.9h-425V512h-56.6V284.4H-75.9v-56.8z"
                    fill="#d72828"
                />
            </g>
        </svg>
    );
}
