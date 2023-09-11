import { Suspense, lazy } from "react";

import { Box } from "../box";

import type { BoxProps } from "../box";

type IconFlagProps = {
    code: string;
} & BoxProps;

export function IconFlag({
    __height = 64,
    __width = 64,
    border = "border_default",
    borderRadius = "50%",
    code,
    ...rest
}: IconFlagProps) {
    const Component = lazy(() => {
        return import(`./flags/dist/${code}.tsx`);
    });

    return (
        <Suspense
            fallback={
                // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
                <Box
                    __height={__height}
                    __width={__width}
                    background="tint_default"
                    border={border}
                    borderRadius={borderRadius}
                    {...rest}
                />
            }
        >
            <Box
                __height={__height}
                __width={__width}
                as={Component}
                background="tint_default"
                border={border}
                borderRadius={borderRadius}
                {...rest}
            />
        </Suspense>
    );
}
