import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagSe({
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
            <path
                d="M0 0h512v512H0z"
                fill="#005293"
            />
            <path
                d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0H134z"
                fill="#fecb00"
            />
        </svg>
    );
}
