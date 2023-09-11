import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Gm({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                    d="M0 0h512v170.7H0z"
                    fill="red"
                />
                <path
                    d="M0 170.7h512V199H0z"
                    fill="#fff"
                />
                <path
                    d="M0 199.1h512V313H0z"
                    fill="#009"
                />
                <path
                    d="M0 312.9h512v28.4H0z"
                    fill="#fff"
                />
                <path
                    d="M0 341.3h512V512H0z"
                    fill="#090"
                />
            </g>
        </Box>
    );
}
