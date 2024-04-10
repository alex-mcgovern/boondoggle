import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagLu({
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
                d="M0 256h512v256H0z"
                fill="#00a1de"
            />
            <path
                d="M0 0h512v256H0z"
                fill="#ed2939"
            />
            <path
                d="M0 170.7h512v170.6H0z"
                fill="#fff"
            />
        </Box>
    );
}
