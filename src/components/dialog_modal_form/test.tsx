/** @jest-environment jsdom */
import { zodResolver } from "@hookform/resolvers/zod";
import { render, waitFor } from "@testing-library/react";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";
import { z } from "zod";

import { DialogModalForm } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../button";
import { FormInput } from "../form_input";
import { FormRadioButtonGroup } from "../form_radio_button_group";
import { FormSelectSingle } from "../form_select_single";
import { FormTextArea } from "../form_text_area";
import { RADIO_BUTTONS_MOCK } from "../radio_button_group/mocks";
import { mockSelectItems } from "../select/__mocks__/select.mock";

import type { DialogModalFormProps } from ".";

/** ----------------------------------------------------------------------------- */

const mockFormSchema = z.object({
  description: z.string().min(1),
  email: z.string().email().min(2),
  radio: z.string().min(1),
  select: z.string().min(1),
});

/** ----------------------------------------------------------------------------- */

const renderComponent = async (props: DialogModalFormProps) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialogRemoveTeamMember = () => {
    dialogRef.current?.showModal();
  };

  return waitFor(() => {
    return render(
      <>
        <button onClick={openDialogRemoveTeamMember} type="button">
          Open
        </button>
        <DialogModalForm ref={dialogRef} {...props} />
      </>
    );
  });
};

/** ----------------------------------------------------------------------------- */

const handleFormSubmissionMock = jest.fn();

const PROPS: DialogModalFormProps = {
  children: (
    <>
      <FormInput
        errorMessage="Enter a valid email address"
        id="email"
        label={LOREM.labelEmail()}
        name="email"
        placeholder="Enter your email address"
      />
      <FormTextArea
        errorMessage="Enter a valid description"
        id="description"
        label={LOREM.labelDescription()}
        name="description"
        placeholder="Enter your description"
      />
      <FormSelectSingle
        errorMessage="Select an option"
        id="select"
        items={mockSelectItems({})}
        label={LOREM.labelDropdown()}
        name="select"
        placeholder="Select an option from the dropdown"
      />
      <FormRadioButtonGroup
        errorMessage="Select an option"
        id="select"
        items={RADIO_BUTTONS_MOCK}
        label={LOREM.labelDropdown()}
        name="radio"
      />
    </>
  ),
  formSubmitButtonText: "Submit",

  handleFormSubmission: handleFormSubmissionMock,
  resolver: zodResolver(mockFormSchema),
  title: "Dialog modal form",
  triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
};

/** ----------------------------------------------------------------------------- */

describe("<DialogModalForm />", () => {
  describe.only("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { container } = await renderComponent(PROPS);

      expect(container).not.toBeNull();
    });

    it("should match snapshot", async () => {
      const { container } = await renderComponent(PROPS);

      expect(container).toMatchSnapshot();
    });
  });
});
