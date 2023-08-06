import { faTriangleCircleSquare } from "@fortawesome/pro-light-svg-icons";

import { Button as StoryComp } from "..";
import { Link } from "../../../../test/link.comp.mock";
import { Box } from "../../core.box";
import { Icon } from "../../decorative.icon";
import { Loader } from "../../decorative.loader";

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
      <StoryComp {...rest} appearance="primary" name="primary">
        Primary
      </StoryComp>
      <StoryComp {...rest} appearance="secondary" name="secondary">
        Secondary
      </StoryComp>
      <StoryComp {...rest} appearance="tertiary" name="tertiary">
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

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

const TemplateSizes: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        id="lg"
        name="lg"
        size="lg"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="md"
        name="md"
        size="md"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="sm"
        name="sm"
        size="sm"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="square_md"
        name="square_md"
        size="square_md"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        id="square_sm"
        name="square_sm"
        size="square_sm"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
    </Box>
  );
};

export const Sizes: StoryObj<typeof meta> = {
  name: "Sizes",
  render: TemplateSizes,
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
