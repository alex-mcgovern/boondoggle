import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagNc({ height = "space_8", width = "space_8", ...rest }: SprinklesArgs) {
    return (
        <Box
            as="svg"
            className={clsx(flagStyles, getSprinkles({ height, width, ...rest }))}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M0 0h512v512H0z"
                fill="#009543"
            />
            <path
                d="M0 0h512v341.3H0z"
                fill="#ed4135"
            />
            <path
                d="M0 0h512v170.7H0z"
                fill="#0035ad"
            />
            <circle
                cx={225.6}
                cy={256}
                fill="#fae600"
                r={167.8}
                stroke="#000"
                strokeWidth={5.7}
            />
            <path
                d="M197.2 281h56.9m-56.9-42h56.9M225.6 88.6v286.8"
                stroke="#000"
                strokeWidth={6.8}
            />
            <path d="M158 410c68.6 28 132.8 1.8 132.8 1.8s-24.3-26.2-36.7-36.5c-12.1-10-47.8-9.6-60 0-10 8-39.2 37.5-36 34.8z" />
            <ellipse
                cx={225.6}
                cy={333.4}
                rx={18.8}
                ry={27.3}
            />
            <ellipse
                cx={225.6}
                cy={260}
                rx={22.8}
                ry={14.4}
            />
            <circle
                cx={225.6}
                cy={193.4}
                r={22.8}
            />
            <path d="M253 108.7s2 3.2-2.2 10.7c-19.9 35.7-39.7 36.5-43.5 39.5-4.2 3.4-6 3.2-6 3.2.4-3 .6-15.6.8-16.8 3-16.6 28.3-16.4 48-33.5 3-2.7 2.8-3.2 2.8-3.2zm-66.6 76.8s4.5 12.7 5.1 25.6c1.1 20.4 20.7 21 34.1 21v-11.4c-10 0-18.9-1.4-26.1-16.5a130.8 130.8 0 0 0-13.1-18.7zm-.6 165s7.2-9 15.6-29.6a27 27 0 0 1 24.2-17.1v-16c-21.6 0-32 8-33 19.9-2.4 24-6.8 42.7-6.8 42.7zm79.2-165s-4.6 12.7-5.2 25.6c-1.1 20.5-20.7 21-34.1 21v-11.3c10.1 0 18.9-1.5 26.2-16.5 3.8-6.7 8.2-13 13-18.8zm.5 165s-7.1-8.9-15.6-29.6a27 27 0 0 0-24.2-17v-16c21.6 0 32 8 33.1 19.8a351 351 0 0 0 6.7 42.8z" />
        </Box>
    );
}
