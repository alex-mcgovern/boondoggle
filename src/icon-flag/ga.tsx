import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGa({
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
                    d="M512 512H0V0h512z"
                    fill="#ffe700"
                />
                <path
                    d="M512 170.7H0V0h512z"
                    fill="#36a100"
                />
                <path
                    d="M512 512H0V341.3h512z"
                    fill="#006dbc"
                />
            </g>
        </svg>
    );
}
