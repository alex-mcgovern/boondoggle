import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagBe({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path d="M0 0h170.7v512H0z" />
                <path
                    d="M170.7 0h170.6v512H170.7z"
                    fill="#ffd90c"
                />
                <path
                    d="M341.3 0H512v512H341.3z"
                    fill="#f31830"
                />
            </g>
        </Box>
    );
}
