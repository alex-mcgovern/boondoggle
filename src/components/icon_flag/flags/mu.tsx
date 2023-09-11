import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Mu({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                    d="M0 384h512v128H0z"
                    fill="#009f4d"
                />
                <path
                    d="M0 128h512v128H0z"
                    fill="#151f6d"
                />
                <path
                    d="M0 0h512v128H0z"
                    fill="#ee2737"
                />
                <path
                    d="M0 256h512v128H0z"
                    fill="#ffcd00"
                />
            </g>
        </Box>
    );
}
