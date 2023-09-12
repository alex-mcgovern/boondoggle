import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagCl({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="cl_svg__a">
                    <path
                        d="M0 0h708.7v708.7H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#cl_svg__a)"
                fillRule="evenodd"
                transform="scale(.722)"
            >
                <path
                    d="M354.3 0H1063v354.3H354.3z"
                    fill="#fff"
                />
                <path
                    d="M0 0h354.3v354.3H0z"
                    fill="#0039a6"
                />
                <path
                    d="m232.3 265.3-55-41.1-54.5 41.5 20.3-67.5-54.5-41.7 67.4-.6 21-67.3 21.3 67.2h67.5L211.4 198l20.8 67.4z"
                    fill="#fff"
                />
                <path
                    d="M0 354.3h1063v354.4H0z"
                    fill="#d52b1e"
                />
            </g>
        </Box>
    );
}
