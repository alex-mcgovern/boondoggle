import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGr({
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
                d="M0 0h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 57h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 114h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 171h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 228h512v56.9H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 284.9h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 341.9h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 398.9h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 0h284.9v284.9H0z"
                fill="#0d5eaf"
            />
            <g
                fill="#fff"
                fillRule="evenodd"
                strokeWidth={1.3}
            >
                <path d="M114 0h57v284.9h-57z" />
                <path d="M0 114h284.9v57H0z" />
            </g>
            <path
                d="M0 455h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
        </svg>
    );
}
