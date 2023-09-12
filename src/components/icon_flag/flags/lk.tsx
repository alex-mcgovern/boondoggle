import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagLk({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512v512H0z"
                fill="#ffb700"
            />
            <path
                d="M21.3 256 91.4 21.3h70.1v469.4h-70z"
                fill="#ff5b00"
            />
            <path
                d="M21.3 21.3h70.1v469.4h-70z"
                fill="#005641"
            />
            <path
                d="M182.7 21.3h308v469.4h-308z"
                fill="#8d2029"
            />
            <path
                d="M463.4 454.9s2.9 5.9 6.1 8.3c4.8 3.5 14.5 3.3 18.6 7.4 5 5-.4 11.4-.3 12l.3 3.4s-3.4 0-4.8.3c-2.1.3-3 2-6.9 1.8-9.9-.7-9.5-9.6-10-17.2-.5-3-1.7-6.7-2.3-9.6-.6-2.5-.7-6.4-.7-6.4z"
                fill="#ffb700"
                id="lk_svg__a"
                stroke="#000"
                strokeWidth={0.9}
            />
            <use
                height="100%"
                transform="matrix(-1 0 0 1 676.3 0)"
                width="100%"
                xlinkHref="#lk_svg__a"
            />
            <use
                height="100%"
                transform="matrix(1 0 0 -1 0 512)"
                width="100%"
                xlinkHref="#lk_svg__a"
            />
            <use
                height="100%"
                transform="rotate(180 338.1 256)"
                width="100%"
                xlinkHref="#lk_svg__a"
            />
            <g transform="matrix(.8 0 0 .8 0 3.2)">
                <use
                    height="100%"
                    stroke="#000"
                    strokeWidth={5.6}
                    width="100%"
                    xlinkHref="#lk_svg__b"
                />
                <g
                    fill="#ffb700"
                    id="lk_svg__b"
                >
                    <path d="m363.5 415.8 2.3-1.4 1 1.4c1.3 1.8 5 1.7 7.4 0l1.9-1.5 1.6 1.4c2 1.9 5.8 1.9 8.3 0 1.7-1.2 2-1.3 3-.3.7.6 2.7 1.2 4.4 1.5 3.2.4 3.2.4 5-2.4 1.6-2.3 1.8-3.2 1.5-5.5a59.4 59.4 0 0 1-.6-5.3c-.2-2.6-.1-2.6 3.6-4a50.5 50.5 0 0 0 5.4-2c1.5-.9 5.7-5.8 5.7-6.8 0-.2-1.6-.6-3.6-.8-8-1-9.3-5.2-4.1-13 8.3-13 13.4-25.5 13.4-33.4 0-3.6.3-4.8.7-4 1.9 3.1-1.5 16.4-6.5 26l-2 3.8 1.9-.4c1-.3 7.4-3 14-6 18.2-8.2 24.4-9.8 36.2-9.3 9.9.4 14 2.3 21 9.6 3.7 4 7.3 6.7 13.8 10.8 13.8 8.6 14.4 9.4 15.1 19.6.7 10.3.3 10.9-7.5 12.6-6.7 1.5-10.9 4.6-12 9-.6 2.2.7 2.3 4 .1l2.5-1.6 1.1 1.6c1.5 2.1 4.5 2.1 7 0l2-1.5 2 1.5c3 2.5 7 1.9 8.2-1.2.2-.5.8-.4 2 .7 2.3 2 8 2.8 8.6 1.2.2-.6-.2-2-1-3.2-3.3-5-4.4-7.3-4.4-10 0-3.8 1-5.7 5.4-8.7 5.2-3.8 6.8-8.6 2.8-8.6-2.4 0-4.9-2.2-6.5-5.7-3.2-7.2-2.5-15.2 2.3-28.6a57.6 57.6 0 0 0 5.4-25.2c0-7.4-.2-8.6-1.8-12.7a45.4 45.4 0 0 0-4.6-8.1l-2.8-3.7 3.5-3c10.8-8.9 8.6-23.5-4.4-29.1-4-1.8-5-1.9-12-1.9-4 0-10.5.6-14 1.3a98.2 98.2 0 0 1-14.2 1.2c-6.8 0-8-.2-10.6-1.6-2.7-1.4-3.2-2.1-3.7-5.5a2 2 0 0 0-1.1-1.5c-1-.3-5.2 3.4-5.8 5-.4.9-.6.8-1.5-.3a13.4 13.4 0 0 1-2-3.6c-1-3.3.3-5.7 4.2-7.6l3-1.4-1.8-1.1c-3.6-2.3-9.8-.7-12 3-.7 1-1.4 2-1.6 2-.2 0-1.4-1-2.6-2.3-4.7-4.6-3.1-11.4 3.2-13.4 3.3-1.1 6.3-.3 6.9 2 1 3.3 3.8-1.1 3.3-5.2-.3-2.7-.3-2.8 1.6-2.8 2.6 0 8 3.4 9.8 6 2 3.1 1.8 8-.4 11.6l-1.7 2.8 2.3-.4c3.2-.7 6.4-2.7 8-5.2a12 12 0 0 0 .4-10.4c-1.5-2.7-1.3-3.1.9-2.2 3.6 1.5 5.6 3.2 7 6.1 1.4 2.6 1.5 3.2.8 6a17 17 0 0 1-2.2 4.8c-1.2 1.6-1.3 1.9-.3 1.9 1.8 0 5.4-1.7 6.7-3 .7-.8 1.7-2.5 2.2-4l1-2.5 1 2c1.5 2.7 4.5 5.2 8.1 6.8 3.9 1.6 5.5 1.7 3.5.2-1.4-1-4-8.5-3.1-9.2a51 51 0 0 1 11.7 9c5.7 5.1 9.3 6.8 14.5 6.8 6.7 0 10.6-5.8 7.6-11.3-1.7-3.2-5.6-3.7-8-1-1 1.3-1.3 2.3-1 3.7.4 1.6.3 1.8-1.2 1.8-2 0-5.8-2.5-12.6-8.2a102 102 0 0 0-32.1-18.7 70.4 70.4 0 0 0-24.3-1.3c-6.4 1.2-14 4.9-18.2 8.8-7.3 7-7.4 16.3-.3 24.8l2 2.4-1.3 2.2a9.3 9.3 0 0 0 .4 10.4c1 1.4 2 2.5 2.3 2.5.2 0 .4-.9.5-2 .2-2.7 1.4-4.5 3.4-5.2 1.8-.7 3-.3 11.2 3 8.7 3.4 23 3.6 38.2.6a42.6 42.6 0 0 1 20 .2c7.2 3 8.8 10.7 3.6 16.5-2.3 2.6-4.4 3.6-11.7 5.6a54.3 54.3 0 0 1-19.5 1.5c-10.8-.1-14.7.1-19 1-4.9 1-7.8 1.1-21.8.8l-16.3-.4 1.8 1.4a22 22 0 0 0 3.1 2.3c1.3.7 1.2.8-.6 1.5-1 .4-3.4.7-5.3.7h-3.3l-.4 2.8a10 10 0 0 0 0 4c.4 1 .2 1.2-.8.8-.7-.3-2.6-.8-4.3-1.1a26.7 26.7 0 0 1-5-1.6c-1.9-1-2.1-1-2.8.3-.6 1-6.2 5.2-7 5.2a26.7 26.7 0 0 0-2.2-7.5c-1-2.1-1.9-4.5-2.2-5.2-.3-1.1-.5-1.2-1-.3-.3.5-.7 2-1 3.2a15.5 15.5 0 0 1-1.8 4.6l-1.5 2.2-1-1.9c-1-2-2.6-4.2-3.2-4.2-.2 0-.5.6-.7 1.5-.5 1.6-4.4 6.3-5.4 6.3-.3 0-.6-1.3-.6-3 0-1.5-.3-2.9-.7-2.9-.4 0-.7.5-.7 1 0 1.2-3.3 5-4.5 5-.4 0-1.2.4-1.7 1-1.2 1.3-2.2 1.1-1.7-.4a9 9 0 0 0-.4-3.8l-1-3.2c-.2-.5-1.4-.3-4 .5-4 1.3-5.4 1-3.3-.6.8-.6 2-2.7 2.6-4.6.7-2 1.7-3.7 2.2-3.9.7-.2.7 0-.2 1.2a5.7 5.7 0 0 0-1.1 2.6c0 .5-.5 1.8-1 2.9-.6 1-1 2-.9 2.1s1.7-.5 3.5-1.3l3.2-1.6v1.4c0 .8.4 2.8.9 4.5l.9 3 2.2-1c2.2-1 4.3-4.6 4.3-7.5 0-1.4.8-1.2 1.2.3 0 .4.6 2.1 1 3.7l1 2.8 1.5-1.8c.9-1 1.9-3 2.3-4.3.8-2.4 2-3.5 2-1.7 0 1.2 3.4 5.8 4 5.4.4-.2 1-1.9 1.5-3.8 1-4 2.5-6.6 3.5-6 .4.2.5.6.3 1-.2.2.6 2.8 1.8 5.6a2557.7 2557.7 0 0 1 2.6 6.3c.4 1 .8 1 3.3-1.3 1.5-1.4 3-2.9 3.1-3.4.3-.8.6-.7 2 .2a25 25 0 0 0 9.5 2.8c.2-.2.4-2 .4-4l.1-3.7 2 .4c1 .3 3.3.3 5 0l3-.4-2.7-2c-1.5-1-3-2.3-3.4-2.9-.3-.6-1.7-1.2-3.2-1.3-4.1-.4-11.4-4.4-11.4-6.4 0-.4 1 .3 2.2 1.4 2.8 2.5 6.6 4 10 4h2.4l-1.5-2a11.9 11.9 0 0 1-2-5.2c-.2-3-.5-3.4-3.6-5.5a35.2 35.2 0 0 1-5-4.3l-1.7-1.9-.9 2.3c-.5 1.3-1 2.3-1.3 2.3-.2 0-1.2-.8-2-1.7a7 7 0 0 0-2-1.6c-.3 0-1 1.2-1.8 2.7l-1.4 2.7-1-1.5a23.8 23.8 0 0 0-3-3.4c-1.2-1-1.7-1.8-1.3-1.8.4 0 1.7 1 3 2.3l2.2 2.3 1-1.7a6 6 0 0 0 .5-3.8c-.4-1.8-.3-1.9.3-.7a16 16 0 0 0 3 3l2.2 1.8 1.5-2.7c1.5-2.8 1.5-2.8 2.1-1.1 1 2.1 7.5 7.5 13 10.6 1 .5.6-1.1-1-5a12.7 12.7 0 0 1-.8-4c0-1.8-.5-2.6-2.8-4.4a10.9 10.9 0 0 1-5-8.4c-.3-1.7-.9-3.5-1.4-4.1-.6-1-.8-.4-.6 2.6.2 2.1-.1 4.7-.6 5.8l-.8 2-.6-1.7c-.4-.9-2-2.5-3.5-3.5s-2.6-2-2.4-2.2c.2-.2 1.8.7 3.5 2 2.7 2.1 3.2 2.3 3.6 1.4.4-1 0-5.6-.8-8.8-.4-1.6-.4-1.6 1.6.4 1.4 1.4 2.2 3.2 2.9 6.2.8 3.8 1.2 4.5 4.7 7.6 2.1 1.9 4 3.3 4.1 3.2.2-.2.4-5 .6-10.8.4-11.1 0-13.8-2.7-17.2l-1.4-1.8 2.2-2.3a16 16 0 0 0 4.7-8.8l.4-2.7-2.4 2.3c-2 1.9-3 2.3-5.3 2.3s-3.2-.4-4.7-2a20 20 0 0 0-8.3-4.8c-1.2-.4-1.6-.2-1.6.6 0 .6-.6 2.2-1.4 3.7l-1.4 2.6-3-3c-1.9-1.7-4-3.2-5.7-3.6-4.1-1-4.3-1-4.3 2.1 0 4.7-2 5.6-5.6 2.5-2.8-2.4-5-3-10.3-2.3l-4 .4.7 1.8c.6 1.5.5 2.2-.8 3.9-2.1 2.8-4.8 4-9 4-2 0-4.4.4-5.4.9s-3.6 1-5.7 1.2c-2 .2-4.3.6-5 .8-1 .4-1 0-.7-2.2.5-3.4-2-6-5.7-6-4.9 0-7.1 4.4-5.2 10.2a44.6 44.6 0 0 1 1 3.8 23 23 0 0 0 5.2 6.6c2.6 2.6 5 5.3 5.4 6a9 9 0 0 0 3 2.5l2.2 1.2-.3-2.4c-.3-2.6.2-3 1.6-1.1.5.6 1.8 1.7 2.8 2.3 1.7 1 2 1 2 .2 0-.6.3-1.9.7-2.9l.7-1.8 1.3 2.5c.7 1.4 3 4.5 5.1 7 4.1 4.7 6.7 10 5.4 11.2-.6.5-2 .5-5-.1-2.2-.4-5-.7-6.2-.5-2.3.3-2.5 0-1-1.8 1.5-2 1.2-2.3-1.8-2.3-3.5 0-12.2-1.7-15.6-3-3.2-1.3-4-1-5 2.1l-1.7 5.6-1 3 3.6-.3a37 37 0 0 0 5.5-1 6 6 0 0 1 2.2-.3c.2.1-.3 1.3-1 2.7l-1.4 2.4 2.2-.4c1.2-.3 3-.9 4-1.4 1.8-.8 2-.8 3.4 1.5 1.7 2.7 3 2.6 3.3-.3.3-3 1.3-2.6 3.2 1.4 1.8 3.8 3.6 5.2 4 3 .1-.8 1-2 2.1-2.8 2.2-1.5 3.8-1 4.7 1.3 1 2.5-1.2 5-7.4 8.8a43 43 0 0 0-21.7 31c-1.9 11.8 4 24 15.6 32.9 5.6 4.2 14.5 8.6 13.9 7-2.4-7.3-2.3-21 .1-23.3.4-.4.3 1-.3 3.1-2 7.9-1 14.1 4 28.7 4.4 13.2 3.8 18.9-2.6 22.6-2 1.2-3.3 1.4-8.8 1.3-6 0-6.7 0-8.6 1.6a15.7 15.7 0 0 0-4.3 8.6c0 1.3 1.4 1.1 4-.4z" />
                    <path d="m460.5 415.5 2.5-1.6 1.7 1.6c2.2 2.1 4.9 2 7-.1 1-1 1.8-1.6 1.9-1.5l.9 1.6c.5.9 1.6 1.3 3.6 1.5 2.3.1 3 0 4-1.4l1-1.7 2.5 1.6c6.8 4.4 10.4-.2 7.3-9.3-1.5-4.6-.6-7.2 4.3-13 2.1-2.5 3.8-5.2 3.8-6 0-1.1-.4-1.3-3.2-1.2-2.6 0-3.4-.3-4.8-1.8-2.3-2.5-2.1-5.4.4-8.6l2-2.5-3.6-2.4a59.7 59.7 0 0 1-8-7.1 25.7 25.7 0 0 0-17.5-9l-4.7-.5v3.6c0 4.5 2.2 8.9 8 16.3 6.6 8.4 7 9.7 7.3 20.7l.3 9.3-2 1.8c-1.7 1.6-2.4 1.9-8 2.2-5.3.3-6.5.6-8 2a8.7 8.7 0 0 0-3.4 5.3c-.3 1.5-.2 1.8.9 1.8.7 0 2.4-.7 3.8-1.6zm-142.2-24a5.8 5.8 0 0 0 1-3c0-1 .6-1.4 3.2-1.8l3.1-.4-2-1.7c-2.5-2-2.8-3.5-.6-3.5s5.8-2.2 6.4-3.9c.3-.8 0-1.8-.4-2.3-1.2-1.4-3.5-1.2-3.9.4-.5 1.6-1.2 1.6-3 0-2.5-2.5-2.6-7.6 0-10.6 1.1-1.4 1.1-1.4-.4-2.9-1.6-1.6-2.8-4.6-2-5.4.2-.2 1.5 0 2.8.5 2 .6 2.7.6 3.5 0 2.3-1.9-.2-4.3-4-3.7-1.6.2-2.2 0-2.4-.8-.2-.6-1.5-1.4-3-1.8-2.7-.7-2.7-.7-2.7 1.2 0 2-1.2 2.4-3.4 1.1-1.8-1-3.5-.2-3.5 1.7 0 1.8 1.7 2.6 5 2.4 2.4-.1 2.5 1.7.2 4.3l-1.7 2 1.3 1.9c2 2.8 1.8 7.5-.3 9.9l-1.7 1.8-1.1-1.5c-1.6-2-3.7-1.9-4.3.3-.3 1.4 0 2 1.8 3.6 1.2 1 3 1.8 3.9 1.8 2.3 0 2.2 1.9-.2 3.7l-2 1.5 3 .4c1.6.3 3 .7 3 1 0 1.3 2 5.2 2.6 5.2.4 0 1.2-.7 1.8-1.5z" />
                    <path d="M356.5 374.9c2.7-1 8.5-6 8.5-7.1 0-.4-1.6-2.2-3.6-4-4-3.6-8.5-9.9-9.7-13.5-.6-2-3.5-5.2-11.7-13.2l-10.9-10.5-3.1.8c-1.8.4-3.9.8-4.7.8-1.5 0-1.5 0 .5 1.6l2 1.6 3-1.6c2.7-1.6 2.8-1.6 3.1-.3.2.7-.2 2-1 2.9-.7.9-1.1 2-1 2.3.3.3-.4 1-1.5 1.6-2 1-3.5 4.3-1.9 4.3 1.5 0 4.7-4 4.3-5.3-.2-.7 0-1.4.2-1.6 1.3-.7 1.2 2.4 0 4-.8.8-1.2 1.8-1 2.2.2.3-.5 1-1.6 1.6-2 1-3.5 4.3-1.9 4.3s4.7-3.8 4.4-5.2c-.2-.7-.2-1.5.1-1.7.9-.4 1.3 2 .6 3.2a2.3 2.3 0 0 0 0 2.2c.7 1.3 0 3.7-1.3 4.5-.5.3-.2 1 1.2 2 2 1.4 2 1.6 2 8 0 5.4.2 6.8 1.2 7.7 1 1 1.2 1 1.2 0s2-2.4 3.5-2.4c.5 0 3.4 2.5 6.5 5.5s6.4 5.7 7.3 5.8l2.2.4c.3 0 1.7-.3 3.1-1zm-33.3-26.1c0-1.7-3.6-3.6-7.9-4-3.5-.5-3.5-.4-3.5 1.3 0 1.4.5 2 3 3 3.8 1.7 8.4 1.5 8.4-.3z" />
                    <path d="M327.1 348.6c1.8-1.6 2.6-3.4 1.5-3.4-1.2 0-4.4 2.8-4.4 4 0 1.6.6 1.5 3-.6zm-3.7-5.1c.1-1-.5-1.6-2.3-2.5-4-1.7-8.6-2.6-9.7-1.7-2.1 1.7-.7 3.9 2.6 4.3 1.4.1 3.2.5 4.1.9 2.6 1 5 .5 5.3-1zm0-5.3c.2-1.3-.7-1.8-8-4.4-5.5-2-7.9-1-6.1 2.3.6 1.1 1.6 1.6 3.9 2 1.7.2 4 .7 5.1 1.1 3 1 4.8.6 5-1zm3.6-4.9c1.1-1.1 2-2.4 2-3 0-1.5-4.3 1.3-4.9 3.3-.6 2.3.5 2.2 3-.3zm-3.6-.3c.2-1.6-2.4-3-7.6-4.1-3.9-.9-5.6-.4-5.3 1.4.2 1 1.5 1.7 5 2.8 5.9 1.8 7.6 1.8 7.9-.1zm5-7.4c6.8-3 7.3-10.5 1-12.5-2.6-.8-4.2-.3-5.2 1.4-.8 1.4-.3 3.8.7 3.8.4 0 .7.5.7 1 0 2.7-10.2 3.8-14.4 1.7-1.5-.7-2-2.7-.9-2.7 1 0 1.6-2 1.1-3.3-.6-2-2.6-2.6-5.3-1.8-6.3 1.6-6.1 9 .3 12a33.6 33.6 0 0 0 22 .4z" />
                    <path d="M324.3 319.8c.4-.4.2-1-.4-1.4-1.4-1.1-1.3-2.8.2-4.7 1.2-1.4 1.3-3.6 1.7-25.1.7-37.1 3.5-65 7.1-71.8 1.5-2.6 1.3-2.6-2.5 0a36 36 0 0 0-11.7 13.6c-6.2 11.5-8.3 27-8.3 60.2 0 18.8.1 21.3 1.2 23 1 1.8 1 2.4.4 4.2-.5 1.1-.7 2.3-.5 2.5 1.4 1.3 11.4 1 12.8-.5zm56.1-35.4c.3-.3-.2-2-1-3.6-1.2-2.6-1.7-3-3.4-3a65 65 0 0 1-23-6.4c-5.1-2.3-7-2.8-7.5-2.2-1.6 1.5 1 5 5 6.9a64 64 0 0 0 18.3 3.7c2.7 0 2.8 0 1.2 2.3l-1 1.6h3l5 .6c3 .7 3 .7 3.4.1z" />
                    <path
                        d="M412 301.1c0-1-2.9-3.5-5.7-5.2-2.3-1.3-2.7-1.4-2.7-.3 0 1.6-1.4 5.7-2 5.7-.3 0-.8-.8-1-1.7-.3-1-1.4-3-2.5-4.3l-2-2.5-1.4 2.3c-1.4 2.2-3.9 4.3-5 4.3-.2 0-.3-1.2 0-2.5.1-1.6 0-2.8-.5-3-.4-.3-.8-.2-.8.2 0 .8-3.4 4.6-4 4.6-.4 0-.8-1-1-2.4l-.8-4.8c-.2-1.2.3-.4 1 2l1.6 4.1 1.6-2.5a11 11 0 0 0 1.6-3.4c0-.5.3-.7.7-.5.4.2.9 1.9 1.1 3.7l.5 3.4 1.8-2a28.8 28.8 0 0 0 2.6-3.2c.7-1.2.8-1.2 2.3 0 .8.8 2.1 2.5 2.9 3.9s1.5 2.4 1.6 2.3l.6-3.2.4-3c.1-.5 5.4 3 7.4 4.7 1.2 1.1 2.4 1.9 2.6 1.7.2-.2.4-1.8.4-3.7 0-2.8-.3-3.6-2-5.1-2-1.8-2-1.8-2.8-.5-1 1.7-2.1 1.7-2.1 0 0-1.2-3.8-5.9-4.7-5.9-.3 0-1.1 1-1.8 2.3s-1.5 2.3-1.7 2.3c-1 0-6.3-6-6.3-7 0-.8.4-.6 1.3.8a21 21 0 0 0 3.1 3.6c2 1.8 2.8 1.4 3.6-2.1.3-1 .7-1.8 1-1.8.8 0 5.4 4.9 6 6.5l.7 1.6.5-1.8c.6-2.2 1.3-2.2 2.3-.2.4.8 2.4 2.6 4.4 3.8l3.7 2.4.7-2.4c.4-1.3 1-2 1.2-1.6.4.5-.6 4.5-1.3 5.3 0 .1-1.3-.6-2.6-1.5l-2.5-1.8v3.2c0 1.7-.2 3.8-.4 4.6-.5 1.6-1.7 2-1.7.6zm-18.5-25.4c-4.4-3.6-5-4.4-5-6.2l.1-1.8.3 1.7c.2 1 1.4 2.6 2.8 3.8l2.6 2 1.5-1.8c.9-1 1.6-2.2 1.6-2.6 0-1.2.2-1.1 3.2 1.5 2.6 2.3 2.7 2.3 3 .8.3-.8.2-2.4 0-3.5-1-3-.8-3.4.5-1.6l2.4 2.8c1 1.1 1.1 1.1 1.5-.3.3-.9.5-2.4.5-3.4v-1.9l2.3 2.7c2.3 2.6 2.5 2.7 3.1 1.4.5-.7.8-2.4.8-3.7 0-1.8.2-2.2.6-1.6.8 1.2.3 4.2-1.1 6.8l-1 2-1.3-2.1c-1.7-2.6-2.3-2.6-3.3.2-1 2.7-1.7 2.9-2.7.8-.6-1.3-.8-1.1-1.2 1.7l-.5 3-3-2.3-3-2.3-1.5 1.5c-.7.9-1.3 2-1.3 2.4 0 1-.8 1-1.9 0zm39-13.6c-1.5-1.4-2.6-2.8-2.4-3 .3-.3.5-.4.6-.2a67 67 0 0 0 3 3c3.4 3.6 2.7 3.7-1.1.2zm-52-5.4c-1.4-2-1.3-3.2.5-5.4 1.2-1.5 1.8-1.7 4-1.4 1.5.1 4.6 1.4 6.9 2.8a21.2 21.2 0 0 0 11 3l-1.7-2.8c-2.2-3.3-2.2-3.7.4-1.7 2.6 2.1 5.7 2.7 12.7 2.5l3.4-.1-2-2c-2.7-2.7-1.9-3 1.2-.3 2.8 2.5 2.7 2.7-3.4 3.3a23 23 0 0 1-7.6-.5c-3.4-1-3.6-.9-2.9.2.4.7 1 1.2 1.3 1.2.4 0 .7.4.7.8 0 1.3-7.4.1-11-1.6-8-4.1-9-4.5-11-3.9a4.3 4.3 0 0 0-2.4 2.3c-1.3 3.3 3.4 5.9 5.3 3 .6-.9.5-1.4-.5-2.5-1.4-1.4-1.2-1.6.6-1 1.3.5 1.4 3.6.2 4.8-1.3 1.3-4.5 1-5.7-.7z"
                        fill="#000"
                    />
                    <path
                        d="M412.4 248.6c-1-1-.2-1.2 4.3-1.3 5.6-.1 9-1 13-3.6 3.2-2 4.1-1.6 1 .5-2.7 2-7 3.4-11.3 3.8l-5.1.7c-.8.2-1.7.1-2-.1z"
                        fill="#000"
                    />
                </g>
            </g>
        </Box>
    );
}
