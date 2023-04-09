/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { Button } from "../button.component";

import type { ButtonProps } from "../button.component";

afterEach(cleanup);

/**
 * RENDERS FONTAWESOME ICONS
 */

describe("Renders Fontawesome icons", () => {
  test("When a leading icon is provided, should render an button with this adornment", () => {
    const { getByRole } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        slotLeft={faSearch}
        color="accent"
      />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });

  test("When an trailing icon is provided, should render an button with this adornment", () => {
    const { getByRole } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        slotRight={faSearch}
        color="accent"
      />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });
});
