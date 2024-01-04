import clsx from "clsx";
import { Text as ReactAriaText } from "react-aria-components";
import { descriptionCSS } from "./styles.css";

export function FieldDescription({
	className,
	description,
}: {
	className?: string;
	description: React.ReactNode;
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
