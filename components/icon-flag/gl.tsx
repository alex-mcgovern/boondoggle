import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagGl({
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
                fill="#fff"
            />
            <path
                d="M0 256h512v256H0zm53.3 0a170.7 170.7 0 1 0 341.4 0 170.7 170.7 0 0 0-341.4 0"
                fill="#d00c33"
            />
        </svg>
    );
}
