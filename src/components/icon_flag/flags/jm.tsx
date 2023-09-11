import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Jm({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                <path d="m0 0 256 256L0 512zm512 0L256 256l256 256z" />
                <path
                    d="m0 0 256 256L512 0zm0 512 256-256 256 256z"
                    fill="#090"
                />
                <path
                    d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z"
                    fill="#fc0"
                />
                <path
                    d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z"
                    fill="#fc0"
                />
            </g>
        </Box>
    );
}
