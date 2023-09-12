import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagAg({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="ag_svg__a">
                    <path
                        d="M109 47.6h464.8v464.9H109z"
                        fill="#25ff01"
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#ag_svg__a)"
                fillRule="evenodd"
                transform="translate(-120 -52.4) scale(1.1014)"
            >
                <path
                    d="M0 47.6h693V512H0z"
                    fill="#fff"
                />
                <path d="M109 47.6h464.8v186.1H109V47.6Z" />
                <path
                    d="M128.3 232.1h435.8v103.5H128.3V232.1Z"
                    fill="#0072c6"
                />
                <path
                    d="M692.5 49.2v463.3H347L692.5 49.2zm-691.3 0v463.3h345.7L1.2 49.2z"
                    fill="#ce1126"
                />
                <path
                    d="m508.8 232.2-69.3-17.6 59-44.4-72.5 10.3 37.3-63-64.1 37.2 11.3-73.5-43.4 58-17.6-67.3-19.6 69.3-43.4-59 12.4 75.6-64.1-39.3 37.2 63-70.3-11.3 57.9 43.4-72.4 18.6h321.6z"
                    fill="#fcd116"
                />
            </g>
        </Box>
    );
}
