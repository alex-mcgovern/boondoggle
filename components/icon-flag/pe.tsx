import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagPe({
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
                fill="#D91023"
            />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#fff"
            />
        </svg>
    );
}
