import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMr({
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
                fill="#cd2a3e"
            />
            <path
                d="M0 76.8h512v358.4H0z"
                fill="#006233"
            />
            <path
                className="mr_svg__mr-st1"
                d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
                fill="#ffc400"
            />
            <path
                d="m256 100-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
                fill="#ffc400"
            />
        </svg>
    );
}
