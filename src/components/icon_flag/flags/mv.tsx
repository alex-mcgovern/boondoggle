import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagMv({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512v512H0z"
                fill="#d21034"
            />
            <path
                d="M128 128h256v256H128z"
                fill="#007e3a"
            />
            <circle
                cx={288}
                cy={256}
                fill="#fff"
                r={85.3}
            />
            <ellipse
                cx={308.6}
                cy={256}
                fill="#007e3a"
                rx={73.9}
                ry={85.3}
            />
        </Box>
    );
}
