import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagAx({
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
                <clipPath id="ax_svg__a">
                    <path
                        d="M166 0h850v850H166z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#ax_svg__a)"
                transform="translate(-100) scale(.6024)"
            >
                <path
                    d="M0 0h1300v850H0z"
                    fill="#0053a5"
                />
                <g fill="#ffce00">
                    <path d="M400 0h250v850H400z" />
                    <path d="M0 300h1300v250H0z" />
                </g>
                <g fill="#d21034">
                    <path d="M475 0h100v850H475z" />
                    <path d="M0 375h1300v100H0z" />
                </g>
            </g>
        </svg>
    );
}
