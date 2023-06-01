import { faTriangleCircleSquare } from "@fortawesome/pro-light-svg-icons";

import { Button as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Loader } from "../../loader";

import type { ButtonProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Button",
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
    <Box display="flex" gap="spacing_3">
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
  args: {
    children: "Click me",
  },
  name: "default",

  render: Template,
};

/**
 * Polymorphism examples
 */
export const ExamplePolymorphismGenericAnchorTag: StoryObj<StoryCompProps> = {
  args: {
    as: "a",
    children: "I am an anchor element",
    href: "https://google.com",
  },
  name: "polymorphism/generic_anchor_tag",
  render: Template,
};

export const ExamplePolymorphismReactComponent: StoryObj<StoryCompProps> = {
  args: {
    as: Link,
    children: "I am a `Link` component",
    href: "https://google.com",
  },
  name: "polymorphism/generic_react_component",
  render: Template,
};

/**
 * Appearance
 */
export const Appearance: StoryObj<StoryCompProps> = {
  name: "appearance",
  render: TemplateAllAppearances,
};

/**
 * Color
 */
export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  args: { colorOverlay: "amber" },
  name: "colorOverlay/amber",
  render: TemplateAllAppearances,
};
export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  args: { colorOverlay: "blue" },
  name: "colorOverlay/blue",
  render: TemplateAllAppearances,
};
export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  args: { colorOverlay: "green" },
  name: "colorOverlay/green",
  render: TemplateAllAppearances,
};
export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  args: { colorOverlay: "red" },
  name: "colorOverlay/red",
  render: TemplateAllAppearances,
};

/**
 * Customisation examples
 */
export const CustomisationMargin: StoryObj<StoryCompProps> = {
  args: { children: "Click me", margin: "spacing_5" },
  name: "customisation/margin",
  render: Template,
};

/**
 * Size
 */
export const SizeSm: StoryObj<StoryCompProps> = {
  args: { children: LOREM.button, size: "sm" },
  name: "size/sm",
  render: Template,
};
export const SizeMd: StoryObj<StoryCompProps> = {
  args: { children: LOREM.button, size: "md" },
  name: "size/md",
  render: Template,
};
export const SizeLg: StoryObj<StoryCompProps> = {
  args: { children: LOREM.button, size: "lg" },
  name: "size/lg",
  render: Template,
};
export const SizeSquare: StoryObj<StoryCompProps> = {
  args: { size: "square", slotLeft: <Icon icon={faTriangleCircleSquare} /> },
  name: "size/lg",
  render: Template,
};

/**
 * Slot props
 */
export const SlotLeftIcon: StoryObj<StoryCompProps> = {
  args: {
    children: "Click me",
    slotLeft: <Icon icon={faTriangleCircleSquare} />,
  },
  name: "slotLeft/icon",
  render: Template,
};
export const SlotRightLoader: StoryObj<StoryCompProps> = {
  args: { children: "Click me", slotRight: <Loader /> },
  name: "slotRight/loader",
  render: Template,
};

/**
 * State
 */
export const StateHover: StoryObj<StoryCompProps> = {
  args: { children: "Hovered" },
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
  render: Template,
};
export const StateFocusVisible: StoryObj<StoryCompProps> = {
  args: { children: "Focused" },
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
  render: Template,
};
export const StateDisabled: StoryObj<StoryCompProps> = {
  args: { children: "Disabled", disabled: true },
  name: "state/disabled",
  render: Template,
};
