import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagSj({
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
            <path
                d="M0 0h512v512H0z"
                fill="#ef2b2d"
            />
            <path
                d="M128 0h128v512H128z"
                fill="#fff"
            />
            <path
                d="M0 192h512v128H0z"
                fill="#fff"
            />
            <path
                d="M160 0h64v512h-64z"
                fill="#002868"
            />
            <path
                d="M0 224h512v64H0z"
                fill="#002868"
            />
        </svg>
    );
}
