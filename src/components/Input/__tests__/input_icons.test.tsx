/** @jest-environment jsdom */
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * RENDERS FONTAWESOME ICONS
 */

describe("Renders Fontawesome icons", () => {
  test("When a leading icon is provided, should render an input with this adornment", () => {
    const { getByRole } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" iconLeading={faSearch} />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });

  test("When an trailing icon is provided, should render an input with this adornment", () => {
    const { getByRole } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" iconTrailing={faSearch} />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });
});
