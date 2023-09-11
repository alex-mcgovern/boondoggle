import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Eh({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
            <path d="M0 0h512v256H0z" />
            <path
                d="M0 256h512v256H0z"
                fill="#007a3d"
            />
            <path
                d="M0 149.3h512v213.3H0z"
                fill="#fff"
            />
            <path
                d="m0 0 256 256L0 512Z"
                fill="#c4111b"
            />
            <g
                strokeWidth={1.7}
                transform="translate(-135 -6.5) scale(1.02539)"
            >
                <circle
                    cx={512}
                    cy={256}
                    fill="#c4111b"
                    r={68.3}
                />
                <circle
                    cx={537.6}
                    cy={256}
                    fill="#fff"
                    r={68.3}
                />
                <path
                    d="m493.7 297.3 29-20.8 29 21.2-10.8-34.2 29-21-35.8-.2-11-34-11.3 33.9-35.7-.1 28.7 21.2-11.1 34z"
                    fill="#c4111b"
                />
            </g>
        </Box>
    );
}
