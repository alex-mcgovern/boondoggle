/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RadioButtonCards } from "..";
import { RADIO_BUTTON_CARDS_MOCK } from "../__mocks__";

import type { RadioButtonCardsProps } from "..";

const onChangeMock = jest.fn();

const PROPS: RadioButtonCardsProps = {
  items: RADIO_BUTTON_CARDS_MOCK,
  name: "test",
  onChange: onChangeMock,
};

const renderComponent = ({ ...props }: RadioButtonCardsProps) => {
  return render(<RadioButtonCards {...props} />);
};

describe("<RadioButtonCards />", () => {
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
});

/** --------------------------------------------- */

describe("<RadioButtonCards />", () => {
  describe("On change functionality", () => {
    it("should call onChange when item is selected", async () => {
      const { getByRole } = renderComponent(PROPS);

      const firstRadioItem = getByRole("radio", {
        name: `${RADIO_BUTTON_CARDS_MOCK[0].title} ${RADIO_BUTTON_CARDS_MOCK[0].body}`,
      });

      await userEvent.click(firstRadioItem);

      expect(onChangeMock).toBeCalledWith(RADIO_BUTTON_CARDS_MOCK[0].value);
    });
  });
});
