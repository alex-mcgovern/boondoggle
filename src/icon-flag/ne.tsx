import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagNe({
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
                fill="#0db02b"
            />
            <path
                d="M0 0h512v341.3H0z"
                fill="#fff"
            />
            <path
                d="M0 0h512v170.7H0z"
                fill="#e05206"
            />
            <circle
                cx={256}
                cy={256}
                fill="#e05206"
                r={72.5}
            />
        </Box>
    );
}
