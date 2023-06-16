import { Tooltip as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { TooltipProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Tooltip",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    tooltipText: LOREM.text_xxs,
  },
  render: Template,
};
export const WithLongText: StoryObj<StoryCompProps> = {
  args: {
    tooltipText: LOREM.text_xl,
  },
  render: Template,
};
