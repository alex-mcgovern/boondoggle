import { keyframes, style } from "@vanilla-extract/css";

import { v } from "../../style.css";

const animationLoading = keyframes({
	to: { backgroundPositionX: "-20%" },
});

export const loadingStyles = style({
	animation: `2s ${animationLoading} ease-in-out infinite`,
	background: `linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, .5) 50%,
      rgba(255, 255, 255, 0) 60%
    ) ${v.color.tint_active}`,
	backgroundColor: v.color.tint_default,
	backgroundPositionX: "180%",
	backgroundSize: "200% 100%",
});
