import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagNl({
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
            <path
                d="M0 0h512v512H0z"
                fill="#21468b"
            />
            <path
                d="M0 0h512v341.3H0z"
                fill="#fff"
            />
            <path
                d="M0 0h512v170.7H0z"
                fill="#ae1c28"
            />
        </svg>
    );
}
