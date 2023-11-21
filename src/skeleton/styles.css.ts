import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../index.css";

const animationLoading = keyframes({
	to: { backgroundPositionX: "-20%" },
});

export const loadingStyles = style({
	animation: `2s ${animationLoading} ease-in-out infinite`,
	background: `linear-gradient(
      100deg,
      ${vars.color.tint_hover} 40%,
      ${vars.color.tint_active} 50%,
      ${vars.color.tint_hover} 60%
    ) ${vars.color.tint_default}`,
	backgroundColor: vars.color.tint_default,
	backgroundPositionX: "180%",
	backgroundSize: "200% 100%",
});
