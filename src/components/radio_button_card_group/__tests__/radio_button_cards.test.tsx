/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RadioButtonCardGroup } from "..";
import { RADIO_BUTTON_CARDS_MOCK } from "../__mocks__/radio_button_cards.mock";

import type { RadioButtonCardGroupProps } from "..";

const onChangeMock = jest.fn();

const PROPS: RadioButtonCardGroupProps = {
    id: "test",
    items: RADIO_BUTTON_CARDS_MOCK,
    label: "test",
    name: "test",
    onChange: onChangeMock,
};

const renderComponent = ({ ...props }: RadioButtonCardGroupProps) =>
    render(<RadioButtonCardGroup {...props} />);

describe("<RadioButtonCardGroup />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { container } = renderComponent(PROPS);

            expect(container).not.toBeNull();
        });
    });
});

describe("<RadioButtonCardGroup />", () => {
    describe("On change functionality", () => {
        test("should call onChange when item is selected", async () => {
            const { getAllByRole } = renderComponent(PROPS);

            const firstRadioItem = getAllByRole("radio")[0];

            await userEvent.click(firstRadioItem);

            expect(onChangeMock).toBeCalledWith(RADIO_BUTTON_CARDS_MOCK[0].value);
        });
    });
});
