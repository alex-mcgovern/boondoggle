import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

export function FlagVc({
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
                    d="M0 0h510.4v512H0z"
                    fill="#f4f100"
                />
                <path
                    d="M385.6 0H512v512H385.6z"
                    fill="#199a00"
                />
                <path
                    d="M0 0h126.4v512H0z"
                    fill="#0058aa"
                />
            </g>
            <path
                d="m191.2 138.6-49.5 76.2 47.8 79.3 46.7-78.6-45-76.9zm129.4 0L271 214.8l47.7 79.3 46.8-78.6-45-76.9zm-65.4 103.9-49.4 76.1 47.7 79.4 46.7-78.7-45-76.8z"
                fill="#199a00"
                fillRule="evenodd"
            />
        </Box>
    );
}
