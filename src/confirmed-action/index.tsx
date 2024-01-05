import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { z } from "zod";
import { Box } from "../box";
import { Form } from "../form";
import { FormSubmitButton } from "../form-submit-button";
import { ColorOverlay, variantColorOverlay } from "../index.css";
import { Input } from "../input";
import { Label } from "../label";
import { sprinkles } from "../sprinkles/index.css";
import { FormTextField } from "../text-field";

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

type ConfirmedActionProps = {
	buttonContent: React.ReactNode;
	colorOverlay?: ColorOverlay;
	onConfirmed?: (() => unknown) | (() => Promise<unknown>);
	strConfirmText: string;
	strInvalid: string;
	strPromptPrefix: string;
	strPromptSuffix: string;
};

export const ConfirmedAction = forwardRef<
	HTMLDivElement,
	ConfirmedActionProps

>(
	(
		{
			buttonContent,
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


				<Form
					handleSubmit={() => {
						onConfirmed?.();
					}}
					name="modal_action_confirmation"
					resolver={zodResolver(
						getZodSchema({ strConfirmText, strInvalid }),
					)}
				>
					<FormTextField
						autoComplete="off"
						name="confirm_text"
						onChange={setUserConfirmText}
						className={clsx(sprinkles({ marginBottom: "space_2" }), colorOverlay && variantColorOverlay[colorOverlay])}
					>
						<Label>
							<span>{strPromptPrefix}</span>{" "}
							<b>
								{strConfirmText}
							</b>{" "}
							<span>{strPromptSuffix}</span>
							</Label>
						<Input />
					</FormTextField>

					<FormSubmitButton

						size="sm"
						className={sprinkles({
							width: "100%"
						})}
						appearance="primary"
						colorOverlay={colorOverlay}
						aria-disabled={userConfirmText !== strConfirmText}
					>
						
						{buttonContent}
						
						</FormSubmitButton>
				</Form>
			</Box>
		);
	}
);
