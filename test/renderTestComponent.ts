import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cloneElement } from "react";

import type { JSXElementConstructor, ReactElement } from "react";

export const renderTestComponent = <TComponentProps>(
  Component: ReactElement<JSXElementConstructor<TComponentProps>>
) => {
  const user = userEvent.setup();

  const { props } = Component;

  const propertiesWithTestId = {
    ...props,
    "data-testid": "tested-component",
  };

  const result = render(cloneElement(Component, propertiesWithTestId));

  const component = screen.queryByTestId("tested-component");

  return {
    ...result,
    user,
    component: component && component,
  };
};
