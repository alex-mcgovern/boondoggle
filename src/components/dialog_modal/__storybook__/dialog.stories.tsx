import { DialogModal as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Button } from "../../button";

import type { DialogModalProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/DialogModal",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
    children: `${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl} ${LOREM.textXxl}`,
    title: LOREM.textXxs,
  },
};
