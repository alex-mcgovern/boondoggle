import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagMq({
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
                d="M0 0h512v512H0z"
                fill="#231f1e"
            />
            <path
                d="M0 0h512v256H0z"
                fill="#00a650"
            />
            <path
                d="M256 256 0 512V0z"
                fill="#ef1923"
            />
        </svg>
    );
}
