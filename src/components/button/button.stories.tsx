import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Button as StoryComponent } from ".";
import { Link } from "../../../.storybook/link.component.mock";
import { Icon } from "../icon";
import { Loader } from "../loader";

import type { ButtonProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default { title: "Components/Button", component: StoryComponent };
const Template: StoryFn<StoryComponentProps> = ({
  children = "Click me",
  name,
  ...rest
}: StoryComponentProps) => {
  return (
    <StoryComponent name={name} {...rest}>
      {children}
    </StoryComponent>
  );
};

/** -----------------------------------------------------------------------------
 * Polymorphism examples
 * ------------------------------------------------------------------------------- */

export const ExamplePolymorphismGenericAnchorTag: StoryObj<StoryComponentProps> =
  {
    name: "polymorphism/generic_anchor_tag",
    render: Template,
    args: {
      as: "a",
      href: "https://google.com",
      children: "I am an anchor element",
    },
  };

export const ExamplePolymorphismReactComponent: StoryObj<StoryComponentProps> =
  {
    name: "polymorphism/generic_react_component",
    render: Template,
    args: {
      as: Link,
      href: "https://google.com",
      children: "I am a `Link` component",
    },
  };

/** -----------------------------------------------------------------------------
 * Appearance
 * ------------------------------------------------------------------------------- */

export const AppearancePrimary = {
  render: Template,
  name: "appearance/primary",
  args: { appearance: "primary", children: "Primary" },
};
export const AppearanceSecondary = {
  render: Template,
  name: "appearance/secondary",
  args: { appearance: "secondary", children: "Secondary" },
};
export const AppearanceTertiary = {
  render: Template,
  name: "appearance/tertiary",
  args: { appearance: "tertiary", children: "Tertiary" },
};

/** -----------------------------------------------------------------------------
 * Color
 * ------------------------------------------------------------------------------- */

export const ColorAccent = {
  render: Template,
  name: "color/default",
  args: { color: "default", children: "Default" },
};
export const ColorGreen = {
  render: Template,
  name: "color/green",
  args: { color: "green", children: "Green" },
};
export const ColorRed = {
  render: Template,
  name: "color/red",
  args: { color: "red", children: "Red" },
};

/** -----------------------------------------------------------------------------
 * Customisation examples
 * ------------------------------------------------------------------------------- */

export const CustomisationMargin = {
  render: Template,
  name: "customisation/margin",
  args: { margin: "spacing5" },
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

export const SizeSm = {
  name: "size/sm",
  render: Template,
  args: { size: "sm" },
};
export const SizeMd = {
  name: "size/md",
  render: Template,
  args: { size: "md" },
};
export const SizeLg = {
  name: "size/lg",
  render: Template,
  args: { size: "lg" },
};

/** -----------------------------------------------------------------------------
 * Slot props
 * ------------------------------------------------------------------------------- */

export const SlotLeftIcon = {
  render: Template,
  name: "slotLeft/icon",
  args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightIcon = {
  render: Template,
  name: "slotRight/icon",
  args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightLoader = {
  render: Template,
  name: "slotRight/loader",
  args: { slotRight: <Loader /> },
};

/** -----------------------------------------------------------------------------
 * State
 * ------------------------------------------------------------------------------- */

export const StateHover = {
  render: Template,
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
};
export const StateFocusVisible = {
  render: Template,
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
};
export const StateDisabled = {
  render: Template,
  name: "state/disabled",
  args: { disabled: true },
};
