import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGbSct({
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
                fill="#0065bd"
            />
            <path
                d="m0 0 5 3M0 3l5-3"
                stroke="#fff"
                strokeWidth={0.6}
                transform="scale(102.4 170.66667)"
            />
        </svg>
    );
}
