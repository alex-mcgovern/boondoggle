import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGn({
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
                    d="M0 0h170.7v512H0z"
                    fill="red"
                />
                <path
                    d="M170.7 0h170.6v512H170.7z"
                    fill="#ff0"
                />
                <path
                    d="M341.3 0H512v512H341.3z"
                    fill="#090"
                />
            </g>
        </svg>
    );
}
