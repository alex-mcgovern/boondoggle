import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagGr({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 57h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 114h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 171h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 228h512v56.9H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 284.9h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 341.9h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
            <path
                d="M0 398.9h512v57H0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M0 0h284.9v284.9H0z"
                fill="#0d5eaf"
            />
            <g
                fill="#fff"
                fillRule="evenodd"
                strokeWidth={1.3}
            >
                <path d="M114 0h57v284.9h-57z" />
                <path d="M0 114h284.9v57H0z" />
            </g>
            <path
                d="M0 455h512v57H0z"
                fill="#0d5eaf"
                fillRule="evenodd"
            />
        </Box>
    );
}
