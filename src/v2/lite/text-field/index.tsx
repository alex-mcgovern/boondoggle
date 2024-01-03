import { faClipboard } from "@fortawesome/pro-regular-svg-icons/faClipboard";
import clsx from "clsx";
import * as React from "react";
import {
	Group as RACGroup,
	type GroupProps as RACGroupProps,
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../v1/tooltip";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { useToastContext } from "../../toast";
import { textFieldCSS, textFieldGroupCSS } from "./styles.css";

export const TextField = React.forwardRef<HTMLInputElement, RACTextFieldProps>((
	{ className, ...props },
	ref,
) => {
	return (
			<RACTextField
				{...props}
				className={clsx(
					className,
					textFieldCSS({
						isDisabled: props.isDisabled,
						isInvalid: props.isInvalid,
					}),
				)}
				id={props.name}
				ref={ref}
			>
				{props.children}
			</RACTextField>
	);
});

const copy = async (value: string | number | readonly string[] | undefined) => {
	return navigator.clipboard.writeText(value as string);
};

export const TextFieldCopyButton = ({
	strCopy,
	strCopied,
	inputRef,
}: {
	strCopy: string;
	strCopied: string;
	inputRef: React.RefObject<HTMLInputElement>;
}) => {
	const toastContext = useToastContext();

	if (!inputRef) {
		throw new Error("[TextFieldCopyButton] inputRef is required");
	}

	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<Button
					size="square_sm"
					appearance="secondary"
					name="copy"
					excludeFromTabOrder
					onPress={() => {
						copy(inputRef.current?.value).then(() => {
							toastContext.add(
								{
									title: strCopied,
									level: "success",
								},
								{ timeout: 5000 },
							);
						});
					}}
				>
					<Icon icon={faClipboard} />
				</Button>
			</TooltipTrigger>
			<TooltipContent>{strCopy}</TooltipContent>
		</Tooltip>
	);
};

export const TextFieldGroup = ({ className, ...props }: RACGroupProps) => {
	return (
		<RACGroup className={clsx(className, textFieldGroupCSS)} {...props} />
	);
};
