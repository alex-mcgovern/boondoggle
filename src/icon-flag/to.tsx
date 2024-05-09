import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagTo({
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h512v512H0z"
                    fill="#c10000"
                />
                <path
                    d="M0 0h218.3v175H0z"
                    fill="#fff"
                />
                <g fill="#c10000">
                    <path d="M89.8 27.3h34.8v121.9H89.8z" />
                    <path d="M168.2 70.8v34.8H46.3V70.8z" />
                </g>
            </g>
        </svg>
    );
}
