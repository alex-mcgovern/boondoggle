import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagIn({
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
                d="M0 0h512v170.7H0z"
                fill="#f93"
            />
            <path
                d="M0 170.7h512v170.6H0z"
                fill="#fff"
            />
            <path
                d="M0 341.3h512V512H0z"
                fill="#128807"
            />
            <g transform="translate(256 256) scale(3.41333)">
                <circle
                    fill="#008"
                    r={20}
                />
                <circle
                    fill="#fff"
                    r={17.5}
                />
                <circle
                    fill="#008"
                    r={3.5}
                />
                <g id="in_svg__d">
                    <g id="in_svg__c">
                        <g id="in_svg__b">
                            <g
                                fill="#008"
                                id="in_svg__a"
                            >
                                <circle
                                    r={0.9}
                                    transform="rotate(7.5 -8.8 133.5)"
                                />
                                <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
                            </g>
                            <use
                                height="100%"
                                transform="rotate(15)"
                                width="100%"
                                xlinkHref="#in_svg__a"
                            />
                        </g>
                        <use
                            height="100%"
                            transform="rotate(30)"
                            width="100%"
                            xlinkHref="#in_svg__b"
                        />
                    </g>
                    <use
                        height="100%"
                        transform="rotate(60)"
                        width="100%"
                        xlinkHref="#in_svg__c"
                    />
                </g>
                <use
                    height="100%"
                    transform="rotate(120)"
                    width="100%"
                    xlinkHref="#in_svg__d"
                />
                <use
                    height="100%"
                    transform="rotate(-120)"
                    width="100%"
                    xlinkHref="#in_svg__d"
                />
            </g>
        </svg>
    );
}
