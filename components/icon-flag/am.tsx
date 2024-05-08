import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagAm({
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
                d="M0 0h512v170.7H0z"
                fill="#d90012"
            />
            <path
                d="M0 170.7h512v170.6H0z"
                fill="#0033a0"
            />
            <path
                d="M0 341.3h512V512H0z"
                fill="#f2a800"
            />
        </svg>
    );
}
