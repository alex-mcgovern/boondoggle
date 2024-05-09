import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagKw({
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
                <clipPath id="kw_svg__a">
                    <path
                        d="M0 0h496v496H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#kw_svg__a)"
                fillRule="evenodd"
                strokeWidth="1pt"
                transform="scale(1.0321)"
            >
                <path
                    d="M0 165.3h992.1v165.4H0z"
                    fill="#fff"
                />
                <path
                    d="M0 330.7h992.1v165.4H0z"
                    fill="#f31830"
                />
                <path
                    d="M0 0h992.1v165.4H0z"
                    fill="#00d941"
                />
                <path d="M0 0v496l247.5-165.3.5-165.5L0 0z" />
            </g>
        </svg>
    );
}
