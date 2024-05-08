import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagCm({
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
                d="M0 0h170.7v512H0z"
                fill="#007a5e"
            />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#ce1126"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#fcd116"
            />
            <g
                fill="#fcd116"
                transform="translate(256 256) scale(5.6889)"
            >
                <g id="cm_svg__b">
                    <path
                        d="M0-8-2.5-.4 1.3.9z"
                        id="cm_svg__a"
                    />
                    <use
                        height="100%"
                        transform="scale(-1 1)"
                        width="100%"
                        xlinkHref="#cm_svg__a"
                    />
                </g>
                <use
                    height="100%"
                    transform="rotate(72)"
                    width="100%"
                    xlinkHref="#cm_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(144)"
                    width="100%"
                    xlinkHref="#cm_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-144)"
                    width="100%"
                    xlinkHref="#cm_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-72)"
                    width="100%"
                    xlinkHref="#cm_svg__b"
                />
            </g>
        </svg>
    );
}
