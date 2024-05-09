import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagYe({
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
                    d="M0 0h512v504.3H0z"
                    fill="#fff"
                />
                <path
                    d="M0 0h512v167.9H0z"
                    fill="#f10600"
                />
                <path d="M0 344.1h512V512H0z" />
            </g>
        </svg>
    );
}
