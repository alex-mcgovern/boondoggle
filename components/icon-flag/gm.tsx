import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGm({
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h512v170.7H0z"
                    fill="red"
                />
                <path
                    d="M0 170.7h512V199H0z"
                    fill="#fff"
                />
                <path
                    d="M0 199.1h512V313H0z"
                    fill="#009"
                />
                <path
                    d="M0 312.9h512v28.4H0z"
                    fill="#fff"
                />
                <path
                    d="M0 341.3h512V512H0z"
                    fill="#090"
                />
            </g>
        </svg>
    );
}
