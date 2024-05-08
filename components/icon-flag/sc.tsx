import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagSc({
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
                d="M0 0h512v512H0Z"
                fill="#fff"
            />
            <path
                d="M0 512V0h512v170.7z"
                fill="#d92223"
            />
            <path
                d="M0 512V0h341.3z"
                fill="#fcd955"
            />
            <path
                d="M0 512V0h170.7z"
                fill="#003d88"
            />
            <path
                d="m0 512 512-170.7V512Z"
                fill="#007a39"
            />
        </svg>
    );
}
