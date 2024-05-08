import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMu({
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
            <g fillRule="evenodd">
                <path
                    d="M0 384h512v128H0z"
                    fill="#009f4d"
                />
                <path
                    d="M0 128h512v128H0z"
                    fill="#151f6d"
                />
                <path
                    d="M0 0h512v128H0z"
                    fill="#ee2737"
                />
                <path
                    d="M0 256h512v128H0z"
                    fill="#ffcd00"
                />
            </g>
        </svg>
    );
}
