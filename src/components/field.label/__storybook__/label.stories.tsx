import { Label as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { LabelProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Label",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    label: LOREM.text_xxs,
  },
  name: "default",
  render: Template,
};
