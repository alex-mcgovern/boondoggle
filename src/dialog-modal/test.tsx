/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { DialogModal } from ".";
import "../../test/mocked_dependencies/dialog.mock";

import type { DialogModalProps } from ".";
import { ModalActionConfirm } from "../modal-action-confirm";

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
			</>,
		);
	});
};

describe("<DialogModal />", () => {
	describe("default", () => {
		describe("on initial render", () => {
			test("should render without throwing", async () => {
				const { container } = await renderComponent({
					children: "hello",

					title: "hello",
					width: "lg",
				});

				expect(container).not.toBeNull();
			});
		});
	});
});

describe("<DialogModal />", () => {
	describe("default", () => {
		describe("on initial render", () => {
			test("should render without throwing", async () => {
				const { container } = await renderComponent({
					actions: (
						<ModalActionConfirm
							strButtonText="Remove team member"
							colorOverlay="red"
							strConfirmText="remove team member"
							strInvalid="The text you have entered is incorrect"
							onClick={() => {
								alert("clicked");
							}}
							strPromptPrefix="Please type"
							strPromptSuffix="To continue"
						/>
					),
					children: "hello",

					title: "hello",
					width: "lg",
				});

				expect(container).not.toBeNull();
			});
		});
	});
});
