import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagGbWls({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 256h512v256H0z"
                fill="#00ab39"
            />
            <path
                d="M0 0h512v256H0z"
                fill="#fff"
            />
            <g
                stroke="#000"
                strokeWidth={1.2}
            >
                <path
                    d="M339.5 113.2zm0 0a585.4 585.4 0 0 0-94.4 63.3c-14.3 12.6-10.3 22.6-10.8 33.8.4 7.6-1.7 14.6-6.3 18.8l-32 6.5-3-8.8c1-4.5 4.7-6.8 12.6-4 .6-5.7-4-8-9.5-10.1-2-1.5-4.2-2.6-4-7.6-.9-11.4 17.4.8 17.5.8.2 0-.6-11.5-9-13.8-4.5-1.6-6.4-6.4-4.7-10 3.6-7.3 10.5.6 15.8.9-.2-4.8-1.6-8.2-5.7-12-2.2-1.4-7.6-2.4-7.7-4.7-.1-3 5-4.4 12.2-3.5-1.5-4.4-6.3-7.2-12.9-9.2l-3.9-6.8c-1.8-3.4-2.7-3.5 1.6-10l12.8-8.5-4.2-.5c.5-4.6.6-6.2 1.7-13.9-4.2 5.6-9.3 4.6-14 7 0 0-13.2 2.3-17.4 8l-33.3-1.8c-7 1-13 3-14.3 9.9-16 1.6-33 .2-45.3 15.6 8.4-.4 15.7-2.4 25.1-1.2 0 0 8 .2 9.7 8.7.2.3 2.7.3 2.7.3l3 2.4 1.3-3.3 2.7 2 .8-3.6 2.7 1.8.2-4.2 3.6 2.5v-5.6s13.1 0 17.1 8.4c.2.1-36.8 6.8-72.6 3.7l10.3-5.1c-13-2.7-25.3-5-36.8-14.1 4.4 16.4 26.8 35.6 31.4 35.5l-4.4-8 38.9 1.7c1.4 4.3.8 9.1 4.2 12.9 0 0-2.1 7.1 2.6 10 .2.4 5.7-14.4 5.7-14.4s1.7 4 3.4 6.6c2.5-12.7 16.3-14.8 16.3-14.8l3 6.8c-4.4.7-9.8 9.5-6.9 14.3-2.9 0-8 8.6-6.4 13.2-2.5 2.4-8.5 5.7-7 15.8-4.8 1-7.6 9.8-6.1 19-7.4 6.9-5.6 19.5 1 24.6-2.7 2.5-4.4 4.3-4.4 7.3-2.6-1-5-.1-6.1 1.6-3.2-3.3-7.8-6.2-11-3.1-.9-3.9-6-8.1-11.4-7.6.3-4.1-1.8-9.1-7.7-10.9 0 0-1.1-19.1-7-25.3-.5-3.5.4-5.8 5.2-8.6 4.7-2.6 5.8-4.6 5.4-11.8 1.9-4.8 3.3-9.7-2.5-13 .1 5.7-1.6 8.5-4 11-2.7-.4-3.7 2.8-5.5 4.3-2.7-3.6 5.5-9-.6-16.9-.3-.3-4.2-10.2-13.7-10a13 13 0 0 1 6.4 11.7 35 35 0 0 0-1.5 24.8c-4-6-6.2-17.2-9.5-19.2-2.9-.5-4.3-7.3-15.4-5.4 4.8 1.3 6.3 5 7.6 8.3-3 1.6-1.5 5.6.7 8.3-.4 6.6 3.5 10.4 9.3 12.8l-2.9 26.6c-2.3-.3-5.9 8.8-7.3 9-2.2 1.4-6.2 5.2-1.7 6.3-1.3 4.9-2.6 7.8-9.8 8.8 0 0 7.7 4.6 14-3.2 6.8-.2 4.6-8.3 7.9-11.9 0-.1 1.8-1.3 4.6-8.5 1.2 6.4 7.7 26 22.5 35.7 13 13.8 23.6 26.9 23.5 45.3 5-4.7 8-12.1 10.3-19.2 7-2.4 17-3.3 26-3-1.5 3.3-3.2 6.4-1 8.5-6.3 2.1-7.6 6.6-5.1 11.2-6.6 4.4-7 7.3-7.1 14.7-12.2 15.6-19.7 15.1-31.8 11-4-2.3-10-5.6-12.9-3.8-5.2-3.5-12.7-4-14 3.9 4-3.3 6.3-2.6 9.4.5-.6 1.6-1.1 3.1 1.2 4l-3 3.4c-5.6-.8-13.2-.8-15.1 7.3 2.8-2.3 9.2-3 14.4-.6l2.9 1 .3 3.9s-7.6-1.2-9.7 11.2c7.2-7.6 12.3-5.6 12.3-5.6 2.7 4 12.9 3.4 20.2-3.2 10.2-5.8 13.2 2.5 19.8-3 5.5-4 12-1.3 16.5 3.5 5.1 1.9 10.5 3.5 14.8 0 0 0 5.1-3.3 10.3 2 0-6-4.2-9.2-10-9.3l-1.7-1.7c-5.4-1.2-11.5-.7-16.3-3.4a49 49 0 0 1 11.9-22.8c7.8-8.4 13.6-12.2 23.6-25.2-.4 7.3 5.2 15.4 8.1 22.9 0 0 6-9.5 6.8-17.2.2 0 7.4-3.8 10.5-7 6.6 4 17.2-3.2 24.1-9.3a17 17 0 0 0 12.4 0c-4 8 2.3 15.5 12.3 18.7.9 7.1 8 8.6 19 8.6.4 4.2 7 4.8 7 4.8-4.2 2-6.3 3.8-6.2 8.2-4.2 0-7.4 1-8.5 5.9a34 34 0 0 0-16.6 3.4 29 29 0 0 1-16-7.3c-2.1-1.8-2.7-4.4-6.4-5.4-2.4-2.9-5.2-2.2-6.1.5-2.5-2-11.7-2.9-13.3 5.9 4.3-3.2 8.2-4.4 11-.5-1.6 2.7 3.5 4.2 7.9 5.3 3 .2 8.6 3 10.3 7.8a17 17 0 0 1-14-2.3 9.2 9.2 0 0 0-11-.6c-3.8-2.4-12.5 2-12.8 9.1 3.6-3.4 7-5 10.3-2.8-1.6.4-1 .5-.8 1.5l8.5 4.9c-4.2 1.1-8.1 2.8-6.3 10.5 0 0 3.4-6.7 11-4.2.2-.2 1 2.4 3.2.7 3.3-3.8 11-5.5 17.5-6.1 5.4-.7 10.7-2.2 15.3.8 4.1-2.1 8.7-3.6 13.4-.2 5.6 1.8 9.6 8.2 16.7 5.3 3.5-2.4 7.8-2.6 12.2 2.4 0-6.2-4.6-8.3-11.2-9.7l-4.6-2.7c-4.2-.7-8.5.1-12.8-1.9a78 78 0 0 0 48.8-35.8l10.5 3.7c2.5.2 2.7 1 7.8 2.6.2-7.6-3-15.4-16.6-16.1l-17.9-6.8c-3.7-4-5.5-12.5-.6-17.5 4.7-4.2 5.5-3.7 8.6-8.8 3.8-.4 7.4 3.5 10.9 3.5 1.7 5 11.2 9.3 17.3 7.8 3.8 3.4 11 5.3 19 2.6 4.5 4 10.4 5.6 17.3 2.5 1.9 1.8 5.7 3.3 10.2 2.4.4 0 2.3 4.9 7.2 6.6-2.2 2-.9 11 1.3 14.3-1.5 3.4-2 7-.7 10.7-4.9 3.1-5.9 5.5-3.7 10.8-6.4 10.4-14.1 11.5-21.4 8.3l-7.8-4.9-8.3-8.1c-1.4-1.4-4.3-1.8-5 1.2 0 0-10.6-2.4-11.5 6.6 4.4-4.3 10.7-.5 10.7-.4 0 .2-1.5 1.2-.3 3 .2-.3 7.8 2.8 14.5 5.6a28.5 28.5 0 0 0-9.3-2.4c-3.8-.4-7.8-.9-9.6 2-4.1 1.7-10.5 3.1-10.2 10.7 2.7-4.5 6.5-4.3 11.3-4 0 .4-.2.8-.3 1.1 5.2 2.4 4.3-.7 9.1-1.1 4.1-.4 10 1.1 13 2.1-3.9 1.1-9.1.7-11.6 3.4-.4 1-2 .5-1.3 2.7 0 0-7.5-.2-9.5 10.2 7.6-4.9 13.4-4.7 13.5-4.7l2.4.5s9.2-6.2 9.4-6.2c.1 0 8.8-3.8 12.9.6 3.4 1.7 7.2 1.8 10.8-.4 7.2-3 13.8-3.3 20.4 1l6 3.6 2.5-1.7s6.7-1.9 11.6 4c-2-10.3-9.4-10.6-9.4-10.6l-1.7-1.5-10.5-4.1c-1.6-3.8-5.4-6.8-1.6-11.4 4-19.5 8.6-34 1-53.8 7.1 3 12.4 12.5 21.3 9.2 0-8-29.2-23-51.5-35 36.5-2 80.4-28.9 63.5-63.1l8-24.8a34 34 0 0 0 18.2 15.8c-5.6-10.8-8.9-43.6-5.6-66.2a529.6 529.6 0 0 1-48.2 50.6c8.4 2 15.9.6 24-.4l-6.8 14.3c-22.5-13.2-48.8-3.3-49 14.2.8 20.5 26 23.4 40.6 16.3-2.9 18.6-45.7 11.7-45.7 11.7-15.2-5.2-29.7-4.3-45.6-4.2 3.3-10.2 21.7-19.3 35.8-15.3-19.7-22 2.8-49.4 29.8-57.9-29.5-9.7-4-32.2 18-48.3 0 0-63.5 26.7-69.3 26.6-18-1.3-13.1-22.7-6.3-34.2zM140 139c1.5 0 3.2.2 4.6.5 2.9.7 6.4 1.1 6.3 2-1.3 2.2-4.6 4.9-7.8 4.7-3.2-.1-5-2-6.1-6.9.3-.2 1.5-.3 3-.3zm267.5 75.4c4.1 0 9.1 1.7 14 6.9-2.4 6.7-22.7 10.2-24 .2-.4-3 3.9-7 10-7z"
                    fill="#d21034"
                />
                <path
                    d="m161 197.9 3 4.5m0 .1s0 6 1.2 6.2m-2.8 3.2 3.2 5.3m-8.8 1.4 4 4.4m3.2-3.4c0 .2 3.6 6.9 3.9 6.9m-8.6-2.3s1.3 8.2 2.4 7.9m-7.7 7 3.6 5.5m3.1-11.2s2 7.7 3.5 7m1.6-11.7c.1.2 3.6 5.2 4.6 4.5m-.8 2 3.3 6.7m-9-1.5c.2.2 2.8 8 2.8 8m-9.2-4s2.5 8.6 4.8 7.2m-5.8 4.2s.2 4.5 2.4 4.7m1.5-7c0 .2 2.3 3.3 2.3 3.3m4.1-8.6 1.9 3m4-8.4 2.9 3.5m-15.8-43.7c.1 3.8 6.1-1.4 8.5-4.6m-11 17.7s6.5-4.6 11.6-11.6M155 226.8c4.6-1.3 13.1-11.6 14.8-17M154.1 237c1.3.6 17.2-10.9 17.6-19.3m-18 28.1c0-.1 14.5-3.7 20.6-19.7M152.9 258s23.2-13.9 24.5-24.1M334 281.3s-1.5 12-13.5 13.8m17.3 7.6c.2-.1 11.5-12.6 8.6-16.4m17.8 4.4s-.2 8.7-7.3 14.7m21.4-12.2s.3 10.5-4.2 14.7m17.2-8.4s-5 9.8-6.8 10.8m6.6 6.6s6.6 1.7 8.7-2.7m-7 17s6.2 1.1 9-4.8m-9.6 15.8s5 4.2 8.3-1.3m-79.3-79.6s-.6 21.3 29.4 25.6c33.5 9.3 49.3 4.4 51.3 41.9-1.3 14.3-3 30.4-13.4 24.3m-99.1-72.2s4.7 8.5 10.5 8c7.5-2.3 10.3 2.4 10.3 2.4m-41.3-1.9s12.6 6.2 23.4-3.8m-22-5c1.1 14.7-17 23.1-24.1 21.7m25 34.7c.1 0 9.8-5.8 7.8-9.9m-27 1.3c.2-.3 16.2-1.8 19.1-7.6m-26.6-16c0-.1 22.7.1 24.2 4.3m6-17.7s-22.2 37.8 18.7 37.8m-42.2-38.4s-4.7 14.2-11.5 19m-12-23.9s8.2 16 0 23.8m-21.4-19.3c.1.3 2.6 22.6-3 28.9m-7.7-28.2s.9 14.2-3.3 19.2 1 15.5 1 15.5m-51.1 6.8s3 5.3 7.2 3.5m-2.1-15s6.7 3 9 1.8m-1.7-25.6s-10 2.8-6.2 14.5c5.7 4.7 11.4 4 11.4 4M135 347.3c-.2 0 1 9.2 7.5 2.2 4.5-9.4 18.7-35.8 21.9-45m6.6-4.3s-6.9-5.3-6.6 2.1c-.2 4.6 2 5.8 2 5.8.4 3.3 3.3 8 5.7 3.7 1-4.1-.7-6-.7-6m4-7.5c-6.3-.5-9.6 13.1 2.3 4.6m4-9.3s-1.5 2.1-3.9-.1c-1.2-2.2-5.7 10 2.1 10.5 1.4-3.6 5.8-4.6 5.8-4.6m3.6-11.6s-3.5 1.6-4.7 1.4c-4.2 1-3.4 10.7 2 10.2 1.7-2.1 3.7-5 3.7-5m-34-19.5c-.2 0-14 21.7 7.7 27.4m167-60s-8.4 7.2-.6 18.7c-26-.4-40 11.6-41.2 19.7-33.2-2.3-27.2 7.5-38 10.7-14.4-12-35.6-5.3-34.2 6.7-9.6-13.6-24.5-7-26.3-3.6-1.8 3.3-1.1-16.7-1.1-16.7s-9.7 4.3-16.4 12.3v-16.8c-8 1.6-15.9 1.7-24.2 1.6m-21.9-6.2s12 6.7 27-2.4m-28-21.9s9.4 8.5 27 5.8M132 225s2.1 6.9 22.3 7.3m-15.5-23.2s7.6 9.3 17.9 8m-11.4-21.3s3 5.1 14.2 6m-7.6-20.7s5.9 6.5 12.6 5.4m22.4-57.7s2.6-2.6 7-1.3m-8.9 15s-8-.3-7.5-3.5c.6-3.6 8.5-6.2 8.5-6.2s10.6-6.8 12.2-9.1m-47.8 37 10.3 19.7 5-7.4 2.5 5.1 4.2-7.4 7.3 4.7-2.8-9 6.1-.4s-1.6-4.4-7.1-5.3a153 153 0 0 1 6.5-4.4s-2.9-3.4-7.4-3.5c1.5-1.6 3.5-5.5 3.4-5.5l-4.5-1s10.3 3.3 18.2-1.3m-19.7-16c.2.2-.5 4.1-2.7 6.4m-37 4.5s6.4-1.7 11.2-.8c4.7 1 11 2.7 11 2.7s7.6-1 10-2.8m-47.9 5.1s-.9 3-1.2 5c0 1.5-4.6 3.4-4.6 3.4M120 138s4 5 4.2 8c.1 2.9-3 5-3 5m-43 21.6-4.2-6.8 3.7-1.3m76.3 102c-3.4-4.4 2.5-71 15-88.5-4.4 31.4 10 63.5 13.7 63.4m-66.6-82s5.6 2.2 17.4-7.1m16 22.5 8.4.1m253.4-52.4s-140.7 65.8-142.7 69.2c23.7-7.1 124.4-24 126.9-22.5-6 1.5-128.2 29.5-133.9 36.3 30.5-1 94.4 9.8 104.4 20.2-21.7-4.9-86.6-14.5-106.4-10.2 14.5 3.5 70.2 39.5 70.2 45.3-8.4-8-75.4-35.7-78-33 15.3 9.2 37 43.4 37 51.8-4.5-7.2-43.2-48.8-45.4-46 4 5.6 12.2 54.7 8 57 0-6-15-48.9-16.2-50.1-3 .8-22.2 52.4-18.4 57.2-2.5-17.2.4-53.1 5-51.7-8.3 1.2-35.1 36.5-32.2 42 .8-8.7 2-14.6 17.1-43.8-16.8 1-51.6 22.9-57.5 30.7 4.7-14 34.2-37.5 47-39.1m60.8-51.3c14.9-8.2 60.8-25 91.5-37.4M228 228.9s10-.1 20.2-27.6c10-37.7 89.2-79.6 90.8-87.5m-245 153s-2.4 5-5.3 6.4m16.6 1.2s-3.2 6-3.9 9m14.7-6s2.7 8.3.5 12.2M86 255.7c-8 4.5 4.5 32.9 42.3 35.6m-6-15.3s-1.1 5 6 15.2c-2 11.3 8.6 20.1 12.8 21.6m-22-138.6 1.2-3 1.3 3.3h2l1.4-3.4 1.2 3.4h2l1.3-3.8 2 3.6h1.6l1.3-4.3 2.6 3.1 1-.4.8-4.3 2.6 3 .8-.4 1.2-4.2 2.2 3.1 1-.3 1-3.6 2.1 3.3m-32.9 5.3 15.8-.3c5 0 13.3-7 22.6-4.8m-71.7 38.9s2.6 5.6 6.3 2.4m-12.3 1.3s-5.1 13.7 1 16.8m-8.3-31.8s0 3.2 6.7-1.8m-27.4 73.3s5.4 1.6 4.5 5.7M51.5 206s3.4 1.7 6.6-3.3m28.8 160c5.2-.3 6.3 2 11 2 5.5.2 10.8-2 17.8-3.9m44.7 12.6c-.1 0-2.5 5-.4 7.4m-73.9-7s8.3-6.7 12.6-2.5c4.2 1.4 6.5 1.1 6.5 1.1m-14.7-18s2 5.3-4.8 4.6m-2 7.5s4.3 2.7-.6 6.3m3.2 5s6 .8 2.5 5.6M278 341.7s16.1 1.7 16.9 2.9c1.8-2 16.2-13.6-1.5-15.3a16.1 16.1 0 0 1-15.4 12.4zm-5.7 8c6 4.9 3.5 7.8 22.4-5m-31 11s8.9 9.6 15.3-2m-32.3 5.5-12 6.3m-21.7 8.9s7.3-6.3 10.7-3c3.5 3.4 18-2.8 18-2.8M218.5 347s2.5 5-2.4 5.6m-7.2 10s2.6 4.7-2.4 6m8 6.8s7.7.4 5 6.1m66.1-7.1s-4.2 3.5-1 7.5m61.5-32.8s4.8 2.3-1 6.3m-4.7 8.3s3.6 3.8 1.2 7m8.9 7.6s5 1.4 4.4 5.5m65.6-9.2s-4.2 3-2 7M346.4 253c10-1.2 24.3 21 31.6 25.4m43.8-56.9s5 4.4.6 15.1m8.8-32.1c1.4 1.1 6.9 4 10.5 10.7m3.4-44-7 19m14.9-20s-1.4 17-3.4 20.4m-28 30.7c-2.3 6.8-22.7 10.2-24 .2-.7-5 12-13 24-.2z"
                    fill="none"
                    strokeLinejoin="round"
                />
                <path
                    d="m139.8 139 7.9 1.4s-5.5 7.4-7.9-1.4z"
                    strokeLinejoin="round"
                />
            </g>
        </Box>
    );
}
