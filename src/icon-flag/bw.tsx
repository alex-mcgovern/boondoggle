import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagBw({
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
            <g fillRule="evenodd">
                <path
                    d="M0 0h512v512H0z"
                    fill="#00cbff"
                />
                <path
                    d="M0 192h512v128H0z"
                    fill="#fff"
                />
                <path d="M0 212.7h512V299H0z" />
            </g>
        </svg>
    );
}
