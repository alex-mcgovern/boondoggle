/** @jest-environment jsdom */
import { render, waitFor } from "@testing-library/react";
import { createRef } from "react";

import { DialogModal } from ".";
import "../../../test/mocked_dependencies/dialog.mock";
import { DialogModalActionConfirm } from "../dialog_modal_action_confirm";

import type { DialogModalProps } from ".";

/** ----------------------------------------------------------------------------- */

const renderComponent = async (props: DialogModalProps) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return waitFor(() => {
    return render(
      <>
        <button onClick={openDialog} type="button">
          Open
        </button>
        <DialogModal ref={dialogRef} {...props} />
      </>
    );
  });
};

/** ----------------------------------------------------------------------------- */

describe("<DialogModal />", () => {
  describe("default", () => {
    describe("on initial render", () => {
      it("should render without throwing", async () => {
        const { container } = await renderComponent({
          children: "hello",
          height: "lg",
          title: "hello",
          width: "lg",
        });

        expect(container).not.toBeNull();
      });

      it("should match snapshot", async () => {
        const { container } = await renderComponent({
          children: "hello",
          height: "lg",
          title: "hello",
          width: "lg",
        });

        expect(container).toMatchSnapshot();
      });
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<DialogModal />", () => {
  describe("default", () => {
    describe("on initial render", () => {
      it("should render without throwing", async () => {
        const { container } = await renderComponent({
          actions: (
            <DialogModalActionConfirm
              buttonText="Remove team member"
              colorOverlay="red"
              confirmText="remove team member"
              onClick={() => {
                alert("clicked");
              }}
              promptPrefix="Please type"
              promptSuffix="To continue"
            />
          ),
          children: "hello",
          height: "lg",
          title: "hello",
          width: "lg",
        });

        expect(container).not.toBeNull();
      });
    });
  });
});
