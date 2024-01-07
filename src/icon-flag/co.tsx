import clsx from "clsx";

import { Box } from "../box";
import { type Css, css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagCo({
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h512v512H0z"
                    fill="#ffe800"
                />
                <path
                    d="M0 256h512v256H0z"
                    fill="#00148e"
                />
                <path
                    d="M0 384h512v128H0z"
                    fill="#da0010"
                />
            </g>
        </Box>
    );
}
