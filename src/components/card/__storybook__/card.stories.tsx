import { Card as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { Box } from "../../box";

import type { CardProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Card",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({
  children = "Inner content",
  ...rest
}) => {
  return (
    <StoryComp {...rest}>
      <Box as="h3" fontSize="body_lg" fontWeight="bold">
        {children}
      </Box>
      <Box as="p">{LOREM.textMd}</Box>
    </StoryComp>
  );
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
 * Basic styling examples
 */
export const ExampleBasicSprinkles: StoryObj<StoryCompProps> = {
  name: "example/basic_sprinkles",
  render: Template,
  args: {
    padding: "spacing5",
    children: LOREM.textXxs,
  },
};
