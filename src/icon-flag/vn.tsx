import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagVn({
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
                <clipPath id="vn_svg__a">
                    <path
                        d="M177.2 0h708.6v708.7H177.2z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#vn_svg__a)"
                fillRule="evenodd"
                transform="translate(-128) scale(.72249)"
            >
                <path
                    d="M0 0h1063v708.7H0z"
                    fill="#da251d"
                />
                <path
                    d="m661 527.5-124-92.6-123.3 93.5 45.9-152-123.2-93.8 152.4-1.3L536 129.8 584.3 281l152.4.2-122.5 94.7L661 527.5z"
                    fill="#ff0"
                />
            </g>
        </Box>
    );
}
