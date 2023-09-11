import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Mg({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
            <g
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M170.7 0H512v256H170.7z"
                    fill="#fc3d32"
                />
                <path
                    d="M170.7 256H512v256H170.7z"
                    fill="#007e3a"
                />
                <path
                    d="M0 0h170.7v512H0z"
                    fill="#fff"
                />
            </g>
        </Box>
    );
}
