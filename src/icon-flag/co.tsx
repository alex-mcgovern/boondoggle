import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCo({
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
                    fill="#ffe800"
                />
                <path
                    d="M0 256h512v256H0z"
                    fill="#00148e"
                />
                <path
                    d="M0 384h512v128H0z"
                    fill="#da0010"
                />
            </g>
        </svg>
    );
}
