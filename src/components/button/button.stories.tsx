import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Button as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";
import { Link } from "../../../test/link.component.mock";
import { Box } from "../box";
import { Icon } from "../icon";
import { Loader } from "../loader";

import type { ButtonProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default { title: "React components/Button", component: StoryComponent };
const Template: StoryFn<StoryComponentProps> = ({
  children,
  name,
  ...rest
}: StoryComponentProps) => {
  return (
    <StoryComponent name={name} {...rest}>
      {children}
    </StoryComponent>
  );
};

const TemplateAllAppearances: StoryFn<StoryComponentProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing3">
      <StoryComponent appearance="primary" name="primary" {...rest}>
        Primary
      </StoryComponent>
      <StoryComponent appearance="secondary" name="secondary" {...rest}>
        Secondary
      </StoryComponent>
      <StoryComponent appearance="tertiary" name="tertiary" {...rest}>
        Tertiary
      </StoryComponent>
    </Box>
  );
};

// const TemplateAllSizes: StoryFn<StoryComponentProps> = (rest) => {
//   return (
//     <Box display="flex" gap="spacing3">
//       <StoryComponent size="sm" name="primary" {...rest}>
//         Small
//       </StoryComponent>
//       <StoryComponent size="md" name="secondary" {...rest}>
//         Medium
//       </StoryComponent>
//       <StoryComponent size="lg" name="tertiary" {...rest}>
//         Large
//       </StoryComponent>
//     </Box>
//   );
// };

/**
 * Default
 */

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Click me",
  },
  decorators: [WithDarkLightMode],
};

/**
 * Polymorphism examples
 */

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

/**
 * Appearance
 */

export const Appearance: StoryObj<StoryComponentProps> = {
  render: TemplateAllAppearances,
  name: "appearance",
};

/**
 * Color
 */

export const IntentGood: StoryObj<StoryComponentProps> = {
  render: TemplateAllAppearances,
  name: "intent/good",
  args: { intent: "good" },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithDarkLightMode],
};
export const IntentBad: StoryObj<StoryComponentProps> = {
  render: TemplateAllAppearances,
  name: "intent/bad",
  args: { intent: "bad" },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithDarkLightMode],
};

/**
 * Customisation examples
 */

export const CustomisationMargin: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "customisation/margin",
  args: { margin: "spacing5", children: "Click me" },
};

/**
 * Size
 */

export const SizeSm: StoryObj<StoryComponentProps> = {
  name: "size/sm",
  render: Template,
  args: { size: "sm", children: "Small" },
};
export const SizeMd: StoryObj<StoryComponentProps> = {
  name: "size/md",
  render: Template,
  args: { size: "md", children: "Medium" },
};
export const SizeLg: StoryObj<StoryComponentProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "lg", children: "Large" },
};
export const SizeSquare: StoryObj<StoryComponentProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "square", slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};

/**
 * Slot props
 */

export const SlotLeftIcon: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "slotLeft/icon",
  args: {
    children: "Click me",
    slotLeft: <Icon icon={faTriangleCircleSquare} />,
  },
};
export const SlotRightLoader: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "slotRight/loader",
  args: { children: "Click me", slotRight: <Loader /> },
};

/**
 * State
 */

export const StateHover: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
  args: { children: "Hover" },
};
export const StateFocusVisible: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
  args: { children: "Hover" },
};
export const StateDisabled: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/disabled",
  args: { disabled: true, children: "Disabled" },
};
