import { Label as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { LabelProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "Components/Label",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    label: LOREM.textXxs,
  },
};
