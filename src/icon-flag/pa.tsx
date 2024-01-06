import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagPa({
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
            <defs>
                <clipPath id="pa_svg__a">
                    <path
                        d="M0 0h512v512H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#pa_svg__a)"
                fillRule="evenodd"
            >
                <path
                    d="M-26-25h592.5v596H-26z"
                    fill="#fff"
                />
                <path
                    d="M255.3-20.4h312.1v275.2h-312z"
                    fill="#db0000"
                />
                <path
                    d="M-54.5 254.8h309.9V571H-54.5zM179 181.6l-46.5-29.2-46.2 29.5 17.2-48-46.2-29.6 57.1-.4 17.7-47.8 18.1 47.7h57.1l-45.9 30 17.6 47.8z"
                    fill="#0000ab"
                />
                <path
                    d="m435.2 449-46.4-29.2-46.3 29.5 17.2-48-46.2-29.5 57.2-.4 17.7-47.8 18 47.7h57.2l-46 30 17.6 47.7z"
                    fill="#d80000"
                />
            </g>
        </Box>
    );
}
