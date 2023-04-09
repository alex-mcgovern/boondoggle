import React from "react";

import { Card as StoryComponent } from ".";
import { Link } from "../../../.storybook/link.component.mock";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";

import type { CardProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "Components/Card",
  component: StoryComponent,
};

const Template: StoryFn<StoryComponentProps> = ({
  children = "Inner content",
  ...rest
}) => {
  return (
    <StoryComponent {...rest}>
      <Box as="h3" fontSize="body_lg" fontWeight="bold">
        {children}
      </Box>
      <Box as="p">{LOREM.title_long}</Box>
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
 * Basic styling examples
 * ------------------------------------------------------------------------------- */

export const ExampleBasicSprinkles: StoryObj<StoryComponentProps> = {
  name: "example/basic_sprinkles",
  render: Template,
  args: {
    padding: "spacing5",
    children: LOREM.title_short,
  },
};
