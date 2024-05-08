import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagId({
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
                d="M0 0h512v256H0Z"
                fill="#e70011"
            />
            <path
                d="M0 256h512v256H0Z"
                fill="#fff"
            />
        </svg>
    );
}
