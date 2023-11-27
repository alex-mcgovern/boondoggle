import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../index.css";

const animationLoading = keyframes({
	to: { backgroundPositionX: "-20%" },
});

export const loadingStyles = style({
	animation: `2s ${animationLoading} ease-in-out infinite`,
	background: `linear-gradient(
      100deg,
      ${vars.color.tint_2} 40%,
      ${vars.color.tint_1} 50%,
      ${vars.color.tint_2} 60%
    ) ${vars.color.tint_1}`,
	backgroundColor: vars.color.tint_1,
	backgroundPositionX: "180%",
	backgroundSize: "200% 100%",
});
