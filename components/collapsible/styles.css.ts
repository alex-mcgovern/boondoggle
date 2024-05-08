import { keyframes, style } from "@vanilla-extract/css";

const open = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
    from: { height: "var(--radix-collapsible-content-height)" },
    to: { height: 0 },
});

export const collapsibleContentAnimation = style({
    overflow: "hidden",
    selectors: {
        '&[data-state="closed"]': {
            animation: `${close} var(--dur-medium) var(--ease-quart-in-out) forwards`,
        },
        '&[data-state="open"]': {
            animation: `${open} var(--dur-medium) var(--ease-quart-in-out) forwards`,
        },
    },
});
