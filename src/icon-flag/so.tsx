import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagSo({
    height = "space_8",
    width = "space_8",
    ...rest
}: Css) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, css({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="so_svg__a">
                    <path
                        d="M177.2 0h708.6v708.7H177.2z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#so_svg__a)"
                fillRule="evenodd"
                transform="translate(-128) scale(.72249)"
            >
                <path
                    d="M0 0h1063v708.7H0z"
                    fill="#40a6ff"
                />
                <path
                    d="m643 527.6-114.3-74-113.6 74.8 42.3-121.5-113.5-75 140.4-1 43.5-121.1 44.5 120.8 140.3.1-112.9 75.7L643 527.6z"
                    fill="#fff"
                />
            </g>
        </Box>
    );
}
