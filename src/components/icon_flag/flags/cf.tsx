import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagCf({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
            <defs>
                <clipPath id="cf_svg__a">
                    <path
                        d="M0 0h512v512H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#cf_svg__a)"
                fillRule="evenodd"
            >
                <path
                    d="M-52-.5h768v127H-52z"
                    fill="#00f"
                />
                <path
                    d="M-52 383.5h768V512H-52z"
                    fill="#ff0"
                />
                <path
                    d="M-52 255h768v128.5H-52z"
                    fill="#009a00"
                />
                <path
                    d="M-52 126.5h768V255H-52z"
                    fill="#fff"
                />
                <path
                    d="M268 0h128v512H268z"
                    fill="red"
                />
                <path
                    d="M109.5 112.3 75.9 89.1l-33.4 23.4 11.6-39.2-32.5-24.6 40.7-1L75.7 8.8l13.5 38.6 40.8.8L97.6 73"
                    fill="#ff0"
                />
            </g>
        </Box>
    );
}
