import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagBv({
    height = "space_8",
    width = "space_8",
    ...rest
}: Sprinkles) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, sprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <clipPath id="bv_svg__a">
                    <path
                        d="M0 0h512v512H0z"
                        fillOpacity={0.7}
                    />
                </clipPath>
            </defs>
            <g
                clipPath="url(#bv_svg__a)"
                fillRule="evenodd"
                strokeWidth="1pt"
            >
                <path
                    d="M-68 0h699.7v512H-68z"
                    fill="#fff"
                />
                <path
                    d="M-93-77.8h218.7v276.2H-93zM249.4-.6h381v199h-381zM-67.6 320h190.4v190.3H-67.5zm319.6 2.1h378.3v188.2H252z"
                    fill="#d72828"
                />
                <path
                    d="M156.7-25.4H221v535.7h-64.5z"
                    fill="#003897"
                />
                <path
                    d="M-67.5 224.8h697.8v63.5H-67.5z"
                    fill="#003897"
                />
            </g>
        </Box>
    );
}
