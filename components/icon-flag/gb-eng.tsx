import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGbEng({
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
                d="M215 0h82v512h-82z"
                fill="#ce1124"
            />
            <path
                d="M0 215h512v82H0z"
                fill="#ce1124"
            />
        </svg>
    );
}
