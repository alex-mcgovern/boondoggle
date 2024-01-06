import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagTd({
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
