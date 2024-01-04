import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useState } from "react";
import { z } from "zod";
import { WithColorOverlay } from "../types";
import { FormSubmitButton } from "../form-submit-button";
import { Box } from "../__DONE__box";
import { Form } from "../form";
import { FormInput } from "../form-input";
import { InputProps } from "../_DEPRECATED_input";
import { sprinkles } from "../__DONE__sprinkles/index.css";
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

export const ConfirmedAction = forwardRef<
	HTMLDivElement,
	WithColorOverlay & {
		/**
		 * Props to forward to the input element.
		 */
		inputProps?: Partial<InputProps>;

		/**
		 * Additional props to customise the confirm button.
		 */
		buttonProps?: Omit<React.ComponentProps<typeof FormSubmitButton>, "onPress">;

		/**
		 * The callback when the user confirms the action.
		 */
		onConfirmed?: (() => unknown) | (() => Promise<unknown>);

		/**
		 * The string shown when the field fails validation.
		 */
		strInvalid: string;

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
			inputProps,
			colorOverlay,
			strInvalid,
			strConfirmText,
			onConfirmed,
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
						onConfirmed?.();
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
						className={sprinkles({
							width: "100%",
						})}
						appearance="primary"
						colorOverlay={colorOverlay}
						aria-disabled={userConfirmText !== strConfirmText}
					/>
				</Form>
			</Box>
		);
	},
);
