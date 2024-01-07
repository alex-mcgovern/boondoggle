import clsx from "clsx";

import { Box } from "../box";
import { type Css, css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagGbSct({
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
            <path
                d="M0 0h512v512H0z"
                fill="#0065bd"
            />
            <path
                d="m0 0 5 3M0 3l5-3"
                stroke="#fff"
                strokeWidth={0.6}
                transform="scale(102.4 170.66667)"
            />
        </Box>
    );
}
