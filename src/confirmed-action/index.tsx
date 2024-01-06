import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { z } from "zod";

import type { ColorOverlay} from "../index.css";

import { Box } from "../box";
import { Form } from "../form";
import { FormSubmitButton } from "../form-submit-button";
import { variantColorOverlay } from "../index.css";
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
	onConfirmed?: (() => Promise<unknown>) | (() => unknown);
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
			onConfirmed,
			strConfirmText,
			strInvalid,
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
						className={clsx(sprinkles({ marginBottom: "space_2" }), colorOverlay && variantColorOverlay[colorOverlay])}
						name="confirm_text"
						onChange={setUserConfirmText}
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

						appearance="primary"
						aria-disabled={userConfirmText !== strConfirmText}
						className={sprinkles({
							width: "100%"
						})}
						colorOverlay={colorOverlay}
						size="sm"
					>
						
						{buttonContent}
						
						</FormSubmitButton>
				</Form>
			</Box>
		);
	}
);
