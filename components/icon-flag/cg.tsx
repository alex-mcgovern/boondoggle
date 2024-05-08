import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCg({
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
                <clipPath id="cg_svg__a">
                    <path
                        d="M115.7 0h496.1v496h-496z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#cg_svg__a)"
                fillRule="evenodd"
                strokeWidth="1pt"
                transform="translate(-119.5) scale(1.032)"
            >
                <path
                    d="M0 0h744v496H0z"
                    fill="#ff0"
                />
                <path
                    d="M0 0v496L496 0H0z"
                    fill="#00ca00"
                />
                <path
                    d="M248 496h496V0L248 496z"
                    fill="red"
                />
            </g>
        </svg>
    );
}
