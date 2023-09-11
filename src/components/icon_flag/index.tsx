import { Suspense } from "react";

import { Box } from "../box";
import * as FLAGS from "./flags";

import type { BoxProps } from "../box";
import type { JSXElementConstructor } from "react";

export type IconFlagProps = {
    code: keyof typeof FLAGS;
} & BoxProps;

export function IconFlag({
    border = "border_default",
    borderRadius = "50%",
    code,
    height = "space_8",
    width = "space_8",
    ...rest
}: IconFlagProps) {
    const Component = FLAGS[code] as JSXElementConstructor<unknown>;
    return (
        <Suspense
            fallback={
                // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
                <Box
                    background="tint_default"
                    border={border}
                    borderRadius={borderRadius}
                    height={height}
                    width={width}
                    {...rest}
                />
            }
        >
            <Box
                as={Component}
                background="tint_default"
                border={border}
                borderRadius={borderRadius}
                height={height}
                width={width}
                {...rest}
            />
        </Suspense>
    );
}
