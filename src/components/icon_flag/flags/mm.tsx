import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../../dist";

export function Mm({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                d="M0 0h512v512H0z"
                fill="#fecb00"
            />
            <path
                d="M0 170.7h512V512H0z"
                fill="#34b233"
            />
            <path
                d="M0 341.3h512V512H0z"
                fill="#ea2839"
            />
            <path
                d="M312.6 274H199.4L256 85.3Z"
                fill="#fff"
                id="mm_svg__a"
                strokeWidth={188.7}
            />
            <use
                height="100%"
                transform="rotate(-144 256 274)"
                width="100%"
                xlinkHref="#mm_svg__a"
            />
            <use
                height="100%"
                transform="rotate(-72 256 274)"
                width="100%"
                xlinkHref="#mm_svg__a"
            />
            <use
                height="100%"
                transform="rotate(72 256 274)"
                width="100%"
                xlinkHref="#mm_svg__a"
            />
            <use
                height="100%"
                transform="rotate(144 256 274)"
                width="100%"
                xlinkHref="#mm_svg__a"
            />
        </Box>
    );
}
