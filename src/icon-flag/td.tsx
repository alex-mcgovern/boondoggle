import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagTd({
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
                    d="M0 0h171.2v512H0z"
                    fill="#002664"
                />
                <path
                    d="M340.8 0H512v512H340.8z"
                    fill="#c60c30"
                />
                <path
                    d="M171.2 0h169.6v512H171.2z"
                    fill="#fecb00"
                />
            </g>
        </Box>
    );
}
