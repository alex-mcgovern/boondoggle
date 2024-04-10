import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagCz({
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
                d="M0 0h512v256H0z"
                fill="#fff"
            />
            <path
                d="M0 256h512v256H0z"
                fill="#d7141a"
            />
            <path
                d="M300 256 0 56v400z"
                fill="#11457e"
            />
        </Box>
    );
}
