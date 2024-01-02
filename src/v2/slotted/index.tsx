import clsx from "clsx";
import { Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { slottedCSS } from "./styles.css";

export const Slotted = ({
	children,
	className,
	color = "text_low_contrast",
}: {
	className?: string;
	children: React.ReactNode;
	color?: Sprinkles["color"];
}) => {
	return (
		<div className={clsx(slottedCSS, className, sprinkles({ color }))}>
			{children}
		</div>
	);
};
