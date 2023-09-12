import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagMa({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M512 0H0v512h512z"
                fill="#c1272d"
            />
            <path
                d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
                fill="none"
                stroke="#006233"
                strokeWidth={12.5}
            />
        </Box>
    );
}
