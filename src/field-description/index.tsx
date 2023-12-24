import { Text as ReactAriaText } from "react-aria-components";
import { descriptionCSS } from "./styles.css";
import clsx from "clsx";

export function FieldDescription({
	className,
	description,
}: {
	className?: string;
	description: string | null | undefined;
}) {
	if (!description) {
		return null;
	}

	return (
		<ReactAriaText
			className={clsx(descriptionCSS, className)}
			slot="description"
		>
			{description}
		</ReactAriaText>
	);
}
