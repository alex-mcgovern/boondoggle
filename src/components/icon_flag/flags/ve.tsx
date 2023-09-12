import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagVe({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <g
                    id="ve_svg__d"
                    transform="translate(0 -36)"
                >
                    <g id="ve_svg__c">
                        <g id="ve_svg__b">
                            <path
                                d="M0-5-1.5-.2l2.8.9z"
                                fill="#fff"
                                id="ve_svg__a"
                            />
                            <use
                                height={120}
                                transform="scale(-1 1)"
                                width={180}
                                xlinkHref="#ve_svg__a"
                            />
                        </g>
                        <use
                            height={120}
                            transform="rotate(72)"
                            width={180}
                            xlinkHref="#ve_svg__b"
                        />
                    </g>
                    <use
                        height={120}
                        transform="rotate(-72)"
                        width={180}
                        xlinkHref="#ve_svg__b"
                    />
                    <use
                        height={120}
                        transform="rotate(144)"
                        width={180}
                        xlinkHref="#ve_svg__c"
                    />
                </g>
            </defs>
            <path
                d="M0 0h512v512H0z"
                fill="#cf142b"
            />
            <path
                d="M0 0h512v341.3H0z"
                fill="#00247d"
            />
            <path
                d="M0 0h512v170.7H0z"
                fill="#fc0"
            />
            <g
                id="ve_svg__f"
                transform="translate(256.3 358.4) scale(4.265)"
            >
                <g id="ve_svg__e">
                    <use
                        height={120}
                        transform="rotate(10)"
                        width={180}
                        xlinkHref="#ve_svg__d"
                    />
                    <use
                        height={120}
                        transform="rotate(30)"
                        width={180}
                        xlinkHref="#ve_svg__d"
                    />
                </g>
                <use
                    height={120}
                    transform="rotate(40)"
                    width={180}
                    xlinkHref="#ve_svg__e"
                />
            </g>
            <use
                height={120}
                transform="rotate(-80 256.3 358.4)"
                width={180}
                xlinkHref="#ve_svg__f"
            />
        </Box>
    );
}
