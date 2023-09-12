import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagTd({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
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
