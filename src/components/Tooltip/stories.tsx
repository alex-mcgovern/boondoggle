import { Tooltip as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { TooltipProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

/** ----------------------------------------------------------------------------- */

export default {
  component: StoryComp,
  title: "Components/Tooltip",
};

/** ----------------------------------------------------------------------------- */

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

/** ----------------------------------------------------------------------------- */

export const Default: StoryObj<StoryCompProps> = {
  args: {
    tooltipText: LOREM.text_xxs,
  },
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const WithLongText: StoryObj<StoryCompProps> = {
  args: {
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const PlacementBottomTopStart: StoryObj<StoryCompProps> = {
  args: {
    placement: "top-start",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

export const PlacementBottomTopCenter: StoryObj<StoryCompProps> = {
  args: {
    placement: "top-center",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

export const PlacementBottomTopEnd: StoryObj<StoryCompProps> = {
  args: {
    placement: "top-end",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

export const PlacementBottomStart: StoryObj<StoryCompProps> = {
  args: {
    placement: "bottom-start",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

export const PlacementBottomCenter: StoryObj<StoryCompProps> = {
  args: {
    placement: "bottom-center",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};

export const PlacementBottomEnd: StoryObj<StoryCompProps> = {
  args: {
    placement: "bottom-end",
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};
