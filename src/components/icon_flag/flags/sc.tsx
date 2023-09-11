import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Sc({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
            <path
                d="M0 0h512v512H0Z"
                fill="#fff"
            />
            <path
                d="M0 512V0h512v170.7z"
                fill="#d92223"
            />
            <path
                d="M0 512V0h341.3z"
                fill="#fcd955"
            />
            <path
                d="M0 512V0h170.7z"
                fill="#003d88"
            />
            <path
                d="m0 512 512-170.7V512Z"
                fill="#007a39"
            />
        </Box>
    );
}
