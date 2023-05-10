import { Tooltip as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { TooltipProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React Components/Tooltip",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    tooltipText: LOREM.textXxs,
  },
};
export const WithLongText: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    tooltipText: LOREM.textXxl,
  },
};
