import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Dk({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                d="M0 0h512.1v512H0z"
                fill="#c8102e"
            />
            <path
                d="M144 0h73.1v512H144z"
                fill="#fff"
            />
            <path
                d="M0 219.4h512.1v73.2H0z"
                fill="#fff"
            />
        </Box>
    );
}
