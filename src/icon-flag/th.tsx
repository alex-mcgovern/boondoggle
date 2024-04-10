import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagTh({
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
            <g fillRule="evenodd">
                <path
                    d="M0 0h512v512H0z"
                    fill="#f4f5f8"
                />
                <path
                    d="M0 173.4h512V344H0z"
                    fill="#2d2a4a"
                />
                <path
                    d="M0 0h512v88H0zm0 426.7h512V512H0z"
                    fill="#a51931"
                />
            </g>
        </Box>
    );
}
