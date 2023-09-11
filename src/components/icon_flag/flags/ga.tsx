import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Ga({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={getSprinkles({
                border: "border_default",
                borderRadius: "50%",
                height,
                width,
                ...rest,
            })}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g fillRule="evenodd">
                <path
                    d="M512 512H0V0h512z"
                    fill="#ffe700"
                />
                <path
                    d="M512 170.7H0V0h512z"
                    fill="#36a100"
                />
                <path
                    d="M512 512H0V341.3h512z"
                    fill="#006dbc"
                />
            </g>
        </Box>
    );
}
