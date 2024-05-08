import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagTz({
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
                <clipPath id="tz_svg__a">
                    <path
                        d="M102.9 0h496v496H103z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#tz_svg__a)"
                transform="translate(-106.2) scale(1.0321)"
            >
                <g
                    fillRule="evenodd"
                    strokeWidth="1pt"
                >
                    <path
                        d="M0 0h744.1v496H0z"
                        fill="#09f"
                    />
                    <path
                        d="M0 0h744.1L0 496V0z"
                        fill="#090"
                    />
                    <path d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z" />
                    <path
                        d="M0 378 567 0h56L0 415.3v-37.2zm121.1 118 623-415.3V118L177 496h-55.9z"
                        fill="#ff0"
                    />
                </g>
            </g>
        </svg>
    );
}
