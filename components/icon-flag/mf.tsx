import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMf({
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
                fill="#fff"
            />
            <path
                d="M0 0h170.7v512H0z"
                fill="#002654"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#ce1126"
            />
        </svg>
    );
}
