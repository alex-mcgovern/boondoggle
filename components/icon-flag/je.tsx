import clsx from "clsx";

import "./styles.css";

/**
 * A flag component
 */
export function FlagJe({
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
            <defs>
                <clipPath id="je_svg__a">
                    <path
                        d="M6.2 0h18v18h-18z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#je_svg__a)"
                transform="translate(-176.4) scale(28.44445)"
            >
                <path
                    d="M0 0h30v18H0z"
                    fill="#fff"
                />
                <path
                    d="M0 0v1.2L13 9 0 16.8V18h2l13-7.8L28 18h2v-1.2L17 9l13-7.8V0h-2L15 7.8 2 0H0z"
                    fill="#df112d"
                    fillRule="evenodd"
                />
                <g stroke="#000">
                    <path
                        d="M16.6 2.7c.4 1.6.2 3.5-1.6 4.6-1.7-1-2-3-1.5-4.6.4-.4 2.2-.6 3.1 0z"
                        fill="#e8112d"
                        stroke="none"
                    />
                    <path
                        d="M15 2.4a3 3 0 0 1 1.6.4 3.4 3.4 0 0 1 .6-1.5c-.3 0-.4.2-.4.3 0-.2-.4-.2-.5 0 .3.2 0 .6-.2.5l-.2-.3a.2.2 0 1 0-.1 0l-.4.2-.2-.4c0-.3.3-.3.4-.3 0-.2-.4-.4-.5-.2.2-.2.1-.5 0-.7a.6.6 0 0 0-.2.7c0-.2-.4 0-.4.2 0 0 .4 0 .4.3 0 .2 0 .3-.2.3a.4.4 0 0 1-.4-.1L14 2a.3.3 0 0 1-.2-.6c-.1-.1-.4-.1-.5.1 0-.1-.1-.3-.5-.3a3.4 3.4 0 0 1 .7 1.5 3.2 3.2 0 0 1 1.5-.4z"
                        fill="#f9dd16"
                        stroke="none"
                    />
                    <g
                        fill="#f9dd16"
                        stroke="none"
                        strokeWidth={0.1}
                    >
                        <path d="m16.4 4 .2-.1v-.3a.1.1 0 0 1 0-.1h-.3l-.4-.1c.2 0 .4 0 .4-.2 0-.1-.2-.2-.5-.2H15l.4-.1h.5-1c0 .3.4.3.8.2h.4c0 .2-.2.2-.4.2a1.2 1.2 0 0 0-.5 0h-.4l-.4-.1-.3.2v.3c.1 0 0 0 0 0h-.4l-.2-.1v.1h.1l.1.1.1.1s.4.1.4 0h.3v-.2h.7l.2-.1h.6c.2 0 .3 0 .3.2H16V4h.3zM14 3v.1l.1-.1z" />
                        <path d="M14.4 3h.1v.1V3zm-.1 0 .2.1-.1.3H14V3s0-.2.2-.2z" />
                        <path d="M13.8 3.4h-.1.2s0 .1-.1 0c0 .1.1.2.3.2l.2.1s-.2-.2 0-.3c-.3 0-.3 0-.4-.2l-.2-.3h-.1v.3c0-.1 0-.1-.1 0l.3.2zm1.6.5h-.1.5v-.3c-.2-.2-.6 0-.6 0l.3.2s.1 0 0 0h-.4V4s0 .1.1 0a.2.2 0 0 1 .2 0z" />
                    </g>
                    <path
                        d="M15.5 3.6h-.2m-.7 0v.1m-.5-.6h.1m.2 0h-.1m0 0v.1c-.1 0 0 0 0 0V3"
                        fill="none"
                        stroke="none"
                    />
                    <path
                        d="M14.3 3.4v-.2h-.1v.1z"
                        fill="#ff0016"
                        stroke="none"
                    />
                    <path
                        d="M14.2 3.2h-.1m.1 0h-.1m.1 0h-.1m.2 0h.1m-.1 0h.1m-.1 0h.1"
                        stroke="none"
                    />
                    <path
                        d="M13.6 2.9h-.1.1zm0 0-.2.1h.1zm0 .2h-.2.1zm0 .5h-.1s.1 0 0 0zm0 0-.1.2v-.1zm0 .1v.1zm1.5.2H15h.1zm0 0v.2V4zm0-.1H15h.1zm1 .1V4v-.1zm0 0c0-.1-.1 0 0 0v-.1zm0 0v.2c.1 0 0-.1 0-.1zm-1.8-.6v.3-.2z"
                        fill="#0051ba"
                        stroke="none"
                    />
                    <g
                        fill="#f9dd16"
                        stroke="none"
                        strokeWidth={0.1}
                    >
                        <path d="M16.2 5.2h.2V5a.1.1 0 0 1 0-.2h-.6l.3-.2c0-.2-.1-.3-.4-.2H15s.3-.2.4-.1h.5l-.4-.1c-.1-.1-.5 0-.5.2s.3.1.7 0l.3.1-.3.1a1.1 1.1 0 0 0-.5 0c-.1.1-.2 0-.4 0h-.3l-.3.1V5c.1 0 0 0 0 0h-.3l-.2-.1V5h.1c-.1 0 0 0 0 0v.1s.1.1.2 0v.2l.3-.1h.3V5h.6l.2-.1h.6c.1 0 .2 0 .2.2H16v.1c0 .1 0 .1 0 0h.2zm-2-.9H14l.1.2v-.2z" />
                        <path d="M14.4 4.3h.1v.2-.2z" />
                        <path d="M14.3 4.3c.2 0 .2 0 .2.2l-.1.2h-.2l-.1-.2c0-.1 0-.2.2-.2z" />
                        <path d="m13.8 4.7.1.1.2.1.2.1s-.1-.2 0-.2l-.4-.2v-.3h-.2v.2c-.1 0 0 0 0 0s0 .2.2.2zm1.5.5h.2c.1 0 0 0 0 0 .1 0 0 0 0-.1v-.2c-.1-.2-.4 0-.4 0l.2.1s.1 0 0 .1H15h.1-.1c0 .2 0 0 .1 0v.1a.2.2 0 0 1 .2 0z" />
                    </g>
                    <path
                        d="M15.4 4.9a.2.2 0 0 0-.2 0m-.6 0V5m-.2-.6-.1.2c-.1 0 0 0 0-.1"
                        fill="none"
                        stroke="none"
                    />
                    <path
                        d="M14.3 4.7s.1 0 0-.1c.1 0 0 0 0 0s-.1 0 0 0v.1z"
                        fill="#ff0016"
                        stroke="none"
                    />
                    <path
                        d="M14.3 4.6h.1m0 0"
                        stroke="none"
                    />
                    <path
                        d="M13.7 4.3c0-.1-.1 0-.1 0s.1 0 0 0zm0 0h-.2s.1.1.1 0zm0 .2h-.2.1zm0 .4h-.1zm0 0s-.1.1 0 .2V5zm0 .1v.1zm1.3.2zm.1 0s-.1 0 0 .1zm0-.1H15zm.9 0-.1.2v-.1zm0 0h-.1zm0 .2zm-1.7-.6V5v-.1s0-.1 0 0v-.1z"
                        fill="#0051ba"
                        stroke="none"
                    />
                    <g
                        fill="#f9dd16"
                        strokeWidth={0.1}
                    >
                        <path
                            d="M130.7 32.2c-.4 0-.4.5-.5.5.8 0 1.2-.3 1.4-.7v.6c.6-.2.8-.7.6-1l.7.2c-.4-.3-.1-1-.8-1.4.2 0 .6.2.8.5-.1-.7-.2-1.1-.8-1.5h.5a.9.9 0 0 1-.4-.8c0-.4-.2-.4-.6-.3l-1.8.1c-1 0-2 0-2.8-.6 1.3.6 3-.6 3-1.5 0-1-1.4-2-4-1.4-2.6.6-5.8.4-5.8-.5s2.3-1 3.5-.8c1.2.2 2 .3 4.2-.5-.5.2-2.3.3-3.7-.1s-4.8-.4-4.8 1.4c0 1.9 3.6 1.7 6.8 1.2 1.8-.2 2.8 0 2.8.5 0 .6-1.7.8-3 .7a10 10 0 0 0-4.1.3c-1.3.4-2.2 0-3.6.3-.7 0-2.4 0-3.2-1.4-.5.4-2 1.1-2.3 1.9-.3.6 0 1.3.4 2 .6.8-.3.7-1 .7-.8 0-2 0-2.6-.8-.6-.6-1.3-1.1-1.9-.7-.3.3 0 .6.2.5l.8.2a1 1 0 0 0-1 .1c-.3.2 0 .6.3.5.2-.1.7-.2 1 0-.3 0-.7 0-.8.2s0 .4.3.4c.6 0 .7.4 1.3.3a.9.9 0 0 0-.7.4c.6-.3 1.1.4 1.8.2-.2.1-.7.4-.7.6.4-.5 3.2.4 3.2-.7l-.1.8c.3-.2 1.4-.3 1.8-1 0 .2 0 .5-.2.6.3 0 .8-.2 1.3-.9.2-.3.2-.5.2-.7.5 0 .8-.1 1.2-.4.4-.3.8.3 1.5-.2.6-.4 1.2 0 1.6-.2.3-.2.8 0 1.2-.2s1 .1 1.6-.4c1 .4 2.3 1 5.2.5 1.6-.3 2.2.3 2.2 1 0 .6-.4.6-.6.6-1 .1-1.3-.3-1.7-.2-.2.1-.4.5 0 .7-.3.1-.3.4-.1.5s.5 0 .8-.1c-.4.1-.7.4-.5.7.1.2.4.3.7 0 .3-.4.8-.7 1.2-.7zm-18.6-8c-.8-.3-1-.3-.9.4 0 .3.3.7.5.9 0-.3.1-1 .4-1.2z"
                            transform="matrix(.08 0 0 .1 5.2 3.4)"
                        />
                        <path
                            d="M114.8 24.3c.8-.4 1.1-.4.9.3 0 .3-.3.7-.5.9 0-.3 0-1-.4-1.2z"
                            transform="matrix(.08 0 0 .1 5.2 3.4)"
                        />
                        <path
                            d="M113.5 23.8c1.6 0 1.8.8 1.7 1.7 0 1-.5.6-.8 2-.1.4-.5.5-1 .5-.3 0-.7 0-.9-.6-.3-1.3-.8-1-.8-2 0-.8.2-1.6 1.8-1.6z"
                            transform="matrix(.08 0 0 .1 5.2 3.4)"
                        />
                        <path
                            d="M109.4 27.5c-.4-.2-.7 0-.9 0 .6.1.6.8 1.8 1-.3 0-.4.2-.7 0 .5.4 1 .9 2.2.9.7 0 .2.3-.2.1.4.5 1.3.1 1.9 1 0-.7-1-1.7-.5-2.4-1.7-.1-1.8-1-2.7-1.7-.8-.6-.9-1.2-1.2-2.3-.1-.5-.7-.8-1-.7-.3 0-.5.3-.2.5.2.2.6.2.6.7-.3-.4-.8-.5-1-.3-.1.2 0 .5.2.5.5 0 .2.6.7 1-.5-.5-.9-.6-1.2-.3-.1.2 0 .5.4.5.5 0 1 1.2 1.8 1.5zm13 4.6c-.2 0-.1.5-.5.5.8 0 1.3-.2 1.6-.5l-.2.5c.4-.3 1.5-.4 2-.3s.6-.1.8-.4c.2-.4 0-.6-.3-.8-.3-.3-.4-.7-.3-1.3-1.4-2-4-1-4-.2.9 1.1 1 1 1.8 1.1.7.2 1.2.2.7.6-.2.2-1 0-1.5.1-1.3 0-2-.9-2.3-.4-.3.4 0 .6.6.6-.4 0-1 0-.9.4.2.7.8-.1 1.1.1-.2 0-.6.1-.6.3 0 .2.5.5 1 0a1.6 1.6 0 0 1 1-.3z"
                            transform="matrix(.08 0 0 .1 5.2 3.4)"
                        />
                    </g>
                    <path
                        d="M123.5 29.2c-.4-.2-.9-.3-1.4-.2m-5.6 0c-.4.8-.2 1.2-.1 1.6m-4-5.6c.2.2.4-.2.8.2-.1-.1-.3.3-.6 0m2-.1c-.3 0-.5-.3-.9.1.1-.1.3.3.6 0m-.6 0v.3c.1.7.3 1-.3 1-.5 0-.3-.3-.2-1v-.3"
                        fill="none"
                        strokeWidth={0.1}
                        transform="matrix(.08 0 0 .1 5.2 3.4)"
                    />
                    <path
                        d="M113.5 27.7c.4 0 .6 0 .6-.6 0-.2.3-.3.1-.7.2.4-.7.4-.7.2 0 .2-1 .2-.8-.2-.1.4.2.5.1.7 0 .6.2.6.7.6z"
                        fill="#ff0016"
                        strokeWidth={0.1}
                        transform="matrix(.08 0 0 .1 5.2 3.4)"
                    />
                    <path
                        d="m113 26.5-1-.3m1 .3h-1m1 .1-.9.3m1.7-.4 1-.3m-1 .3h1.2m-1.2.1 1 .3"
                        strokeWidth={0.1}
                        transform="matrix(.08 0 0 .1 5.2 3.4)"
                    />
                    <path
                        d="M14 5.5zm0 0v.1zm0 .2zm0 .3zm0 .1zm0 0v.1zm1 .2zm0 0v.1zm0-.1zm.7 0v.2-.1zm0 0zm0 .1v.1zM14.6 6v.2V6z"
                        fill="#0051ba"
                        stroke="none"
                    />
                </g>
            </g>
        </svg>
    );
}
