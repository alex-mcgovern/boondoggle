import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagEsPv({
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
                fill="#d52b1e"
            />
            <path
                d="M0 0h42.5l106.7 106.7L256 213.4 469.5 0H512v42.5L405.3 149.2 298.6 256 512 469.5V512h-42.5L362.8 405.3 256 298.6 42.5 512H0v-42.5l106.7-106.7L213.4 256 0 42.5V21.3z"
                fill="#009b48"
            />
            <path
                d="M221.9 0h68.2v221.9H512v68.2H290.1V512h-68.2V290.1H0v-68.2h221.9v-111z"
                fill="#fff"
            />
        </svg>
    );
}
