import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagSy({
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
            <path d="M0 0h512v512H0Z" />
            <path
                d="M0 0h512v341.3H0Z"
                fill="#fff"
            />
            <path
                d="M0 0h512v170.7H0Z"
                fill="#ce1126"
            />
            <path
                d="M86.4 320 128 192l41.6 128-108.9-79.1h134.6M342.4 320 384 192l41.6 128-108.9-79.1h134.6"
                fill="#007a3d"
            />
        </Box>
    );
}
