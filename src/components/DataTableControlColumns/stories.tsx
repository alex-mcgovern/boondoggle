import { DataTableControlColumns as StoryComp } from ".";

import type { DataTableControlColumnsProps as StoryCompProps } from ".";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  args: {
    columnIdToString: (str: string) => {
      return str;
    },
    columnSelectedString: "column selected",
    columnsSelectedString: "columns selected",
  },
  component: StoryComp,
  title: "Components/DataTableControlColumns",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<StoryCompProps> = ({
  children = "Inner content",
  ...rest
}) => {
  return <StoryComp {...rest}>{children}</StoryComp>;
};

export const Default: Story = {
  render: Template,
};
