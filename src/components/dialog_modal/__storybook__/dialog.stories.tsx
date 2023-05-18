import { DialogModal as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Button } from "../../button";

import type { DialogModalProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/DialogModal",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: `${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl}`,
    title: LOREM.textXxs,
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
  },
  name: "default",
  render: Template,
};
