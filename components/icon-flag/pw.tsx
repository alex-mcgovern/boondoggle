import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagPw({
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
                <clipPath id="pw_svg__a">
                    <path
                        d="M61.7 4.2h170.8V175H61.7z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#pw_svg__a)"
                fillRule="evenodd"
                strokeWidth="1pt"
                transform="translate(-185 -12.5) scale(2.9973)"
            >
                <path
                    d="M0 4.2h301.2V175H0z"
                    fill="#4aadd6"
                />
                <path
                    d="M185.9 86.8a52 52 0 0 1-53 50.8 52 52 0 0 1-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"
                    fill="#ffde00"
                />
            </g>
        </svg>
    );
}
