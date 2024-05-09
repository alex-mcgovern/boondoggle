import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagPs({
    className,
}: {
    /**
     * CSS classname applied to the icon
     */
    className?: string;
}) {
    return (
        <svg
            className={clsx(className, "icon-flag")}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="ps_svg__a">
                    <path
                        d="M237.1 0h493.5v493.5H237.1z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#ps_svg__a)"
                transform="translate(-246) scale(1.0375)"
            >
                <g
                    fillRule="evenodd"
                    strokeWidth="1pt"
                >
                    <path d="M0 0h987v164.5H0z" />
                    <path
                        d="M0 164.5h987V329H0z"
                        fill="#fff"
                    />
                    <path
                        d="M0 329h987v164.5H0z"
                        fill="#090"
                    />
                    <path
                        d="m0 493.5 493.5-246.8L0 0v493.5z"
                        fill="red"
                    />
                </g>
            </g>
        </svg>
    );
}
