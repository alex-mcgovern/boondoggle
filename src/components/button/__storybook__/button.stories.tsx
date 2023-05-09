import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";

import { Button as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Loader } from "../../loader";

import type { ButtonProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: StoryComp,
};
const Template: StoryFn<StoryCompProps> = ({
  children,
  name,
  ...rest
}: StoryCompProps) => {
  return (
    <StoryComp name={name} {...rest}>
      {children}
    </StoryComp>
  );
};

const TemplateAllAppearances: StoryFn<StoryCompProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing3">
      <StoryComp appearance="primary" name="primary" {...rest}>
        Primary
      </StoryComp>
      <StoryComp appearance="secondary" name="secondary" {...rest}>
        Secondary
      </StoryComp>
      <StoryComp appearance="tertiary" name="tertiary" {...rest}>
        Tertiary
      </StoryComp>
    </Box>
  );
};

/**
 * Default
 */
export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",

  args: {
    children: "Click me",
  },
};

/**
 * Polymorphism examples
 */
export const ExamplePolymorphismGenericAnchorTag: StoryObj<StoryCompProps> = {
  name: "polymorphism/generic_anchor_tag",
  render: Template,
  args: {
    as: "a",
    href: "https://google.com",
    children: "I am an anchor element",
  },
};

export const ExamplePolymorphismReactComponent: StoryObj<StoryCompProps> = {
  name: "polymorphism/generic_react_component",
  render: Template,
  args: {
    as: Link,
    href: "https://google.com",
    children: "I am a `Link` component",
  },
};

/**
 * Appearance
 */
export const Appearance: StoryObj<StoryCompProps> = {
  render: TemplateAllAppearances,
  name: "appearance",
};

/**
 * Color
 */
export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  render: TemplateAllAppearances,
  name: "colorOverlay/amber",
  args: { colorOverlay: "amber" },
};
export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  render: TemplateAllAppearances,
  name: "colorOverlay/blue",
  args: { colorOverlay: "blue" },
};
export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  render: TemplateAllAppearances,
  name: "colorOverlay/green",
  args: { colorOverlay: "green" },
};
export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  render: TemplateAllAppearances,
  name: "colorOverlay/red",
  args: { colorOverlay: "red" },
};

/**
 * Customisation examples
 */
export const CustomisationMargin: StoryObj<StoryCompProps> = {
  render: Template,
  name: "customisation/margin",
  args: { margin: "spacing5", children: "Click me" },
};

/**
 * Size
 */
export const SizeSm: StoryObj<StoryCompProps> = {
  name: "size/sm",
  render: Template,
  args: { size: "sm", children: LOREM.button },
};
export const SizeMd: StoryObj<StoryCompProps> = {
  name: "size/md",
  render: Template,
  args: { size: "md", children: LOREM.button },
};
export const SizeLg: StoryObj<StoryCompProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "lg", children: LOREM.button },
};
export const SizeSquare: StoryObj<StoryCompProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "square", slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};

/**
 * Slot props
 */
export const SlotLeftIcon: StoryObj<StoryCompProps> = {
  render: Template,
  name: "slotLeft/icon",
  args: {
    children: "Click me",
    slotLeft: <Icon icon={faTriangleCircleSquare} />,
  },
};
export const SlotRightLoader: StoryObj<StoryCompProps> = {
  render: Template,
  name: "slotRight/loader",
  args: { children: "Click me", slotRight: <Loader /> },
};

/**
 * State
 */
export const StateHover: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
  args: { children: "Hovered" },
};
export const StateFocusVisible: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
  args: { children: "Focused" },
};
export const StateDisabled: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/disabled",
  args: { disabled: true, children: "Disabled" },
};
