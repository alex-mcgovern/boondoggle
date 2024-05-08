import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCz({
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
                d="M0 0h512v256H0z"
                fill="#fff"
            />
            <path
                d="M0 256h512v256H0z"
                fill="#d7141a"
            />
            <path
                d="M300 256 0 56v400z"
                fill="#11457e"
            />
        </svg>
    );
}
