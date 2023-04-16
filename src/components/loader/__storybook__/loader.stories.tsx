import { Loader as StoryComponent } from "..";

import type { LoaderProps as StoryComponentProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Loader",
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
};
