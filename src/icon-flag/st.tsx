import clsx from "clsx";

import type { Css } from "../css/index.css";

import { Box } from "../box";
import { css } from "../css/index.css";
import { flagStyles } from "./styles.css";

/**
 * A flag component
 */
export function FlagSt({
    height = "space_8",
    width = "space_8",
    ...rest
}: Css) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, css({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512v512H0z"
                fill="#12ad2b"
            />
            <path
                d="M0 146.3h512v219.4H0z"
                fill="#ffce00"
            />
            <path
                d="M0 0v512l192-256"
                fill="#d21034"
            />
            <g
                id="st_svg__c"
                transform="translate(276.9 261.5) scale(.33167)"
            >
                <g id="st_svg__b">
                    <path
                        d="M0-200V0h100"
                        id="st_svg__a"
                        transform="rotate(18 0 -200)"
                    />
                    <use
                        height="100%"
                        transform="scale(-1 1)"
                        width="100%"
                        xlinkHref="#st_svg__a"
                    />
                </g>
                <use
                    height="100%"
                    transform="rotate(72)"
                    width="100%"
                    xlinkHref="#st_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(144)"
                    width="100%"
                    xlinkHref="#st_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-144)"
                    width="100%"
                    xlinkHref="#st_svg__b"
                />
                <use
                    height="100%"
                    transform="rotate(-72)"
                    width="100%"
                    xlinkHref="#st_svg__b"
                />
            </g>
            <use
                height="100%"
                transform="translate(-550.9)"
                width="100%"
                x={700}
                xlinkHref="#st_svg__c"
            />
        </Box>
    );
}
