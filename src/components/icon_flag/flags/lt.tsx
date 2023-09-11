import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Lt({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                transform="scale(.51314 1.0322)"
            >
                <rect
                    fill="#006a44"
                    height={708.7}
                    rx={0}
                    ry={0}
                    transform="scale(.93865 .69686)"
                    width={1063}
                />
                <rect
                    fill="#c1272d"
                    height={236.2}
                    rx={0}
                    ry={0}
                    transform="scale(.93865 .69686)"
                    width={1063}
                    y={475.6}
                />
                <path
                    d="M0 0h997.8v164.6H0z"
                    fill="#fdb913"
                />
            </g>
        </Box>
    );
}
