import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagMl({
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
                    d="M340.6 0H512v512H340.6z"
                    fill="red"
                />
                <path
                    d="M0 0h170.3v512H0z"
                    fill="#009a00"
                />
                <path
                    d="M170.3 0h171.2v512H170.3z"
                    fill="#ff0"
                />
            </g>
        </Box>
    );
}
