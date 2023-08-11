import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/pro-light-svg-icons";

import { Box, Box as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Link } from "../../../test/link.comp.mock";
import { variantColorOverlay } from "../../styles/theme.css";
import { Icon } from "../icon_comp";

import type { BoxProps as StoryCompProps } from ".";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Box",
};

const Template: StoryFn<StoryCompProps> = ({
  children = "Inner content",
  ...rest
}) => {
  return <StoryComp {...rest}>{children}</StoryComp>;
};

/**
 * Polymorphism examples
 */
export const ExamplePolymorphismListItems: StoryObj<StoryCompProps> = {
  args: {
    as: "ul",
    children: [
      <StoryComp as="li">List item 1</StoryComp>,
      <StoryComp as="li">List item 2</StoryComp>,
      <StoryComp as="li">List item 3</StoryComp>,
    ],
  },
  name: "as/ul_li",
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
 * Basic styling examples
 */
const BASIC_SPRINKLES_PROPS: SprinklesArgs = {
  background: "tint_default",
  border: "border_default",
  borderRadius: "sm",
  padding: "spacing_3",
};

export const ExampleBasicSprinkles: StoryObj<StoryCompProps> = {
  args: {
    ...BASIC_SPRINKLES_PROPS,
    children: LOREM.text_xxs,
  },
  name: "example/basic_sprinkles",
  render: Template,
};

export const ExampleResponsiveSprinkles: StoryObj<StoryCompProps> = {
  args: {
    children: [<Box>Item 1</Box>, <Box>Item 2</Box>, <Box>Item 3</Box>],
    display: "grid",
    gap: "spacing_3",
    gridTemplateColumns: {
      desktop: "3x",
      mobile: "1x",
      tablet: "2x",
    },
  },
  name: "example/responsive_sprinkles",
  render: Template,
};

export const ExampleEscapeHatchStyles: StoryObj<StoryCompProps> = {
  args: {
    __background: "#BA55D330",
    __border: "1px solid #BA55D3",
    __borderRadius: "0.5rem",
    __color: "#BA55D3",
    __fontWeight: "bold",
    __padding: "1.5rem",
    children: LOREM.text_xxs,
  },
  name: "example/escape_hatch_styles",
  render: Template,
};

/**
 * Advanced usage examples
 */
export const BoxAsInfoCard: StoryObj<StoryCompProps> = {
  args: {
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
    children: [
      <StoryComp as="h3" fontSize="body_lg" fontWeight="bold">
        {LOREM.text_xxs}
      </StoryComp>,
      <StoryComp as="p">{LOREM.text_md}</StoryComp>,
    ],
    padding: "spacing_3",
  },
  name: "example/box_as_info_card",
  render: Template,
};

export const BoxAsWarning: StoryObj<StoryCompProps> = {
  args: {
    alignItems: "start",
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
    children: [
      <Icon color="text_low_contrast" icon={faExclamationCircle} size="xl" />,
      <StoryComp>
        <StoryComp
          as="h3"
          color="text_low_contrast"
          fontSize="body_lg"
          fontWeight="bold"
        >
          {LOREM.text_xxs}
        </StoryComp>
        <StoryComp as="p">{LOREM.text_md}</StoryComp>
      </StoryComp>,
    ],
    className: variantColorOverlay.red,
    display: "flex",
    gap: "spacing_3",
    padding: "spacing_3",
  },
  name: "example/box_as_warning",
  render: Template,
};
export const BoxAsConfirmation: StoryObj<StoryCompProps> = {
  args: {
    alignItems: "start",
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
    children: [
      <Icon color="text_low_contrast" icon={faCheckCircle} size="xl" />,
      <StoryComp>
        <StoryComp
          as="h3"
          color="text_low_contrast"
          fontSize="body_lg"
          fontWeight="bold"
        >
          {LOREM.text_xxs}
        </StoryComp>
        <StoryComp as="p" color="text_high_contrast">
          {LOREM.text_md}
        </StoryComp>
      </StoryComp>,
    ],
    className: variantColorOverlay.green,
    display: "flex",
    gap: "spacing_3",
    padding: "spacing_3",
  },
  name: "example/box_as_confirmation",
  render: Template,
};

export const BoxAsGridLayout: StoryObj<StoryCompProps> = {
  args: {
    children: [
      <StoryComp background="tint_default" padding="spacing_3">
        Content 1
      </StoryComp>,
      <StoryComp background="tint_default" padding="spacing_3">
        Content 2
      </StoryComp>,
      <StoryComp background="tint_default" padding="spacing_3">
        Content 3
      </StoryComp>,
    ],
    display: "grid",
    gap: "spacing_3",
    gridTemplateColumns: "3x",
  },
  name: "example/box_as_grid_layout",
  render: Template,
};
