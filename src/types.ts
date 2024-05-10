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
            compactDisplay?: "long" | "short";
            currencyDisplay?: string;
            currencySign?: string;
            notation?: "compact" | "engineering" | "scientific" | "standard";
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
                | 5000;
            roundingMode?:
                | "ceil"
                | "expand"
                | "floor"
                | "halfCeil"
                | "halfEven"
                | "halfExpand"
                | "halfFloor"
                | "halfTrunc"
                | "trunc";
            roundingPriority?: "auto" | "lessPrecision" | "morePrecision";
            signDisplay?: "always" | "auto" | "exceptZero" | "never";
            trailingZeroDisplay?: "auto" | "lessPrecision" | "stripIfInteger";
            unit?: string;
            unitDisplay?: "long" | "narrow" | "short";
        }
    }
}
