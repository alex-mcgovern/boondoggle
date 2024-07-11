/* eslint-disable perfectionist/sort-objects */
/* eslint-disable jsdoc/require-jsdoc */
import { converter, formatHex } from "culori";
import { type CSSProperties, type ReactNode, useMemo } from "react";

const makeTheme = (brandColor: string) => {
    const oklch = converter("oklch");
    const { h } = oklch(brandColor) || {};

    // prettier-ignore
    return {
        "--brand-1":    formatHex({mode: "oklch",       h, l: 0.9912000000000001,     c: 0.004 }),
        "--brand-2":    formatHex({mode: "oklch",       h, l: 0.9834,                 c: 0.008553640542686586 }),
        "--brand-3":    formatHex({mode: "oklch",       h, l: 0.9605,                 c: 0.02 }),
        "--brand-4":    formatHex({mode: "oklch",       h, l: 0.9396,                 c: 0.03396919049441918 }),
        "--brand-5":    formatHex({mode: "oklch",       h, l: 0.9039,                 c: 0.05159523642953761 }),
        "--brand-6":    formatHex({mode: "oklch",       h, l: 0.8622,                 c: 0.069 }),
        "--brand-7":    formatHex({mode: "oklch",       h, l: 0.8074,                 c: 0.089 }),
        "--brand-8":    formatHex({mode: "oklch",       h, l: 0.7297,                 c: 0.123 }),
        "--brand-9":    formatHex({mode: "oklch",       h, l: 0.6504000000000001,     c: 0.19250535866368496 }),
        "--brand-10":   formatHex({mode: "oklch",       h, l: 0.6182,                 c: 0.185 }),
        "--brand-11":   formatHex({mode: "oklch",       h, l: 0.556,                  c: 0.162 }),
        "--brand-12":   formatHex({mode: "oklch",       h, l: 0.325,                  c: 0.096 }),
        "--gray-1":     formatHex({mode: "oklch",       h, l: 0.9912000000000001,     c: 0.0015 }),
        "--gray-2":     formatHex({mode: "oklch",       h, l: 0.9823000000000001,     c: 0.0045000000000000005 }),
        "--gray-3":     formatHex({mode: "oklch",       h, l: 0.9584999999999999,     c: 0.006 }),
        "--gray-4":     formatHex({mode: "oklch",       h, l: 0.9339000000000001,     c: 0.0075 }),
        "--gray-5":     formatHex({mode: "oklch",       h, l: 0.9101,                 c: 0.0105 }),
        "--gray-6":     formatHex({mode: "oklch",       h, l: 0.8835,                 c: 0.015 }),
        "--gray-7":     formatHex({mode: "oklch",       h, l: 0.8517,                 c: 0.0165 }),
        "--gray-8":     formatHex({mode: "oklch",       h, l: 0.7931999999999999,     c: 0.0225 }),
        "--gray-9":     formatHex({mode: "oklch",       h, l: 0.6446,                 c: 0.025500000000000002 }),
        "--gray-10":    formatHex({mode: "oklch",       h, l: 0.6138,                 c: 0.021 }),
        "--gray-11":    formatHex({mode: "oklch",       h, l: 0.5023,                 c: 0.021 }),
        "--gray-12":    formatHex({mode: "oklch",       h, l: 0.2458,                 c: 0.015 }),
    };
};

export function ThemeProvider({
    brandColor = "#0091ff",
    children,
}: {
    brandColor: string;
    children: ReactNode;
}) {
    const theme = useMemo(() => {
        return makeTheme(brandColor);
    }, [brandColor]);

    return <div style={theme as CSSProperties}>{children}</div>;
}
