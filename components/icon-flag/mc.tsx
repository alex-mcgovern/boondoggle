import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMc({
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
                    d="M0 0h512v256H0z"
                    fill="#f31830"
                />
                <path
                    d="M0 256h512v256H0z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
