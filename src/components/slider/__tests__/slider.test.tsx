/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Slider } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/has_pointer_capture.mock";
import "../../../../test/resize_observer.mock";

import type { SliderProps } from "..";

const PROPS: SliderProps = { name: LOREM.name() };

const renderComponent = ({ ...props }: SliderProps) => {
  return render(<Slider {...props} />);
};

describe("<Slider />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { container } = renderComponent(PROPS);

      expect(container).not.toBeNull();
    });

    it("should match snapshot", () => {
      const { container } = renderComponent(PROPS);

      expect(container).toMatchSnapshot();
    });
  });

  describe("labelling", () => {
    /** RTL doesn't see this element ¯\_(ツ)_/¯ */
    it.skip("should assign name to the hidden input element", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });
      expect(
        (getByRole("textbox", { hidden: true }) as HTMLInputElement).name
      ).toBe(LOREM.name());
    });

    it("should label element correctly", () => {
      const { getByLabelText } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        label: LOREM.label(),
        id: LOREM.id(),
      });

      expect(getByLabelText(LOREM.label())).not.toBeNull();
    });
  });

  describe("setting new value", () => {
    it("should update value when user interacts", async () => {
      const onValueChange = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onValueChange,
      });

      const sliderThumb = getByRole("slider");
      await userEvent.click(sliderThumb);
      await userEvent.keyboard("{arrowright}");

      expect(onValueChange).toBeCalledWith([1]);
    });
  });
});
