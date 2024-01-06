import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagLi({
    height = "space_8",
    width = "space_8",
    ...rest
}: Sprinkles) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, sprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512.1v256H0z"
                fill="#002b7f"
            />
            <path
                d="M0 256h512.1v256H0z"
                fill="#ce1126"
            />
            <g
                fill="#ffd83d"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                transform="translate(-54) scale(.85333)"
            >
                <g id="li_svg__a">
                    <path
                        d="m216.4 122.3-1.9 62.5h-63.4c-7.8-15.2-14.2-28-14.2-45.5 0-14.6 11.5-26.2 28-26.2 17.5 0 36.8 5.9 51.5 9.2z"
                        stroke="none"
                    />
                    <g strokeWidth={1.5}>
                        <path d="M144.5 125.2v36m5-39.7v48m5.2-50.5v57.2m5-58.4v44.9m5.1-45.1v45.3m5.1-47v47m5.1-47v47m5.1-46.5v47m5.1-46.5v46.9m5.1-44v47m5-46.5v52.9m5.2-52.9v47m5-47v47" />
                        <path
                            d="M176.4 118c10.8 1.7 34.4 12.8 31.7 27.7-3.8 21.2-16.2 12.7-32.6 9.7l-12.4 4.1c-4.5 4.5-11 8.7-15.4 3.2h-7.4v28.8h81.4V122z"
                            fill="#000"
                        />
                    </g>
                    <circle
                        cx={212.8}
                        cy={113}
                        r={4.9}
                    />
                    <circle
                        cx={201.7}
                        cy={110.3}
                        r={4.9}
                    />
                    <circle
                        cx={190.4}
                        cy={107.5}
                        r={4.9}
                    />
                    <circle
                        cx={179.1}
                        cy={105.6}
                        r={4.9}
                    />
                    <circle
                        cx={167.8}
                        cy={104.5}
                        r={4.9}
                    />
                    <circle
                        cx={156.8}
                        cy={105.1}
                        r={4.9}
                    />
                    <circle
                        cx={146.2}
                        cy={108.7}
                        r={4.9}
                    />
                    <circle
                        cx={137.3}
                        cy={115.3}
                        r={4.9}
                    />
                    <circle
                        cx={131}
                        cy={124.4}
                        r={4.9}
                    />
                    <circle
                        cx={127.9}
                        cy={135.2}
                        r={4.9}
                    />
                    <circle
                        cx={128}
                        cy={146.3}
                        r={4.9}
                    />
                    <circle
                        cx={130.2}
                        cy={157.2}
                        r={4.9}
                    />
                    <path d="m215 119.5-.5 6.5c-12.3-2-29.7-8.8-46-8.8-15 0-26.6 6-26.6 21.2 0 14.9 6.3 28.5 14.7 42.3l-8.7 4c-7.8-15-14.3-28-14.3-45.4 0-14.6 11.5-29 31.3-29 17.5 0 35.4 6 50.1 9.2z" />
                </g>
                <use
                    height="100%"
                    transform="matrix(-1 0 0 1 444 0)"
                    width="100%"
                    xlinkHref="#li_svg__a"
                />
                <path d="m222 53.1-5.2 9.7 5.2 9.6 5.1-9.6L222 53zm0 24.4-5.2 9.6 5.2 9.7 5-9.8-5.1-9.6zM203.6 75l8.1 5.1 8.1-5.1-8-5.2-8.2 5.2zm20.5 0 8.1 5.1 8.2-5.1-8.2-5.2-8 5.2z" />
                <circle
                    cx={222}
                    cy={75.1}
                    r={3.9}
                />
                <circle
                    cx={222}
                    cy={100}
                    r={10.5}
                />
                <path
                    d="M219.3 89.9v6.6a62.5 62.5 0 0 0-7.4.8m20.2 0a62.1 62.1 0 0 0-7.5-.8v-6.6m-12.8 12.7a61.4 61.4 0 0 1 10.2-.9c3.4 0 6.8.3 10 .9"
                    fill="none"
                    strokeWidth={1.5}
                />
                <path d="M211.8 117.7c-1 17-3 34.5-9.7 47.1l10.8-4.4c3.8-14.3 4.6-32.8 5.7-41.6l-6.8-1.1zm20.4 0-6.9 1.1c1.2 8.8 2 27.3 5.7 41.6l10.8 4.4c-6.6-12.6-8.6-30-9.6-47.1z" />
                <path d="M222 154.7c-13 0-22.5 6-23 21.6-3.2-5.6-16.5-23-29-20.7-7.4 1.4-14 11.7-12.8 23.4-6.2-17.6-24.1-20.5-37.3-10 11.7 9.5 16.9 37.8 26.7 50h150.7c9.8-12.2 15-40.5 26.7-50-13.1-10.5-31.1-7.6-37.2 10 1-11.7-5.5-22-13-23.4-12.4-2.3-25.7 15.1-28.9 20.7-.5-15.5-10-21.6-23-21.6z" />
                <g strokeWidth={1.5}>
                    <path
                        d="M297.1 219c0 5.6-33.6 11.7-75.1 11.7s-75.2-6-75.2-11.7c0-5.5 33.7-8.5 75.2-8.5 41.4 0 75.1 3 75.1 8.5z"
                        fill="#000"
                    />
                    <circle
                        cx={222}
                        cy={114.4}
                        r={3.5}
                    />
                    <circle
                        cx={222}
                        cy={122}
                        r={3.7}
                    />
                    <circle
                        cx={222}
                        cy={130.2}
                        r={4.1}
                    />
                    <circle
                        cx={222}
                        cy={139.3}
                        r={4.7}
                    />
                    <circle
                        cx={222}
                        cy={149.4}
                        r={5.1}
                    />
                    <path
                        d="M220 159.2c-.6 0-1.1.5-1 1.4l.6 4.3c.2 1.5 1 1 1.3 0 .2-1.2.1-2 .2-4.1 0-1.1-.6-1.6-1.2-1.6zm4 0c-.6 0-1.1.5-1.1 1.6 0 2.1 0 2.9.2 4 .2 1.2 1 1.6 1.3 0l.5-4.2c.2-1-.4-1.4-.9-1.4zm-7.7.6a1 1 0 0 0-1 1c0 1 .3 2.3.4 3.8.2 1.5 1.3 1 1.4 0 0-.8.2-2.2 0-3.9 0-.6-.2-.9-.6-1a.8.8 0 0 0-.2 0zm11.1 0c-.3 0-.6.3-.7 1a20.1 20.1 0 0 0 .2 3.8c0 1 1.2 1.5 1.3 0 0-1.5.4-2.7.4-3.7 0-.6-.5-1-1-1.1a.8.8 0 0 0-.2 0zm-15.4 1.7c-.5.1-1 .7-.8 1.3.3 1.3.6 2.7.6 4 0 1.1.9.7 1 0a59.8 59.8 0 0 0 .1-4c0-1-.5-1.4-1-1.3zm19.6 0c-.3.1-.6.5-.6 1.3l.2 4c0 .7 1 1.1 1 0 0-1.3.2-2.7.5-4 .2-.6-.3-1.2-.7-1.3a.6.6 0 0 0-.3 0zm-59 .2c-.6 0-1 .7-.6 1.5.6 1.4 1.3 2.2 1.9 3.6.5 1.3 1.4.5 1.1-.4l-1.4-3.7c-.3-.7-.7-1-1-1zm98.8 0c-.4 0-.7.3-1 1-.9 1.9-1.2 2.8-1.5 3.7-.2 1 .6 1.7 1.2.4l1.8-3.6c.4-.8 0-1.5-.5-1.5zm-94.8 0c-.5.2-.7.7-.5 1.3.6 1.2 1.3 2.5 1.8 3.8.4 1.1 1.4.8 1-.2l-1-3.7c-.4-1-1-1.3-1.3-1.2zm90.5 0c-.4.1-.8.5-1 1.2-.7 2-.8 2.6-1.1 3.7-.4 1 .6 1.3 1 .2l1.8-3.8c.2-.6 0-1.1-.4-1.3a.6.6 0 0 0-.3 0zm-85.5 1c-.6.1-1 .9-.6 1.9.4 1.2 1 2.3 1.6 3.7.6 1.4 1.5 1.1 1.3.2-.3-.9-.5-2.3-1.2-4.5-.3-1-.7-1.4-1.1-1.3zm80.8 0c-.4 0-.9.3-1.2 1.3-.6 2.2-1 3.6-1.1 4.5-.3 1 .7 1.2 1.2-.2.6-1.4 1.2-2.5 1.6-3.7.4-1 0-1.8-.5-1.9zm-93.2.7c-.6 0-1 1-.7 1.7.5 1 .9 1.4 1.4 2.6.6 1.2 1.2.3 1-.5-.3-.8-.6-1.7-.8-2.8-.2-.8-.6-1-1-1zm105.6 0c-.4 0-.7.2-1 1l-.7 2.8c-.2.8.4 1.7 1 .5.5-1.2.8-1.5 1.4-2.6.3-.7-.2-1.6-.7-1.7zm-67 2.8c-.7 0-1.3.8-1 1.5.2 1.2.8 2.2 1.1 3.7.4 1.3 1.3.7 1.2-.2a28.7 28.7 0 0 0-.5-4c-.2-.7-.5-1-.9-1zm28.4 0c-.3 0-.7.3-.8 1a28.7 28.7 0 0 0-.6 4c0 .9.9 1.5 1.2.2l1.2-3.7c.2-.7-.4-1.5-1-1.5zm-14.2 1.2c-.8 0-.9 1-.9 1.7a12.3 12.3 0 0 1-2 6.4c-1 1.2-2.3.9-3.5.2a22.3 22.3 0 0 1-3.3-2.2c-1.4-1-2.4-.4-.8 1.9 4.6 6.6 9.6 12.2 9.6 23 0 1.3.3 1.7.9 1.7s.8-.4.8-1.8c0-10.7 5-16.3 9.6-23 1.6-2.2.6-2.8-.7-1.8a21 21 0 0 1-3.3 2.2c-1.3.7-2.6 1-3.5-.2a12.3 12.3 0 0 1-2-6.4c-.1-.7-.2-1.7-1-1.7zm-35.3-1.6a.6.6 0 0 0-.2 0c-.3.1-.4.4-.3 1l1.1 3.9c.3 1 1.4.7 1.2-.5l-.6-3.1c-.2-.8-.8-1.3-1.2-1.3zm70.6 0c-.5 0-1 .5-1.2 1.3-.4 1.4-.4 1.8-.6 3-.3 1.3.9 1.5 1.1.6l1.2-4c0-.5-.1-.8-.4-.9a.6.6 0 0 0-.2 0zm-91.6.4c-.6 0-1 .8-.4 1.8.6 1.2 1.7 2.6 2.2 3.5.5.8 1.4.2.8-.8-.6-1-.8-2.3-1.6-3.8a1 1 0 0 0-1-.7zm112.5 0c-.3 0-.7.2-1 .7-.7 1.5-1 2.7-1.5 3.8-.6 1 .2 1.6.7.8.5-.9 1.6-2.3 2.2-3.5.6-1 .2-1.8-.4-1.8zM134 169.5c-.6 0-.8 1.2-.2 2a19.2 19.2 0 0 0 2.6 2.7c.8.8 1-.2.6-1l-1.8-2.7c-.5-.7-.9-1-1.2-1zm175.9 0c-.3 0-.7.3-1.1 1l-1.9 2.7c-.4.8-.2 1.8.7 1a19 19 0 0 0 2.6-2.7c.6-.8.4-2-.3-2zm-170.8 1c-.6 0-1 .4-.5 1.3l1.9 3.8c.5 1 2 1.3 1.4-.2l-1.3-3.8c-.3-.7-1-1-1.5-1zm165.8 0c-.6 0-1.3.4-1.6 1.1l-1.2 3.8c-.6 1.5.9 1.2 1.4.2.5-1 1.3-2.5 1.8-3.8.5-.9.1-1.3-.4-1.3zm-175.6.4c-.8 0-.8.7-.1 1.2.9.7 2 1.4 3 2.3 1.3 1 1.7 0 1-.8-.6-.8-1.2-1.6-2.9-2.5-.4-.2-.7-.2-1-.2zm185.3 0c-.2 0-.6 0-1 .2-1.6.9-2.3 1.7-3 2.5-.6.9-.1 1.8 1.1.8 1-.9 2.2-1.6 3-2.3.8-.5.7-1.2 0-1.2zm-109.6.7c-.5 0-.8.5-.7 1.2l1 3.6c.2 1.1 1.5 1.1 1.3 0-.2-1-.3-2.3-.7-3.9-.1-.6-.4-.9-.8-1a.6.6 0 0 0-.1 0zm33.8 0c-.3 0-.6.3-.8 1-.4 1.5-.5 2.8-.7 3.9-.2 1 1.1 1 1.3-.1l1-3.6c.2-.7-.2-1.2-.6-1.2a.6.6 0 0 0-.2 0zm-64-2c-.3 0-.5.7-.2 1.7a26 26 0 0 1 1.6 9c-.3 1.2-1 1.3-1.9 1a18.8 18.8 0 0 1-2.8-1.7c-.8-.5-1.7.1-.5 1.1 6 5 10.3 10.7 12 17.6.2 1.4 1.1 1.6.9 0-1.4-8.7-1.7-15.9.4-20.3.8-1.7 0-3.3-1.2-.6-.9 1.8-2.2 2.5-3.3 1a47.9 47.9 0 0 1-4-7.7c-.2-.7-.5-1-.8-1.1a.3.3 0 0 0-.1 0zm94.1 0c-.3 0-.6.4-.8 1-.7 2-2.9 6.2-4 7.8s-2.4.8-3.2-1c-1.3-2.7-2-1.1-1.3.6 2.1 4.4 1.8 11.6.5 20.3-.3 1.6.6 1.4 1 0a32.4 32.4 0 0 1 11.8-17.6c1.2-1 .3-1.6-.5-1a18 18 0 0 1-2.8 1.5c-1 .4-1.6.3-1.9-1-.2-1.2.2-3.9 1.7-9 .2-.8 0-1.5-.3-1.6a.3.3 0 0 0-.2 0zM144.4 172c-.5 0-1 .4-.7 1.2.4 1.4 1.2 2.8 1.5 3.6.3.9 1.2.5 1-.7l-.5-3.1c0-.6-.7-1-1.3-1zm155.1 0c-.6 0-1.2.4-1.3 1l-.4 3.1c-.2 1.2.7 1.6 1 .7.2-.8 1-2.2 1.4-3.6.3-.8-.1-1.2-.7-1.2zm-136.3-1.7c-.6-.1-.7 1.5-.2 2.2l2.8 3.1c.8 1 1.3.1.8-.7l-2.6-3.8c-.3-.5-.6-.8-.8-.8zm117.5 0c-.2 0-.5.3-.8.8l-2.6 3.8c-.5.8 0 1.7.9.7l2.7-3.1c.5-.7.5-2.3-.2-2.2zm-132 4c-.4 0-.7.2-.5 1 .2 1.2.5 2 .8 3.1.3 1 1 .9 1-.1l-.3-3.2a1.1 1.1 0 0 0-1-.9zm146.5 0a1 1 0 0 0-1 .8l-.3 3.2c0 1 .8 1.2 1 .1l.9-3c.2-.9-.2-1.2-.6-1.2zm-133.4 1.4c-.6 0-1.1.7-.4 1.6 1.1 1.5 2.4 2.5 2.9 3 .4.6 1.5.4.8-.7l-2.3-3.5c-.2-.4-.6-.5-1-.4zm120 0c-.2 0-.5.1-.6.4l-2.4 3.5c-.7 1.1.4 1.3.9.8.4-.6 1.7-1.6 2.9-3.1.7-1 .1-1.6-.5-1.6a.9.9 0 0 0-.2 0zm-140.7 4.1c-.4 0-.6.4 0 1.3a17 17 0 0 1 3.3 6.4c.1 1.4-.5 1.4-1.1 1.4-1.9 0-2.8-1.4-4.4-1.8-1.7-.3-2 .5-.8 1.4a53.4 53.4 0 0 1 14.7 13.8c1 1.9 2.3 2.5 1.6.8a23.7 23.7 0 0 1-2.4-12.6c.5-2.8 1.2-4.6 1.1-6.2 0-1.5-1-1.4-1.3 0l-1 2.8c-.4.5-1.8.8-3-.9a48 48 0 0 0-5.6-5.8c-.3-.3-.7-.5-1-.6zm161.7 0c-.3 0-.7.2-1.1.6a48.2 48.2 0 0 0-5.5 5.8c-1.3 1.7-2.7 1.4-3 1a12 12 0 0 1-1-2.9c-.4-1.4-1.3-1.5-1.4 0 0 1.6.6 3.4 1.1 6.2s0 7.2-2.3 12.6c-.8 1.7.6 1 1.6-.8a53 53 0 0 1 14.6-13.8c1.2-.9 1-1.7-.7-1.4-1.7.4-2.6 1.8-4.4 1.8-.6 0-1.3 0-1.2-1.4.1-1.3 1.8-4.4 3.3-6.4.6-1 .5-1.3 0-1.3z"
                        fill="#000"
                        stroke="none"
                    />
                    <path d="m150.1 212.7 2 6.1m2-7.3 1.8 6.2m2.6-7 1.2 6.4m2.8-7.1 1.3 6.3m3.8-6.8 1 6.4m4.5-6.4 1.1 6.3m4.3-8.1.8 6.4m4.2-6.1.8 6.4m4.1-7 .8 6.4m4-7 .5 6.5m4.8-6.5.4 6.5m4.4-6.8.3 6.5m4.9-6.8.3 6.4m5.7-6.6.3 6.5m79 .2-2 6.1m-2-7.3-1.7 6.2m-2.6-7-1.2 6.4m-2.8-7.1-1.3 6.3m-4-6.8-1 6.4m-4.4-6.4-1.1 6.4m-4.2-8.2-.8 6.4m-4.3-6.1-.8 6.4m-4-7-.9 6.4m-4-7-.5 6.5m-4.8-6.5-.4 6.5m-4.3-6.8-.3 6.5m-5-6.8-.2 6.4m-5.8-6.6-.2 6.5m-7.2-7v7.2" />
                </g>
            </g>
        </Box>
    );
}
