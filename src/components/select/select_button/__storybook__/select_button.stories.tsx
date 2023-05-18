/* eslint-disable import/no-extraneous-dependencies */
import { SelectButton as StoryComp } from "../..";
import { LOREM } from "../../../../../mocks/LOREM.mock";
import { Box } from "../../../box";
import { mockSelectItems } from "../../__mocks__/select.mock";

import type { SelectButtonProps as StoryCompProps } from "../..";
import type { StoryFn, StoryObj } from "@storybook/react";

const ITEMS = mockSelectItems({});

const PROPS: StoryCompProps = {
  buttonText: LOREM.button,
  id: LOREM.id(),
  items: ITEMS,
  name: LOREM.name(),
  onChange: (changes) => {
    alert(JSON.stringify(changes));
  },
};

export default {
  component: StoryComp,
  title: "React components/SelectButton",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return <StoryComp {...rest} />;
};

const PlacementTemplate: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return (
    <Box display="flex" width="50%">
      <Box marginLeft="auto">
        <StoryComp {...rest} />
      </Box>
    </Box>
  );
};

export const Default: StoryObj<StoryCompProps> = {
  args: PROPS,
  render: Template,
};

export const Customisation: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    wrapperProps: { marginBottom: "spacing3" },
  },
};

export const Disabled: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    disabled: true,
  },
  render: Template,
};

export const SlotLeft: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    items: mockSelectItems({ withIcon: true }),
  },
  render: Template,
};

export const PlacementBottomEnd: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonText: "",
    placement: "bottom-end",
  },
  render: PlacementTemplate,
};

export const PlacementBottomCenter: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonText: "",
    placement: "bottom-center",
  },
  render: PlacementTemplate,
};

export const ButtonProps: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonProps: {
      appearance: "tertiary",
      size: "sm",
    },
  },
  render: Template,
};
