import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

interface CreateReactTransitionGroupClassnamesArgs {
  transitionedInProps: StyleRule;
  transitionedOutProps: StyleRule;
  transitionBeforeProps?: StyleRule;
  transitionEnteringProps?: StyleRule;
  transitionExitingProps?: StyleRule;
  transitionedProperties: string;
  transitionTiming: string;
  isPositionAbsoluteDuringMotion?: boolean;
}

export function createReactTransitionGroupClassnames({
  transitionedInProps,
  transitionBeforeProps,
  transitionEnteringProps,
  transitionExitingProps,
  transitionedOutProps,
  transitionedProperties,
  transitionTiming,
  isPositionAbsoluteDuringMotion,
}: CreateReactTransitionGroupClassnamesArgs) {
  const enter = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        ...transitionBeforeProps,
        position: isPositionAbsoluteDuringMotion ? "absolute" : undefined,
      },
    },
  });
  const enterActive = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        ...transitionedInProps,
        ...transitionEnteringProps,
        transition: `${transitionTiming} ease`,
        transitionProperty: transitionedProperties,
        position: isPositionAbsoluteDuringMotion ? "absolute" : undefined,
      },
    },
  });
  const enterDone = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {},
    },
  });
  const exit = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        ...transitionedInProps,
      },
    },
  });
  const exitActive = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        ...transitionedOutProps,
        ...transitionExitingProps,
        transition: `${transitionTiming} ease`,

        transitionProperty: transitionedProperties,
      },
    },
  });
  const exitDone = style({
    "@media": {
      "(prefers-reduced-motion: no-preference)": {},
    },
  });

  return { enter, enterActive, enterDone, exit, exitActive, exitDone };
}
