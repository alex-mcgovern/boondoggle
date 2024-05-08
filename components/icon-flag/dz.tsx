import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagDz({
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
                d="M256 0h256v512H256z"
                fill="#fff"
            />
            <path
                d="M0 0h256v512H0z"
                fill="#006233"
            />
            <path
                d="M367 192a128 128 0 1 0 0 128 102.4 102.4 0 1 1 0-128m4.2 64L256 218.4l71.7 98.2V195.4L256 293.6z"
                fill="#d21034"
            />
        </svg>
    );
}
