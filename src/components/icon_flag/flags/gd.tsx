import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagGd({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <g id="gd_svg__c">
                    <g id="gd_svg__b">
                        <path
                            d="M0-1v1h.5"
                            fill="#fcd116"
                            id="gd_svg__a"
                            transform="rotate(18 0 -1)"
                        />
                        <use
                            height="100%"
                            transform="scale(-1 1)"
                            width="100%"
                            xlinkHref="#gd_svg__a"
                        />
                    </g>
                    <use
                        height="100%"
                        transform="rotate(72)"
                        width="100%"
                        xlinkHref="#gd_svg__b"
                    />
                    <use
                        height="100%"
                        transform="rotate(144)"
                        width="100%"
                        xlinkHref="#gd_svg__b"
                    />
                    <use
                        height="100%"
                        transform="rotate(-144)"
                        width="100%"
                        xlinkHref="#gd_svg__b"
                    />
                    <use
                        height="100%"
                        transform="rotate(-72)"
                        width="100%"
                        xlinkHref="#gd_svg__b"
                    />
                </g>
            </defs>
            <path
                d="M0 0h512v512H0z"
                fill="#ce1126"
            />
            <path
                d="M71.7 71.7h368.6v368.6H71.7z"
                fill="#007a5e"
            />
            <path
                d="M71.7 71.7h368.6L71.7 440.4h368.6z"
                fill="#fcd116"
            />
            <circle
                cx={255.9}
                cy={256.1}
                fill="#ce1126"
                r={61.4}
            />
            <use
                height="100%"
                transform="translate(256 256) scale(56.32)"
                width="100%"
                xlinkHref="#gd_svg__c"
            />
            <use
                height="100%"
                transform="translate(-16.4 -.1)"
                width="100%"
                x={-100}
                xlinkHref="#gd_svg__d"
            />
            <use
                height="100%"
                id="gd_svg__d"
                transform="translate(256 35.9) scale(33.28)"
                width="100%"
                xlinkHref="#gd_svg__c"
            />
            <use
                height="100%"
                transform="translate(16.4)"
                width="100%"
                x={100}
                xlinkHref="#gd_svg__d"
            />
            <path
                d="M99.8 256.8c7.7 14.3 22.6 29.8 35.7 35.3.2-14.5-5-33.2-12-48l-23.7 12.7z"
                fill="#ce1126"
            />
            <path
                d="M86.8 207.6c11.1 23.3-29 78.7 37.8 91.7a67.5 67.5 0 0 1-11.5-44.7 75.5 75.5 0 0 1 34.6 32.8c17.5-63.4-44.8-59.5-61-79.8z"
                fill="#fcd116"
            />
            <use
                height="100%"
                transform="translate(-16.4 442)"
                width="100%"
                x={-100}
                xlinkHref="#gd_svg__d"
            />
            <use
                height="100%"
                transform="translate(256 478) scale(33.28)"
                width="100%"
                xlinkHref="#gd_svg__c"
            />
            <use
                height="100%"
                transform="translate(16.4 442.2)"
                width="100%"
                x={100}
                xlinkHref="#gd_svg__d"
            />
        </Box>
    );
}
