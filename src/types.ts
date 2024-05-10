import type * as React from "react";

declare module "react" {
    function forwardRef<T, P = Record<string, unknown>>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Intl {
        interface NumberFormatOptions {
            compactDisplay?: "long" | "short" | undefined;
            currencyDisplay?: string | undefined;
            currencySign?: string | undefined;
            notation?:
                | "compact"
                | "engineering"
                | "scientific"
                | "standard"
                | undefined;
            roundingIncrement?:
                | 1
                | 2
                | 5
                | 10
                | 20
                | 25
                | 50
                | 100
                | 200
                | 250
                | 500
                | 1000
                | 2000
                | 2500
                | 5000
                | undefined;
            roundingMode?:
                | "ceil"
                | "expand"
                | "floor"
                | "halfCeil"
                | "halfEven"
                | "halfExpand"
                | "halfFloor"
                | "halfTrunc"
                | "trunc"
                | undefined;
            roundingPriority?:
                | "auto"
                | "lessPrecision"
                | "morePrecision"
                | undefined;
            signDisplay?:
                | "always"
                | "auto"
                | "exceptZero"
                | "never"
                | undefined;
            trailingZeroDisplay?:
                | "auto"
                | "lessPrecision"
                | "stripIfInteger"
                | undefined;
            unit?: string | undefined;
            unitDisplay?: "long" | "narrow" | "short" | undefined;
        }
    }
}
