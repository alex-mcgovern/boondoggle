import type { StyleRule } from "@vanilla-extract/css";

export function createAccessibleTransition({ ...styleRules }: StyleRule) {
  return {
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        ...styleRules,
      },
    },
  };
}
