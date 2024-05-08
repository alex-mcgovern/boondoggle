import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagXx({
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
                d="M.5.5h511v511H.5z"
                fill="#fff"
                fillRule="evenodd"
                stroke="#adb5bd"
            />
            <path
                d="m.5.5 511 511m0-511-511 511"
                fill="none"
                stroke="#adb5bd"
            />
        </svg>
    );
}
