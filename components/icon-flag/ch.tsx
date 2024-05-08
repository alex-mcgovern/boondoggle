import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCh({
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h512v512H0z"
                    fill="red"
                />
                <g fill="#fff">
                    <path d="M96 208h320v96H96z" />
                    <path d="M208 96h96v320h-96z" />
                </g>
            </g>
        </svg>
    );
}
