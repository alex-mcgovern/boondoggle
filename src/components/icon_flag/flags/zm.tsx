import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagZm({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="zm_svg__a">
                    <path
                        d="M248 0h496v496H248z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#zm_svg__a)"
                fillRule="evenodd"
                transform="translate(-256) scale(1.0321)"
            >
                <path
                    d="M0 0h744v496H0z"
                    fill="#198a00"
                />
                <path
                    d="M656.8 178.2H744V496h-87.3z"
                    fill="#ef7d00"
                />
                <path d="M569.6 178h87.2v318h-87.2z" />
                <path
                    d="M480.5 178.3h89V496h-89z"
                    fill="#de2010"
                />
                <g
                    fill="#ef7d00"
                    stroke="#000"
                >
                    <path
                        d="M685.6 63.5s32.9-14 36-16.9c1.5 1.7-13.1 19.4-41.5 26 25.8-6.2 47.8-25.3 52.2-24.7 1.3.3 1 18.7-58 34.6 40.8-10.7 64.6-30.4 64.3-28.2.3.4-4 15.5-39.8 27.2 10-2.3 37-18.8 36.7-15.6.9 1.3-26.2 36-75.1 24.7 39 10.2 64.4-14.3 68-13.9.8.2-7.2 21.4-56.4 22.7 23.6-2.4 16.8-.1 16.8-.1s-14 10.9-30.7 3.5c13.2 3.6 14.6 3.7 14.9 4.9-.9 1.4-11.7 3.6-22.2-2 8.4 3.4 16 4 16.1 5.3a11 11 0 0 1-10.3 1.3c-4.7-2.1-48.8-29.2-48.8-29.2l75-20.6 2.8 1zm-88.2 73.3a6 6 0 0 0-6.7 5.8s-.6.5-.2 3.3a16.2 16.2 0 0 1 1.6-2.5c.7 0 3.8 1 8.5-2.7-4.3 4.5-1.7 6.2-1.7 6.2s-1 3.6 2.3 4.3c-1-1.5-.4-2.7-.4-2.7s4.6-.5 4.3-6.2c.2 5.1 3 6.4 3 6.4s0 2.8 3 3c-1.6-1.4-1.3-3.6-1.3-3.6s4-2.9.6-7.7c2-1.1 3.7-4.3 3.7-4.3s-2.8-1.2-4-2.2c-.6-1.2 0-8.2 0-8.2l-1.7-9-4.7 14c.2-2 .3 6-6.3 6z"
                        strokeLinejoin="round"
                        strokeWidth={0.9}
                    />
                    <path
                        d="M630 116.5c.1.2 5 5.5 9.6 5.2 1.7-1.4-3.7-4.6-3.7-5.3 2 1.7 9.9 8.5 15 6 2-2.8-3.7-2.4-9.9-10.2 4.3 2.9 15.2 9.3 20.3 6.8 2.1-2.3-11.3-9.6-15.8-15.2l-11.6-6-15.8 13 11.9 5.7z"
                        strokeLinejoin="round"
                        strokeWidth={0.9}
                    />
                    <path
                        d="M612.2 72.5s5.4-3.2 26.8-1.6c2.3.3 14.6-4.2 18.5-5.5 6.2-1.1 26-5.5 31.4-9.5 3.8-.5-1 7-5.8 8.7-5 2.3-23.4 8.7-30 7.8 7.9.1 3.5 6.5-9.5 3.4 6.2 3.5 4 4.1 4 4.1s-11 .6-14-1.9c7.4 2.8 4.4 3.8 4.4 3.8s-7.6.7-11-.9c5.3 1.6 2.6 2.6 2.6 2.6s-4.4.7-8-.6c-3.6-1.3-9.1-10.4-9.4-10.4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.9}
                    />
                    <path
                        d="m620.8 119.5.8 14.2-.8 1.1c-.4.5-10-1.5-8.7 6 0 3 0 3.7 2 5.4-.5-2-.3-3.4-.3-3.4s2.7 1.7 5.4-2.8c-1.8 4.4-.5 6-.1 6 .4.9-.7 4.5 2.9 4.4-1.4-1.3-.7-3.3-.7-3.3s3.8-.6 2.4-7.5c1.4-1.4 2 0 2 0s.4 4 3.7 3.2c1.5.9-.2 3.1-.2 3.1s2.4 0 3.1-2c.8-2 1.6-5.7-2.4-7.2-.5-1.5 1.6-1.6 1.6-1.6s2.5.8 3.3 2.1c.7 1.3.4-3.3-2.7-3.8-3.9-.1-4.1-1-4.1-1.1l-1-13.2-6.2.4z"
                        strokeLinejoin="round"
                        strokeWidth={0.9}
                    />
                    <path
                        d="M634.3 131.6c0-.7-6.6-9.6-5-10.8 1.7.4 4.5 4.5 6.7 3.1-.6-1.6-2.6-.7-5-4.7-2.2-4.6-2.5-11.5-10.5-19 5.2 8 16.9 12.6 17.4 10.2s-10.3-11-9.8-13.2c2.1 4.4 13 14 21 13.3.5-1.9-6.6-5.7-8.4-9.2-5-3.4-18.7-15.2-19-17.9a32 32 0 0 0-9.5-10.3c-.6-.6-.7-1.3-.8-1.7-3.1-7.2 1-9.6 3.4-10 2-.1 2.5.1 4-.5l-5.1-2c2.2 1.6 7.8.2 6.5 4.8 2.5-.9 7.7-7-5.9-8.5-4.4-5-22.5-8-27 14.1.3.3.5.6 1.7 1.5-5.8-2.8-21.2-5-26.8-5.8-15-4.4-30.6-14.8-32.1-13.6-2 1 9 11.3 8.5 11.5-9.7-5.6-18.4-9.6-26.6-13.2-5.8-2.2-11.5-7.2-12.2-6.2-2 4.4 9.3 15.4 11.4 16.7 2 1.2 18.7 9 18.4 9-25-11.3-29.2-13.4-30.4-14.7-2.2-.5-7.6-7.7-9-7.3-.9.8.7 12.3 12.7 17.4 2 1.4 25.5 10 25.3 10.6l-28.1-11.6c-5.2-2-11.6-9.2-12.8-8.4-1.1.8 3 8.5 8.2 11 2.8 1.2 13.3 6.4 22.9 9.7.6.3-17.1-6.7-25.7-10.3-3.8-2-5.7-4.8-6.2-4.2-1 .6 1.4 12 28.8 18.5.7.3 9.6-2.1 9.2-1.8a111.8 111.8 0 0 1-15.4 2.7c-.3.8 1.7 4.9 15.9 4 1.8 0 11.6-3.5 10.8-2.8-.4.4-13.4 4.6-14.4 4.7-.8 0-5.4.6-5.5 1-.2.7 3.3 3.6 11 4 6.7.4 19.4-4 19.2-3.7-.3.3-12.3 4.4-12.7 4.6-.4.3-4.8.5-5 .9-.3.8 6.4 7.1 26.3.4-2 2.7-11.6 4.5-11.6 5 0 .4 2.1 2.5 5.5 3.2 1.7.4 4 .3 6 0a25 25 0 0 0 13-7c.5 1.5-12.7 8.3-12.1 8.9 2.9 2.7 12.4-.4 13-.7A148 148 0 0 0 587 91.7c.3 1.5-23 14.2-22.7 14.7 1.5 2.3 9.5-.2 9.8-.4l10.4-5.6c.3-.2-11.4 6.9-10.4 8-.5 4.5 18.3-3.2 19.8-4.2.7-.5-9 4.3-9 6.6 3 5.3 13.2 3.6 14.7 2.4.8-.5-1 4-.4 3.6a17 17 0 0 0 3-4.2c-.2 1.5-1.4 3.8-2 6.5-.6 2.7-.8 5.8-1.7 9-.2 1.4 6.2-2.8 5.3-12.8.5 5.2-2 15-1.4 15.4 1.4 1 5-4.8 5.5-8.8 1 2 3.4 6.2 5.4 7.2-.2-3 0-3-.9-5.9.5-4 .6-9.4.7-15.6 5.5 10.4 7.6 14.8 6.1 22.8 1.6.7 4.2-5.6 4-8.8 2 9 11 10.3 11.2 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M543.9 65.6s-3.7 2.8-8.3 2.6c1.1 4.6 10.7 1.1 10.7 1.1s-4.6 5.1-8 6c2 1.5 10.3 1 11.7.2 1.4-.9 3.9-4 3.9-4s-8.5 9.8-9.8 9.7c-.1 1.1 9 .7 10.9-1 1.9-1.7 6.6-4.3 6.6-4.3s-12.5 8.7-13 8.7c4.6 1.3 14-1.4 20-5.1-8.9 5.9-9.7 7-14.2 9 4 .8 6 3.5 19.7-2.4 7.8-3.7 12.2-10.4 12.2-10.4a79.2 79.2 0 0 1-21 17.4c-.4 1 9.1 5 21.3-7.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M609.9 93s.8 3.9 4 6.8c3.3 3 3.6 5.9 3.6 5.9m-9.3-37.8s1.2 3.5 4.5 5.7a38 38 0 0 1 9 10.4 114 114 0 0 1 2.3 13.4m-36.7-24.2c.2 1.4-4.8 8 2.1 15.8-6.3 7.7-6.3 8.7-6.3 8.7s3.5 2 9.9-3.5c10.4 12.8 7 18.7 7 18.7"
                        strokeLinecap="round"
                    />
                    <path
                        d="M599 103.9s-.9-1.4.8-6.5c1.6 1.8 3.3 2.2 4 3s8.7 1.9 9.2 7.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M608.3 55.7c0-.4-1.6-3.8-7.5.4 3.2.2 6.3 2 7.5-.4z" />
                    <path
                        d="M664.7 71.2c.3.2 17.7 4 23.5 2-7.4 9.9-22.2 3.2-22.2 3.2 7.3 2.2 7.6 2 9.9 4 .7 2-13.3 1.1-18-1.5 13 4 13.2 3.8 13.6 5.3.6 2.2-21-.5-23-3.4 5.8 4.5 9 5.3 12.2 7.4-4 1.7-11.2 3.4-24.5-6 17.5 16 33.3 15 35.8 17.8-6.1 9-29.7-5.3-40.6-12.6-10.8-7.2 23.8 17.5 27 17.1-1.6 2.5-13 .3-13.8-.9"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M669.2 87.9c-2 .3-8 .3-9 .1"
                        strokeLinecap="round"
                    />
                    <path
                        d="M538.8 63s13.2 7 18.8 6.5c-1.5 1.4-3.7 2-3.7 2 1.4.5 5.2 2.6 11 1.2-1.3 1.4-3.1 3-3.1 3s5 1.9 10.6-1a43.6 43.6 0 0 0-2.7 3.6l4 .3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </g>
        </Box>
    );
}
