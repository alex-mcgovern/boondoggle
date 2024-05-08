import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagHn({
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
                fill="#18c3df"
            />
            <path
                d="M0 170.7h512v170.6H0z"
                fill="#fff"
            />
            <g
                fill="#18c3df"
                id="hn_svg__c"
                transform="translate(256 256) scale(28.44446)"
            >
                <g id="hn_svg__b">
                    <path
                        d="m0-1-.3 1 .5.1z"
                        id="hn_svg__a"
                    />
                    <use
                        height="100%"
                        transform="scale(-1 1)"
                        width="100%"
                        xlinkHref="#hn_svg__a"
                    />
                </g>
                <use
                    height="100%"
                    transform="rotate(72)"
                    width="100%"
                    xlinkHref="#hn_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-72)"
                    width="100%"
                    xlinkHref="#hn_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(144)"
                    width="100%"
                    xlinkHref="#hn_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-144)"
                    width="100%"
                    xlinkHref="#hn_svg__b"
                />
            </g>
            <use
                height="100%"
                transform="translate(142.2 -45.5)"
                width="100%"
                xlinkHref="#hn_svg__c"
            />
            <use
                height="100%"
                transform="translate(142.2 39.8)"
                width="100%"
                xlinkHref="#hn_svg__c"
            />
            <use
                height="100%"
                transform="translate(-142.2 -45.5)"
                width="100%"
                xlinkHref="#hn_svg__c"
            />
            <use
                height="100%"
                transform="translate(-142.2 39.8)"
                width="100%"
                xlinkHref="#hn_svg__c"
            />
        </svg>
    );
}
