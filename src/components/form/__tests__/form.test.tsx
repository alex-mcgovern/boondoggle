/**
 * @jest-environment jsdom
 */
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { Form } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import "../../../../test/mocked_dependencies/has_pointer_capture.mock";
import "../../../../test/mocked_dependencies/resize_observer.mock";
import { selectFromSingleSelect } from "../../../../test/select_from_select_single";
import { RADIO_BUTTON_CARDS_MOCK } from "../../radio_button_card_group/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { mockForm } from "../__mocks__/mock_form.mock";

import type { FormProps } from "..";

const handleSubmit = jest.fn();
const handleErrors = jest.fn();

const PROPS: FormProps = mockForm({
    handleErrors,
    handleSubmit,
});

const renderComponent = async ({ ...props }: FormProps) => {
    return waitFor(() => {
        return render(<Form {...props} />);
    });
};

describe("<Form />", () => {
    describe("Basic smoke tests", () => {
        it("should render without throwing", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("form")).not.toBeNull();
        });

        it("should match snapshot", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("form")).toMatchSnapshot();
        });
    });
});

describe("<Form />", () => {
    describe("Renders the correct elements", () => {
        it("should render the email input", async () => {
            const { getByLabelText } = await renderComponent(PROPS);

            expect(getByLabelText(LOREM.labelEmail())).not.toBeNull();
        });

        it("should render the description textarea", async () => {
            const { getByLabelText } = await renderComponent(PROPS);

            expect(getByLabelText(LOREM.labelDescription())).not.toBeNull();
        });

        it("should render the dropdown", async () => {
            const { getByLabelText } = await renderComponent(PROPS);

            expect(getByLabelText(LOREM.labelDropdown(), { selector: "input" })).not.toBeNull();
        });

        it("should render the slider, and an `<input>' component to hold the value", async () => {
            const { getByLabelText } = await renderComponent(PROPS);

            expect(getByLabelText(LOREM.labelSlider())).not.toBeNull();
        });

        it("should render the radio buttons", async () => {
            const { getAllByRole } = await renderComponent(PROPS);

            expect(getAllByRole("radio")).toHaveLength(3);
        });

        it("should render the form submit button", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("button", { name: "Submit" })).not.toBeNull();
        });
    });
});

describe("<Form />", () => {
    describe("Happy path", () => {
        it.skip("should submit successfully when user inputs values", async () => {
            const { getByLabelText, getByRole } = await renderComponent(PROPS);

            const emailInput = getByLabelText(LOREM.labelEmail());

            const descriptionTextArea = getByLabelText(LOREM.labelDescription());

            const sliderThumb = getByRole("slider");

            const firstRadioItem = getByRole("radio", {
                name: `${RADIO_BUTTON_CARDS_MOCK[0].title} ${RADIO_BUTTON_CARDS_MOCK[0].body}`,
            });

            await act(async () => {
                await userEvent.type(emailInput, LOREM.email());

                await userEvent.type(descriptionTextArea, LOREM.text_xxs);
            });

            expect(emailInput).toHaveValue(LOREM.email());

            expect(descriptionTextArea).toHaveValue(LOREM.text_xxs);

            await selectFromSingleSelect({
                expected_value: mockSelectItems({})[0].label,
                getByRole,
                item_label: mockSelectItems({})[0].label,
                select_label: LOREM.labelDropdown(),
            });

            await act(async () => {
                await userEvent.click(sliderThumb);

                await userEvent.keyboard("{arrowright}");
            });

            await act(async () => {
                await userEvent.click(firstRadioItem);
            });

            await act(async () => {
                fireEvent.submit(getByRole("form"));
            });

            await waitFor(() => {
                expect(handleErrors).not.toHaveBeenCalled();

                expect(handleSubmit).toHaveBeenCalledWith(
                    expect.objectContaining({
                        amount: 1,
                        description: LOREM.text_xxs,
                        email: LOREM.email(),
                        radio: RADIO_BUTTON_CARDS_MOCK[0].value,
                        select: mockSelectItems({})[0].value,
                    }),
                    expect.objectContaining({
                        type: "submit",
                    })
                );
            });
        });

        it.skip("should submit successfully when default values are provided", async () => {
            const handleFormSubmissionDefaultValuesMock = jest.fn();

            const { getByRole } = await renderComponent(
                mockForm({
                    handleErrors,
                    handleSubmit: handleFormSubmissionDefaultValuesMock,
                    withDefaultValues: true,
                })
            );

            await act(async () => {
                fireEvent.submit(getByRole("form"));
            });

            await waitFor(() => {
                expect(handleFormSubmissionDefaultValuesMock).toHaveBeenCalledWith(
                    expect.objectContaining({
                        amount: 50,
                        description: LOREM.text_xxs,
                        email: LOREM.email(),
                        select: mockSelectItems({})[0].value,
                    }),
                    expect.objectContaining({
                        type: "submit",
                    })
                );
            });
        });
    });
});

describe("<Form />", () => {
    describe.only("Unhappy path", () => {
        it("should call handleErrors when the form submission fails", async () => {
            jest.spyOn(console, "error").mockImplementation();

            const { getAllByRole, getByRole } = await renderComponent(PROPS);

            await act(async () => {
                fireEvent.submit(getByRole("form"));
            });

            await waitFor(() => {
                expect(handleErrors).toHaveBeenCalled();

                expect(getAllByRole("alert")).toHaveLength(5);
            });
        });
    });
});
