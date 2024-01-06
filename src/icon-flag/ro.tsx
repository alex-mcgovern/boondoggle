import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagRo({
    height = "space_8",
    width = "space_8",
    ...rest
}: Sprinkles) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, sprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M0 0h170.7v512H0z"
                    fill="#00319c"
                />
                <path
                    d="M170.7 0h170.6v512H170.7z"
                    fill="#ffde00"
                />
                <path
                    d="M341.3 0H512v512H341.3z"
                    fill="#de2110"
                />
            </g>
        </Box>
    );
}
