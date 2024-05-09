import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCr({
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h512v512H0z"
                    fill="#0000b4"
                />
                <path
                    d="M0 80.5h512v343.7H0z"
                    fill="#fff"
                />
                <path
                    d="M0 168.2h512v168.2H0z"
                    fill="#d90000"
                />
            </g>
        </svg>
    );
}
