import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Box, Box as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { getTheme } from "../../../styles/theme.css";
import { Icon } from "../../icon";

import type { BoxProps as StoryCompProps } from "..";
import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Box",
  component: StoryComp,
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
  name: "as/ul_li",
  render: Template,
  args: {
    as: "ul",
    children: [
      <StoryComp as="li">List item 1</StoryComp>,
      <StoryComp as="li">List item 2</StoryComp>,
      <StoryComp as="li">List item 3</StoryComp>,
    ],
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
 * Basic styling examples
 */
const BASIC_SPRINKLES_PROPS: SprinklesArgs = {
  padding: "spacing3",
  border: "border_default",
  borderRadius: "sm",
  background: "tint_default",
};

export const ExampleBasicSprinkles: StoryObj<StoryCompProps> = {
  name: "example/basic_sprinkles",
  render: Template,
  args: {
    ...BASIC_SPRINKLES_PROPS,
    children: LOREM.textXxs,
  },
};

export const ExampleResponsiveSprinkles: StoryObj<StoryCompProps> = {
  name: "example/responsive_sprinkles",
  render: Template,
  args: {
    display: "grid",
    gap: "spacing3",
    gridTemplateColumns: {
      mobile: "1x",
      tablet: "2x",
      desktop: "3x",
    },
    children: [<Box>Item 1</Box>, <Box>Item 2</Box>, <Box>Item 3</Box>],
  },
};

export const ExampleEscapeHatchStyles: StoryObj<StoryCompProps> = {
  name: "example/escape_hatch_styles",
  render: Template,
  args: {
    __padding: "1.5rem",
    __border: "1px solid #BA55D3",
    __color: "#BA55D3",
    __borderRadius: "0.5rem",
    __background: "#BA55D330",
    __fontWeight: "bold",
    children: LOREM.textXxs,
  },
};

/**
 * Advanced usage examples
 */
export const BoxAsInfoCard: StoryObj<StoryCompProps> = {
  name: "example/box_as_info_card",
  render: Template,
  args: {
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
    padding: "spacing3",
    children: [
      <StoryComp as="h3" fontSize="body_lg" fontWeight="bold">
        {LOREM.textXxs}
      </StoryComp>,
      <StoryComp as="p">{LOREM.textMd}</StoryComp>,
    ],
  },
};

export const BoxAsWarning: StoryObj<StoryCompProps> = {
  name: "example/box_as_warning",
  render: Template,
  args: {
    borderRadius: "sm",
    border: "border_default",
    display: "flex",
    alignItems: "start",
    padding: "spacing3",
    gap: "spacing3",
    background: "tint_default",
    className: getTheme({ intent: "bad" }),
    children: [
      <Icon size="xl" icon={faExclamationCircle} color="text_low_contrast" />,
      <StoryComp>
        <StoryComp
          as="h3"
          fontSize="body_lg"
          fontWeight="bold"
          color="text_low_contrast"
        >
          {LOREM.textXxs}
        </StoryComp>
        <StoryComp as="p">{LOREM.textMd}</StoryComp>
      </StoryComp>,
    ],
  },
};
export const BoxAsConfirmation: StoryObj<StoryCompProps> = {
  name: "example/box_as_confirmation",
  render: Template,
  args: {
    borderRadius: "sm",
    border: "border_default",
    display: "flex",
    alignItems: "start",
    padding: "spacing3",
    gap: "spacing3",
    background: "tint_default",
    className: getTheme({ intent: "good" }),
    children: [
      <Icon size="xl" icon={faCheckCircle} color="text_low_contrast" />,
      <StoryComp>
        <StoryComp
          as="h3"
          fontSize="body_lg"
          fontWeight="bold"
          color="text_low_contrast"
        >
          {LOREM.textXxs}
        </StoryComp>
        <StoryComp as="p" color="text_high_contrast">
          {LOREM.textMd}
        </StoryComp>
      </StoryComp>,
    ],
  },
};

export const BoxAsGridLayout: StoryObj<StoryCompProps> = {
  name: "example/box_as_grid_layout",
  render: Template,
  args: {
    display: "grid",
    gridTemplateColumns: "3x",
    gap: "spacing3",
    children: [
      <StoryComp background="tint_default" padding="spacing3">
        Content 1
      </StoryComp>,
      <StoryComp background="tint_default" padding="spacing3">
        Content 2
      </StoryComp>,
      <StoryComp background="tint_default" padding="spacing3">
        Content 3
      </StoryComp>,
    ],
  },
};
