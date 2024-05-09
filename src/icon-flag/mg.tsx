import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMg({
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
                    d="M170.7 0H512v256H170.7z"
                    fill="#fc3d32"
                />
                <path
                    d="M170.7 256H512v256H170.7z"
                    fill="#007e3a"
                />
                <path
                    d="M0 0h170.7v512H0z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
