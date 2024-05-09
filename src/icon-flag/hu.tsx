import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagHu({
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
            <g fillRule="evenodd">
                <path
                    d="M512 512H0V0h512z"
                    fill="#fff"
                />
                <path
                    d="M512 512H0V341.3h512z"
                    fill="#388d00"
                />
                <path
                    d="M512 170.8H0V.1h512z"
                    fill="#d43516"
                />
            </g>
        </svg>
    );
}
