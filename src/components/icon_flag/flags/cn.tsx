import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagCn({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
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
                <path
                    d="M1-.3-.7.8 0-1 .6.8-1-.3z"
                    fill="#ff0"
                    id="cn_svg__a"
                />
            </defs>
            <path
                d="M0 0h512v512H0z"
                fill="#ee1c25"
            />
            <use
                height={20}
                transform="matrix(76.8 0 0 76.8 128 128)"
                width={30}
                xlinkHref="#cn_svg__a"
            />
            <use
                height={20}
                transform="rotate(-121 142.6 -47) scale(25.5827)"
                width={30}
                xlinkHref="#cn_svg__a"
            />
            <use
                height={20}
                transform="rotate(-98.1 198 -82) scale(25.6)"
                width={30}
                xlinkHref="#cn_svg__a"
            />
            <use
                height={20}
                transform="rotate(-74 272.4 -114) scale(25.6137)"
                width={30}
                xlinkHref="#cn_svg__a"
            />
            <use
                height={20}
                transform="matrix(16 -19.968 19.968 16 256 230.4)"
                width={30}
                xlinkHref="#cn_svg__a"
            />
        </Box>
    );
}
