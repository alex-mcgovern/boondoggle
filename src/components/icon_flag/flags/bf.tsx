import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Bf({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                    d="M512 511.6H.5V0H512z"
                    fill="#de0000"
                />
                <path
                    d="M511.8 512H0V256.2h511.7z"
                    fill="#35a100"
                />
            </g>
            <path
                d="m389 223.8-82.9 56.5 31.7 91.6-82.7-56.7-82.8 56.7 31.7-91.6-82.8-56.6 102.3.2 31.6-91.7 31.5 91.6"
                fill="#fff300"
                fillRule="evenodd"
            />
        </Box>
    );
}
