import { Card as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { Box } from "../../box";

import type { CardProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Card",
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
 * Basic styling examples
 */
export const ExampleBasicSprinkles: StoryObj<StoryCompProps> = {
  args: {
    children: LOREM.textXxs,
    padding: "spacing5",
  },
  name: "example/basic_sprinkles",
  render: Template,
};
