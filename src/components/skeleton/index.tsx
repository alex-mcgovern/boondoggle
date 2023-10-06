import clsx from "clsx";

import { Box } from "../box";
import { loadingStyles } from "./styles.css";

import type { BoxProps } from "../box";

export function Skeleton({ className, ...rest }: BoxProps) {
    return (
        <Box
            className={clsx(className, loadingStyles)}
            {...rest}
        />
    );
}
