import { expect, jest } from "@storybook/jest";
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from "@storybook/testing-library";
import { act } from "react-dom/test-utils";

import { Form as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { RADIO_BUTTON_CARDS_MOCK } from "../radio_button_card_group/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../select/__mocks__/select.mock";
import { mockForm } from "./__mocks__/mock_form.mock";
import { mockFormWithZodValidatedFields } from "./__mocks__/mock_form_with_zod_validated_fields.mock";

import type { Meta, StoryObj } from "@storybook/react";
import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/dom";

/** ----------------------------------------------------------------------------- */

type SelectSingleSelectItemProps = {
  expected_value: string;
  getByRole: (
    role: ByRoleMatcher,
    options?: ByRoleOptions | undefined
  ) => HTMLElement;
  item_label: string;
  select_label: string;
};

const selectFromSingleSelect = async ({
  expected_value,
  getByRole,
  item_label,
  select_label,
}: SelectSingleSelectItemProps) => {
  const select = getByRole("combobox", { name: select_label });

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getByRole: getByRoleScoped } = within(
    (
      ((select.parentNode as HTMLElement).parentNode as HTMLElement)
        .parentNode as HTMLElement
    ).parentNode as HTMLElement
  );

  await userEvent.click(select);

  const item = getByRoleScoped("option", { name: item_label });

  await userEvent.click(item);
  await waitFor(() => {
    expect(select).toHaveValue(expected_value);
  });
};

/** ----------------------------------------------------------------------------- */

const handleFormSubmissionMock = jest.fn();
const handleErrorsMock = jest.fn();

handleFormSubmissionMock.mockImplementation(async (fieldValues: unknown) => {
  return alert(
    `Form submitted successfully \n ${JSON.stringify(fieldValues, null, 2)}`
  );
});

handleErrorsMock.mockImplementation(async (errors: unknown) => {
  return alert(`Form validation error \n ${JSON.stringify(errors, null, 2)}`);
});

const meta = {
  component: StoryComp,
  title: "Components/Form",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

export const Default: Story = {
  args: mockForm({
    handleErrors: handleErrorsMock,
    handleFormSubmission: handleFormSubmissionMock,
  }),
  play: async ({ canvasElement }) => {
    const { getByLabelText, getByRole } = within(canvasElement);

    const emailInput = getByLabelText(LOREM.labelEmail());
    const descriptionTextArea = getByLabelText(LOREM.labelDescription());
    const sliderThumb = getByRole("slider");
    const firstRadioItem = getByRole("radio", {
      name: `${RADIO_BUTTON_CARDS_MOCK[0].title} ${RADIO_BUTTON_CARDS_MOCK[0].body}`,
    });

    /** --------------------------------------------- */

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

    await userEvent.click(firstRadioItem);

    /** --------------------------------------------- */

    await act(async () => {
      fireEvent.submit(getByRole("form"));
    });

    /** --------------------------------------------- */

    await waitFor(() => {
      expect(handleErrorsMock).not.toHaveBeenCalled();

      expect(handleFormSubmissionMock).toHaveBeenCalledWith(
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
  },
};

export const WithDefaultValues: Story = {
  args: mockForm({
    handleErrors: handleErrorsMock,
    handleFormSubmission: handleFormSubmissionMock,
    withDefaultValues: true,
    withOptionalFields: true,
  }),
};

export const WithOptionalFields: Story = {
  args: mockForm({
    handleErrors: handleErrorsMock,
    handleFormSubmission: handleFormSubmissionMock,
    withOptionalFields: true,
  }),
};

export const WithZodValidatedFields: Story = {
  args: mockFormWithZodValidatedFields({
    handleErrors: handleErrorsMock,
    handleFormSubmission: handleFormSubmissionMock,
  }),
};
