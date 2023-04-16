import { Dialog as StoryComponent } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Button } from "../../button";

import type { DialogProps as StoryComponentProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Dialog",
  component: StoryComponent,
};

const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} />;
};

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  args: {
    triggerNode: <Button name="Dialog button">Open dialog</Button>,
    children: LOREM.textXxl,
    title: LOREM.textXxs,
  },
};
