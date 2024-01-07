import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagDk({
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
                d="M0 0h512.1v512H0z"
                fill="#c8102e"
            />
            <path
                d="M144 0h73.1v512H144z"
                fill="#fff"
            />
            <path
                d="M0 219.4h512.1v73.2H0z"
                fill="#fff"
            />
        </Box>
    );
}
