import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useState } from "react";
import { z } from "zod";
import { Box } from "../box";
import { ButtonProps } from "../button";
import { Form } from "../form";
import { FormInput } from "../form-input";
import { FormSubmitButton } from "../v2-form-submit-button";
import { InputProps } from "../input";
import { WithColorOverlay } from "../types";
import { confirmTextCSS } from "./styles.css";

const getZodSchema = ({
	strConfirmText,
	strInvalid,
}: { strConfirmText: string; strInvalid: string }) => {
	return z.object({
		confirm_text: z.literal(strConfirmText, {
			errorMap: () => {
				return { message: strInvalid };
			},
		}),
	});
};

export const ModalActionConfirm = forwardRef<
	HTMLDivElement,
	WithColorOverlay & {
		/**
		 * Props to forward to the input element.
		 */
		inputProps?: Partial<InputProps>;

		/**
		 * Additional props to customise the confirm button.
		 */
		buttonProps?: Omit<ButtonProps, "onClick">;

		/**
		 * The callback when the user confirms the action.
		 */
		onClick?: ButtonProps["onClick"];

		/**
		 * The string shown when the field fails validation.
		 */
		strInvalid: string;

		/**
		 * The text for the confirm button.
		 */
		strButtonText: string;

		/**
		 * The text that the user has to type to confirm the action.
		 */
		strConfirmText: string;

		/**
		 * The text prefixed to the confirmation prompt.
		 */
		strPromptPrefix: string;

		/**
		 * The text suffixed to the confirmation prompt.
		 */
		strPromptSuffix: string;
	}
>(
	(
		{
			buttonProps,
			strButtonText,
			inputProps,
			colorOverlay,
			strInvalid,
			strConfirmText,
			onClick,
			strPromptPrefix,
			strPromptSuffix,
		},
		ref,
	) => {
		const [userConfirmText, setUserConfirmText] = useState("");

		return (
			<Box ref={ref}>
				<Box className={confirmTextCSS}>
					<Box as="span">{strPromptPrefix}</Box>{" "}
					<Box as="span" fontWeight="bold">
						{strConfirmText}
					</Box>{" "}
					<Box as="span">{strPromptSuffix}</Box>
				</Box>

				<Form
					handleSubmit={() => {
						onClick();
					}}
					name="modal_action_confirmation"
					resolver={zodResolver(
						getZodSchema({ strConfirmText, strInvalid }),
					)}
				>
					<FormInput
						{...(inputProps as InputProps)}
						colorOverlay={colorOverlay}
						marginBottom="space_2"
						autoComplete="off"
						size="sm"
						name="confirm_text"
						onChange={(e) => {
							return setUserConfirmText(e.target.value);
						}}
						placeholder=""
						value={userConfirmText}
					/>
					<FormSubmitButton
						{...buttonProps}
						size="sm"
						appearance="primary"
						colorOverlay={colorOverlay}
						aria-disabled={userConfirmText !== strConfirmText}
						name="primary_action"
						width="100%"
					>
						{strButtonText}
					</FormSubmitButton>
				</Form>
			</Box>
		);
	},
);
