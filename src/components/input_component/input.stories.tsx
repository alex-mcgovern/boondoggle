import React from "react";
import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import type { ComponentMeta, Story } from "@storybook/react";
import type { InputProps } from ".";
import { Input as StoryComponent } from ".";

export default {
  title: "Components/Input",
  component: StoryComponent,
  argTypes: {
    onFocus: { action: "focused" },
    onClick: { action: "clicked" },
    onBlur: { action: "blur" },
    onMouseEnter: { action: "mouseEnter" },
    onMouseLeave: { action: "mouseLeave" },
    onChange: { action: "change" },
  },
  args: { name: "Test button", placeholder: "Type something" },
} as ComponentMeta<typeof StoryComponent>;

const Template: Story<InputProps> = ({ name, ...rest }) => {
  return <StoryComponent name={name} {...rest} />;
};

/** -----------------------------------------------------------------------------
 * Size variants
 * ------------------------------------------------------------------------------- */

export const SizeSm = Template.bind({});

SizeSm.args = {
  size: "sm",
};

export const SizeMd = Template.bind({});

SizeMd.args = {
  size: "md",
};

export const SizeLg = Template.bind({});

SizeLg.args = {
  size: "lg",
};

/** -----------------------------------------------------------------------------
 *  FontAwesome icons
 * ------------------------------------------------------------------------------- */

export const IconLeft = Template.bind({});

IconLeft.args = {
  iconLeft: faTriangleCircleSquare,
};

export const IconRight = Template.bind({});

IconRight.args = {
  iconRight: faTriangleCircleSquare,
};

/** -----------------------------------------------------------------------------
 *  Accessibility
 * ------------------------------------------------------------------------------- */

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
