import clsx from "clsx";

import { Box } from "../box";
import { type Css, css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagAm({
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
                d="M0 0h512v170.7H0z"
                fill="#d90012"
            />
            <path
                d="M0 170.7h512v170.6H0z"
                fill="#0033a0"
            />
            <path
                d="M0 341.3h512V512H0z"
                fill="#f2a800"
            />
        </Box>
    );
}
