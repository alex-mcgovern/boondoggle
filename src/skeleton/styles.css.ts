import { keyframes, style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { vars } from "../index.css";

const animationLoading = keyframes({
    to: { backgroundPositionX: "-20%" },
});

export const loadingStyles = style([
    css({ transition: "short" }),
    {
        animation: `2s ${animationLoading} ease-in-out infinite`,
        background: `linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, .5) 50%,
      rgba(255, 255, 255, 0) 60%
    ) var(--slate-4)`,
        backgroundColor: "var(--slate-3)",
        backgroundPositionX: "180%",
        backgroundSize: "200% 100%",
    },
]);
